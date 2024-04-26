// 链接数据库

// 加载mysql
const mysql = require('mysql');

// 暴露链接
module.exports = {
	config: {
		host: '127.0.0.1',
		port: 3306,
		user: 'root',
		password: '123456',
		database: 'familly'
	},
	// 操作链接
	sqlConnect: function(sql,data,callback){
		// 创建链接
		var pool = mysql.createPool(this.config);
		// console.log(pool) //测试链接数据库密码问题
		pool.getConnection((err,connect) =>{
			if(err){
				console.log('链接失败......');
			}else{
				console.log('链接成功......')
			}
			
			// 调用sql语句
			connect.query(sql,data,callback);
			
			// 释放链接
			connect.release();
		});
	}
}