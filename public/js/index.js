'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.entryModule = undefined;

var _test = require('./test');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//console.log(testModule);
var entryModule = exports.entryModule = function entryModule() {
	_classCallCheck(this, entryModule);

	_test.testModule.abc();
};

/*exports.entryModule = function() {
	console.log("avdvfd");
}*/