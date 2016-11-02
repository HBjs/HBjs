var Sequelize = require('sequelize');
var conf = require('../../../configs');

var sequelize = new Sequelize(conf.db.database, conf.db.user, conf.db.password, {
    host: conf.db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging : false
});


module.exports = sequelize;