var sequelize = require('sequelize');
var dbBySequelize = require('../conf/sequelize');
var userSql = require('../dao/userMapping');

var User = dbBySequelize.define('user', {
    id: {
        type: sequelize.INTEGER,
        field: 'id',
        primaryKey: true
    },
    name: {
        type: sequelize.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});

exports.findById = function(id) {
    return User.findOne({ where: { id: id } });
}

exports.ifindById = function(id) {
    console.log(typeof(id));
    return dbBySequelize.query(userSql.selectId,
    { 
        type: sequelize.QueryTypes.SELECT,
        replacements: [id]
    });
}

