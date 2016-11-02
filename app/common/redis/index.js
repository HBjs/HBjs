/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var redis = require("redis"),
    Q = require('q'),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Redis error: " + err);
});

var db = {
    findSession : findSession
};

function findSession(uid){
    var deferred = Q.defer();
    console.log("sess:" + uid);
    client.hgetall("" + uid, function (err, obj) {
        console.log(err);
        console.log(obj);
        deferred.resolve(obj);
    });

    return deferred.promise;
}


module.exports = db;