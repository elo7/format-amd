define('format', [], function() {
	return {
		'currency' : function(floatValue, prefix) {
			if(!isNaN(floatValue)) {
				var numberParts = floatValue.toString().replace('-', '').split('.'),
				interger = numberParts[0], decimal = ',' + numberParts[1] + '0';
				prefix = prefix || '';
				if(prefix) {
					prefix = prefix.trim() + ' ';
				}
				sign = floatValue < 0 ? '-' : '';

				var firstPart = numberParts[0].replace(/,/g, '');
				if(firstPart.length > 3) {
					var intergerLength = firstPart.length;
					interger = firstPart.substring(0, intergerLength - 3) + '.' + firstPart.substring(intergerLength - 3, intergerLength);
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
