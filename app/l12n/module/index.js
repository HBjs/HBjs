/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Localize = require("localize"),
    fs = require("fs"),
    Q = require("q"),
    configs = require("../../../configs");

var localize = {
    init:init,
    loadBase : loadBase,
    module : localizeModule
};

/**
 * @description Initialization l12n module
 *
 **/

function init(){
    var deferred = Q.defer();

    localize.loadBase().then(function(file){
        deferred.resolve(new Localize(file));
    }, function(err){
        deferred.reject(err);
    });

    return deferred.promise;
}

/**
 * @description Loading languages file
 *
 **/

function loadBase(){
    var deferred = Q.defer();
    fs.readFile(__dirname + "/../languages.json", function(err, file){
        if(err) deferred.reject(err);

        try{
            var json = JSON.parse(file);
            deferred.resolve(json);
        }catch(e){
            deferred.reject("Language file must be valid JSON file");
        }
    });

    return deferred.promise;
}

function localizeModule(){
    var deferred = Q.defer();
    localize.init().then(function(l12n){

        l12n.setLocale(configs.general.lang);
        deferred.resolve(l12n);

    }, function(error){
        deferred.reject(error);
    });

    return deferred.promise;
}

module.exports = localize;