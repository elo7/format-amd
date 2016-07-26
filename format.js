define('format', [], function() {
	var format = function(firstPart) {
		var intergerLength = firstPart.length,
			rest = intergerLength % 3,
			start = '';

		if(rest) {
			start = firstPart.substring(0 , rest) + '.';
		}
		return start + firstPart.substring(rest , intergerLength).match(/\d{3}/g).join('.');
	}

	return {
		'currency' : function(floatValue, prefix) {
			var normalized = parseFloat(floatValue.toString().replace(/[^\d\.,-]/g, '').replace(/,/g, '.').replace(/\.(\d{3})/g, '$1'));
			if(!isNaN(normalized)) {
				var numberParts = normalized.toString().replace('-', '').split('.'),
					interger = numberParts[0],
					decimal = ',' + numberParts[1] + '0',
					prefix = prefix || '';

				if(prefix) {
					prefix = prefix.trim() + ' ';
				}
				sign = normalized < 0 ? '-' : '';

				var firstPart = numberParts[0].replace(/,/g, '');
				if(firstPart.length > 3) {
					interger = format(firstPart);
				}

				if (numberParts.length == 1) {
					decimal = ',00';
				} else if (numberParts[1].length >= 2) {
					decimal = ',' + numberParts[1].substring(0, 2);
				}

				return sign + prefix + interger + decimal;
			}
			return;
		},
		'currencyToNumber' : function(currency) {
			var normalized = currency.replace(/[^0-9\,]/g, '').replace(',', '.');
			return parseFloat(normalized);
		}
	}
});
