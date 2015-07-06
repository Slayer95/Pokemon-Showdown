require('sugar');
var exec = require('child_process').exec;

switch (process.argv.last()) {
case '--average-old': case 'average-old':
	var list = ('' + require('fs').readFileSync('old-tools.txt')).split(/[\r\n]+/).map(function (elem) {return parseInt(elem, 10);});
	list.pop();
	console.log(list.sum() / list.length);
	process.exit();
	break;
case '--average-new': case 'average-new':
	var list = ('' + require('fs').readFileSync('new-tools.txt')).split(/[\r\n]+/).map(function (elem) {return parseInt(elem, 10);});
	list.pop();
	console.log(list.sum() / list.length);
	process.exit();
	break;
}

var maxExecutions = 3;
var currentExecutions = 0;
var times = {};

function getAverage (list) {
	if (!list.length) throw new Error("No data collected");
	var sum = list.sum();
	return sum / list.length;
}

function logStats () {
	for (var type in times) {
		var list = times[type];

		// Size
		var length = list.length;

		// Average
		var average = getAverage(list);

		// Variance
		var variance = 0;
		for (var i = 0; i < length; i++) {
			variance += Math.pow(list[i] - average, 2) / length;
		}

		console.log(
			'Benchmark results for ' + list.length + ' iterations with `' + type + '`:' + '\n' +
			'Average: ' + Math.round(average) + ' ± ' + Math.round(Math.pow(variance, 0.5)) + ' ms' + '\n' +
			'Min: ' + list.min() + '; Max: ' + list.max()
		);
	}
}

var env = {};
var childProcess;
var execNext = function () {
	if (currentExecutions >= maxExecutions) return false;
	currentExecutions++;
	childProcess = exec('node benchmark-child.js', {env: env}, callback);
	return true;
}

var branches = [['old', 'master-extra'], ['new', 'tools-split-extra']];
function switchBranch () {
	var nextBranch = branches.shift();
	if (!nextBranch) return logStats();
	exec('git checkout ' + nextBranch[1], function (err, stdout, stderr) {
		if (err) throw err;
		if (stderr && !stderr.includes("Already on ") && !stderr.includes("Switched to branch")) throw new Error(stderr);
		console.log("Branch `" + nextBranch[1] + "`");
		env.type = nextBranch[0];
		times[env.type] = [];
		currentExecutions = 0;
		execNext();
	});
}

function callback (err, stdout, stderr) {
	childProcess.kill('SIGTERM');
	childProcess.kill('SIGINT');
	childProcess.kill('SIGKILL');
	if (err) throw err;
	if (stderr) throw new Error(stderr);
	times[env.type].push(Math.round(Number(stdout) / 1e6));
	if (currentExecutions >= maxExecutions) {
		process.nextTick(switchBranch);
	} else {
		process.nextTick(execNext);
	}
}

switchBranch();

