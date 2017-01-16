# Format-amd

_Format-amd string/number library_

Format.js is a library that converts string to number or the opposite. This library uses [amd](http://en.wikipedia.org/wiki/Asynchronous_module_definition) structure. Currently, we support currency formats.


[![Build Status](https://travis-ci.org/elo7/format-amd.svg?branch=master)](https://travis-ci.org/elo7/format-amd)


## Install

Install : `npm install elo7-format-amd`

## Dependency

Format-amd depends on an [amd](http://en.wikipedia.org/wiki/Asynchronous_module_definition) implementation. We suggest [define-async](https://www.npmjs.com/package/define-async) implementation for dependency lookup.

## Example

``` js
define(['format'], function(format) {
	format.currency(17.2, 'R$'); // Returns R$ 17,20
	format.currencyToNumber('R$ 9,50'); // Returns 9.5
});
```

## License

Format-amd is released under the [BSD](https://github.com/elo7/format-amd/blob/master/LICENSE). Have at it.

* * *

Copyright :copyright: 2014 Elo7
