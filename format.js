define('format', [], function() {
	'use strict';

	var format = function(firstPart) {
		var integerLength = firstPart.length,
			rest = integerLength % 3,
			start = '';

		if (rest) {
			start = firstPart.substring(0, rest) + '.';
		}
		return start + firstPart.substring(rest, integerLength).match(/\d{3}/g).join('.');
	};

	return {
		'currency': function(floatValue, prefix) {
			var normalized = floatValue;
			if (isNaN(floatValue)) {
				normalized = parseFloat(floatValue.toString()
					.replace(/[^\d.,-]/g, '')
					.replace(/,/g, '.')
					.replace(/\.(\d{3})/g, '$1'));
			}

			if (prefix) {
				prefix = prefix.trim() + ' ';
			} else {
				prefix = '';
			}

			if (normalized && !isNaN(normalized)) {
				var numberParts = normalized.toString().replace('-', '').split('.'),
					integer = numberParts[0],
					decimal = ',' + numberParts[1] + '0',
					sign = normalized < 0 ? '-' : '';

				var firstPart = numberParts[0].replace(/,/g, '');
				if (firstPart.length > 3) {
					integer = format(firstPart);
				}

				if (numberParts.length === 1) {
					decimal = ',00';
				} else if (numberParts[1].length >= 2) {
					decimal = ',' + numberParts[1].substring(0, 2);
				}

				return sign + prefix + integer + decimal;
			}
			return '';
		},
		'currencyToNumber': function(currency) {
			var normalized = currency.replace(/[^0-9,]/g, '').replace(',', '.');
			return parseFloat(normalized);
		},
	};
});
