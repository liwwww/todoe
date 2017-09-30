//数据库操作
var users = {
    insert: 'insert into user(id,name) values(0,?)',
    delete: 'delete from user where id=?',
    select: 'select *from user',
    selectId: 'select *from user where id=?'
};

module.exports = users;