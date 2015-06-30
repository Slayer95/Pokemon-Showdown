var fs = require('fs');
var path = require('path');
var util = require('util');

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var merge = require('merge-stream');
var cache = require('gulp-cache');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var replace = require('gulp-replace');
var jshintStylish = require('jshint-stylish');

var CacheSwap = require('cache-swap');
var fileCache = new CacheSwap({tmpDir: '.', cacheDirName: 'gulp-cache'});

var environmentVersion = {
	gulpfile: fs.readFileSync(__filename, 'utf8'),
	devTools: require('glob').sync('./dev-tools/**/*.js').map(function (filename) {return fs.readFileSync(filename, 'utf8');}),
	versions: [process.versions.node].concat(['gulp-cache', 'gulp-jscs', 'gulp-jshint', 'gulp'].map(function (packageName) {return require('./node_modules/' + packageName + '/package.json').version;}))
};

var globals = {};
var globalList = [
	'Config', 'ResourceMonitor', 'toId', 'toName', 'string', 'LoginServer',
	'Users', 'Rooms', 'Verifier', 'CommandParser', 'Simulator', 'Tournaments',
	'Dnsbl', 'Cidr', 'Sockets', 'Tools', 'TeamValidator'
];
globalList.forEach(function (identifier) {globals[identifier] = false;});

function transformLet () {
	// Replacing `var` with `let` is sort of a hack that stops jsHint from
	// complaining that I'm using `var` like `let` should be used, but
	// without having to deal with iffy `let` support.

	return lazypipe()
		.pipe(replace.bind(null, /\bvar\b/g, 'let'))();
}

function cachedJsHint (jsHintOptions) {
	function cachedJsHint () {
		return cache(jshint(jsHintOptions, {timeout: 450000}), {
			success: function (file) {
				return file.jshint.success;
			},
			value: function (file) {
				return {jshint: file.jshint};
			},
			fileCache: fileCache
		});
	}
	return lazypipe()
		.pipe(cachedJsHint)();
}

function cachedJscs (jscsOptions) {
	function cachedJscs () {
		return cache(jscs(jscsOptions, {timeout: 450000}), {
			key: function (file) {
				var key = JSON.stringify(util._extend({file: file._contents.toString('utf8')}, environmentVersion));
				if (('' + file.history).slice(-6) === 'app.js') {
					console.log(file);
					console.log('keyHash: ' + require('crypto').createHash('md5').update(key).digest('hex'));
				}
				return key;
			},
			success: function (file) {
				console.log('JSCS success at ' + path.basename('' + file.history));
				return file.jscs.success;
			},
			value: function (file) {
				return {jscs: file.jscs};
			},
			fileCache: fileCache
		});
	}
	return lazypipe()
		.pipe(cachedJscs)();
}

function lint (jsHintOptions, jscsOptions) {
	function cachedJsHint () {
		return cache(jshint(jsHintOptions, {timeout: 450000}), {
			success: function (file) {
				return file.jshint.success;
			},
			value: function (file) {
				return {jshint: file.jshint};
			},
			fileCache: fileCache
		});
	}
	return lazypipe()
		.pipe(cachedJsHint)
		.pipe(jscs.bind(jscs, jscsOptions))();
}

var jsHintOptions = {};
jsHintOptions.base = {
	"nonbsp": true,
	"nonew": true,
	"noarg": true,
	"loopfunc": true,
	"latedef": 'nofunc',

	"freeze": true,
	"undef": true,

	"sub": true,
	"evil": true,
	"esnext": true,
	"node": true,
	"eqeqeq": true,

	"globals": globals
};
jsHintOptions.legacy = util._extend(util._extend({}, jsHintOptions.base), {
	"es3": true
});
jsHintOptions.test = util._extend(util._extend({}, jsHintOptions.base), {
	"globals": util._extend(globals, {
		"BattleEngine": false
	}),
	"mocha": true
});

