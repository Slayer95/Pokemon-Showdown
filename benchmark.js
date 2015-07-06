require('sugar');
var exec = require('child_process').exec;

var env = {};
var lastArg = process.argv.last();

switch (lastArg) {
case '--old': case 'old':
	env.type = 'old';
	break;
case '--new': case 'new':
	env.type = 'new';
	break;
case '--average-old': case 'average-old':
	var list = ('' + require('fs').readFileSync('old-tools.txt')).split(/[\r\n]+/).map(function (elem) {return parseInt(elem, 10);});
	list.pop();
	console.log(list.sum() / list.length);
	process.exit();
case '--average-new': case 'average-new':
	var list = ('' + require('fs').readFileSync('new-tools.txt')).split(/[\r\n]+/).map(function (elem) {return parseInt(elem, 10);});
	list.pop();
	console.log(list.sum() / list.length);
	process.exit();
default:
	throw new Error("Unsupported option");
}

var maxExecutions = 30;
var currentExecutions = 0;
var times = [];

function getAverage (list) {
	if (!list.length) throw new Error("No data collected");
	var sum = list.sum();
	return sum / list.length;
}

function logStats (list) {
	var average = getAverage(list);
	var variance = 0;
	var length = list.length;
	for (var i = 0; i < length; i++) {
		variance += Math.pow(list[i] - average, 2) / length;
	}

	console.log(
		'Benchmark results for ' + list.length + ' iterations:' + '\n' +
		'Average: ' + Math.round(average) + ' ± ' + Math.round(Math.pow(variance, 0.5)) + ' ms' + '\n' +
		'Min: ' + list.min() + '; Max: ' + list.max()
	);
}

var childProcess;
var execNext = function () {
	if (currentExecutions >= maxExecutions) return logStats(times);
	currentExecutions++;
	childProcess = exec('node benchmark-child.js', {env: env}, callback);
}

function callback (err, stdout, stderr) {
	childProcess.kill('SIGTERM');
	childProcess.kill('SIGINT');
	childProcess.kill('SIGKILL');
	if (err) throw err;
	if (stderr) throw new Error(stderr);
	times.push(Math.round(Number(stdout) / 1e6));
	process.nextTick(execNext);	
}

execNext();
