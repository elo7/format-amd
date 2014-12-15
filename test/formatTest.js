var fs = require('fs');
var vm = require('vm');
var assert = require("assert");

vm.runInThisContext(fs.readFileSync('bower_components/async-define/async-define.js'));
vm.runInThisContext(fs.readFileSync('format.js'));

define(['format'], function(format) {
	describe('Format', function(){
		it('should return currency number without currency string', function(){
			var currency = 'R$ 10,50';
			var number = format.currencyToNumber(currency);
			assert.equal(10.50, number);
		});
		it('should return currency value with a float value param', function(){
			var number = 10.50;
			var currency = format.currency(number, "R$");
			assert.equal("R$ 10,50", currency);
		});
	});
});
