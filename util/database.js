const mysql=require('mysql2');

const pool=mysql.createPool({
    host: 'localhost',
    user:'root',
    database:'nodecomplete',
    password: 'jai@1998'
});

module.exports = pool.promise();