var jscsOptions = {};
jscsOptions.base = {
	"preset": "yandex",

	"additionalRules": [
		new (require('./dev-tools/jscs-custom-rules/validate-conditionals.js'))(),
		new (require('./dev-tools/jscs-custom-rules/validate-case-indentation.js'))()
	],
	"validateConditionals": true,
	"validateCaseIndentation": true,

	"requireCurlyBraces": null,

	"maximumLineLength": null,
	"validateIndentation": '\t',
	"validateQuoteMarks": null,
	"disallowYodaConditions": null,
	"disallowQuotedKeysInObjects": null,
	"requireDotNotation": null,

	"disallowMultipleVarDecl": null,
	"disallowImplicitTypeConversion": null,
	"requireSpaceAfterLineComment": null,
	"validateJSDoc": null,

	"disallowMixedSpacesAndTabs": "smart",
	"requireSpaceAfterKeywords": true,

	"disallowSpacesInFunctionDeclaration": null,
	"requireSpacesInFunctionDeclaration": {
		"beforeOpeningCurlyBrace": true
	},
	"requireSpacesInAnonymousFunctionExpression": {
		"beforeOpeningRoundBrace": true,
		"beforeOpeningCurlyBrace": true
	},
	"disallowSpacesInNamedFunctionExpression": null,
	"requireSpacesInNamedFunctionExpression": {
		"beforeOpeningCurlyBrace": true
	},
	"validateParameterSeparator": ", ",

	"requireBlocksOnNewline": 1,
	"disallowPaddingNewlinesInBlocks": true,

	"requireOperatorBeforeLineBreak": true,
	"disallowTrailingComma": true,

	"requireCapitalizedConstructors": true,

	"validateLineBreaks": require('os').EOL === '\n' ? 'LF' : null,
	"disallowMultipleLineBreaks": null,

	"esnext": true
};
jscsOptions.config = util._extend(util._extend({}, jscsOptions.base), {
	"disallowTrailingComma": null
});
jscsOptions.dataCompactArr = util._extend(util._extend({}, jscsOptions.base), {
	"requireSpaceAfterBinaryOperators": ["="],
	"requireSpaceBeforeBinaryOperators": ["="],
	"disallowSpaceAfterBinaryOperators": [","],
	"disallowSpaceBeforeBinaryOperators": [","]
});
jscsOptions.dataCompactAll = {
	"disallowTrailingComma": true,

	"validateLineBreaks": 'CI' in process.env ? 'LF' : null,
	"requireLineFeedAtFileEnd": true,
	"requireSpaceAfterBinaryOperators": ["="],
	"requireSpaceBeforeBinaryOperators": ["="],

	"validateQuoteMarks": "\"",
	"disallowQuotedKeysInObjects": "allButReserved",

	"disallowSpaceAfterObjectKeys": true,
	"disallowSpaceBeforeObjectValues": true,
	"disallowSpacesInsideBrackets": true,
	"disallowSpacesInsideArrayBrackets": true,
	"disallowSpacesInsideObjectBrackets": true,
	"disallowSpacesInsideParentheses": true,
	"disallowSpaceAfterBinaryOperators": [","],
	"disallowSpaceBeforeBinaryOperators": [","]
};
jscsOptions.dataCompactAllIndented = util._extend(util._extend({}, jscsOptions.dataCompactAll), {
	"validateIndentation": '\t'
});

var lintData = [
	{
		dirs: ['./*.js', './tournaments/*.js', './chat-plugins/*.js', './config/!(config).js', './data/rulesets.js', './data/statuses.js'],
		jsHint: jsHintOptions.base,
		jscs: jscsOptions.base
	}, {
		dirs: ['./data/scripts.js', './mods/*/scripts.js', './mods/*/rulesets.js', './mods/*/statuses.js', './dev-tools/**.js'],
		jsHint: jsHintOptions.base,
		jscs: jscsOptions.base
	}, {
		dirs: ['./config/config*.js'],
		jsHint: jsHintOptions.base,
		jscs: jscsOptions.config
	}, {
		dirs: ['./data/abilities.js', './data/items.js', './data/moves.js', './data/typechart.js', './data/aliases.js', './mods/*/abilities.js', './mods/*/items.js', './mods/*/moves.js', './mods/*/typechart.js'],
		jsHint: jsHintOptions.legacy,
		jscs: jscsOptions.base
	}, {
		dirs: ['./data/formats-data.js', './mods/*/formats-data.js', './mods/!(gen1)/pokedex.js'],
		jsHint: jsHintOptions.legacy,
		jscs: jscsOptions.dataCompactArr
	}, {
		dirs: ['./data/pokedex.js', './mods/gen1/pokedex.js'],
		jsHint: jsHintOptions.legacy,
		jscs: jscsOptions.dataCompactAll
	}, {
		dirs: ['./data/learnsets*.js', './mods/*/learnsets.js'],
		jsHint: jsHintOptions.legacy,
		jscs: jscsOptions.dataCompactAllIndented
	}, {
		dirs: ['./test/*.js', './test/application/*.js', './test/simulator/*/*.js', './test/dev-tools/*/*.js'],
		jsHint: jsHintOptions.test,
		jscs: jscsOptions.base
	}
];

var linter = function () {
	return (
		merge.apply(
			null,
			lintData.map(function (source) {
				return gulp.src(source.dirs)
					.pipe(transformLet())
					.pipe(lint(source.jsHint, source.jscs));
			})
		).pipe(jshint.reporter(jshintStylish))
		 .pipe(jshint.reporter('fail'))
	);
};

gulp.task('fastlint', function () {
	var source = lintData[0];
	return gulp.src(source.dirs)
		.pipe(transformLet())
		.pipe(lint(source.jsHint, source.jscs))
		.pipe(jshint.reporter(jshintStylish))
		.pipe(jshint.reporter('fail'));
});

gulp.task('clear', function (done) {
	fileCache.clear('default', done);
});

gulp.task('lint', linter);
gulp.task('default', linter);
