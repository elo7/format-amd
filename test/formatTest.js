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
		it('should return currency for float number with more than two decimal places', function(){
			var number = 123.456789;
			var currency = format.currency(number, "R$");
			assert.equal("R$ 123,45", currency);
		});
		it('should return currency for negative float number with more than two decimal places', function(){
			var number = -123.456789;
			var currency = format.currency(number, "R$");
			assert.equal("-R$ 123,45", currency);
		});
		it('should return currency for hundred', function(){
			var number = 100.50;
			var currency = format.currency(number, "R$");
			assert.equal("R$ 100,50", currency);
		});
		it('should return currency for value over a thousand', function(){
			var number = 1000.50;
			var currency = format.currency(number, "R$");
			assert.equal("R$ 1.000,50", currency);
		});
		it('should return currency for value over a million', function(){
			var number = 1234567.89;
			var currency = format.currency(number, "R$");
			assert.equal("R$ 1.234.567,89", currency);
		});
		it('should return currency for string using comma', function(){
			var number = "10,20";
			var currency = format.currency(number, "R$");
			assert.equal("R$ 10,20", currency);
		});
		it('should return currency for string using dots instead of comma', function(){
			var number = "10.20";
			var currency = format.currency(number, "R$");
			assert.equal("R$ 10,20", currency);
		});
		it('should return currency for negative value', function(){
			var number = "-1.000,20";
			var currency = format.currency(number, "R$");
			assert.equal("-R$ 1.000,20", currency);
		});
		it('should return currency even for wrong formatted strings', function(){
			var number = "1.000.20";
			var currency = format.currency(number, "R$");
			assert.equal("R$ 1.000,20", currency);
		});
		it('should return empty for invalid values', function(){
			var number = "invalidValue";
			var currency = format.currency(number, "R$");
			assert.equal("", currency);
		});
		it('should return empty if the value is empty', function() {
			var currency = format.currency('', '');
			assert.equal("", currency);
		});
	});
});
