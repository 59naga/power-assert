/**
 * power-assert.js - Power Assert in JavaScript.
 *
 * https://github.com/power-assert-js/power-assert
 *
 * Copyright (c) 2013-2016 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/power-assert-js/power-assert/blob/master/MIT-LICENSE.txt
 */
'use strict';

var baseAssert = require('core-assert');
var empower = require('empower');
var formatter = require('power-assert-formatter');
var extend = require('xtend');
var define = require('define-properties');
var empowerOptions = {
    modifyMessageOnRethrow: true,
    saveContextOnRethrow: true
};

function customize (customOptions) {
    var options = customOptions || {};
    var poweredAssert = empower(
        baseAssert,
        formatter(options.output),
        extend(empowerOptions, options.assertion)
    );
    poweredAssert.customize = customize;
    return poweredAssert;
}

var defaultAssert = customize();
define(defaultAssert, { '__esModule': true });
defaultAssert['default'] = defaultAssert;
module.exports = defaultAssert;
