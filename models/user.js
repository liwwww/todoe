var Sequelize = require('sequelize');
var dbBySequelize = require('../conf/sequelize');

var User = dbBySequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});

exports.findById = function(id) {
    return User.findOne({ where: { id: id } });
}

