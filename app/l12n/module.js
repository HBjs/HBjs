/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Localize = require("localize"),
    configs = require("../../configs");

/**
 * l12n initialize
 **/
function localize(){
    var localize = new Localize(__dirname);
    localize.setLocale(configs.general.lang);

    return localize;
}

module.exports = localize;