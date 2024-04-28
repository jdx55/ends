const db = require('./connect');
// ------管理员的登录注册------------------------------------------------------
// 登录
// 获取用户------------------------------------
getUsers = (req, res) => {
	let sql = 'SELECT * FROM users';
	console.log(sql);
	let callback = (err, data) => {
		if(err) {
			console.log('err')
			res.send({
				code: 404,
				msg: '数据获取失败'
			})
		}else{
			res.send({
				code: 200,
				msg: '数据获取成功',
				"list": data
			})
		}
	}
	
	db.sqlConnect(sql, [], callback);
}
// 删除------------------------------------------------------
delarrange = (req, res) => {
	var {id} = req.body;
	var sql = 'SELECT * FROM users WHERE id="' + id + '"';
	var callBack = (err, data) => {
		if(err){
			res.send({
				code: 404,
				msg: '操作失败'
			})
		}else{
			// console.log(data);
			//删除动作
			if(data[0].id == id){
				//执行删除动作
				var _sql = 'DELETE FROM users WHERE id=?';
				
				var _callBack = (err, result) => {
					if(err){
						res.send({
							code: 0,
							msg: '删除失败'
						})
					}else{
						res.send({
							code: 1,
							msg: '删除成功'
						})
					}
				}
				
				//调用执行删除sql语句
				db.sqlConnect(_sql, [id], _callBack);
			}else{
				res.send({
					code: 403,
					msg: '无删除数据'
				})
			}
		}
	}
	
	//调用执行查询sql语句
	db.sqlConnect(sql, [], callBack);
}
// 添加----------------------------------------------------------------
addusers = (req, res) => {
	let sql = 'INSERT INTO users (identity, phone, pass, name, age, sex, biens, head) VALUE (?,?,?,?,?,?,?,?)';
	
	let {identity, phone, pass, name, age, sex, biens, head} = req.body;
	
	let _data = [identity, phone, pass, name, age, sex, biens, head];
	console.log(_data);
	let callback = (err, data) => {
		if(err){
			console.log(err)
			res.send({
				code: 404,
				msg: '操作失败'
			})
		}else{
			console.log(_data);
			res.send({
				
				code: 404,
				msg: '添加成功'
			})
		}
	}
	db.sqlConnect(sql, _data, callback);
}
// 修改用户--------------------------------------------------------------------------
editusers = (req, res) => {
	//解构赋值
	var {id,identity, phone, pass, name, age, sex, biens, head} = req.body;
	var _data = [id,identity, phone, pass, name, age, sex, biens, head];
	console.log(_data);
	var sql = 'SELECT id FROM users WHERE id="' + id + '"';
	var callBack = (err, data) => {
		if(err){
			res.send({
				code: 404,
				msg: '修改失败'
			})
		}else{
			if(data[0].id == id){
				var _sql = 'UPDATE users SET id=?,identity=?,phone=?,pass=?,name=?,age=?,sex=?,biens=?,head=? WHERE id="' + id + '"';
				
				var _callBack = (err, result) => {
					if(err){
						res.send({
							code: 0,
							msg: '修改失败'
						})
					}else{
						res.send({
							code: 1,
							msg: '修改成功'
						})
					}
				}
				
				//执行修改sql语句
				db.sqlConnect(_sql, _data, _callBack);
			}else{
				res.send({
					code: 304,
					msg: '没有此数据',
					
				})
			}
		}
	}

	//执行查询sql语句
	db.sqlConnect(sql, [id], callBack);
}
// 获取料理------------------------------------
getArrange = (req, res) => {
	let sql = 'SELECT * FROM arrange';
	console.log(sql);
	let callback = (err, data) => {
		if(err) {
			console.log('aaa')
			res.send({
				code: 404,
				msg: '数据获取失败'
			})
		}else{
			res.send({
				code: 200,
				msg: '数据获取成功',
				"list": data
			})
		}
	}
	
	db.sqlConnect(sql, [], callback);
}
// 删除料理------------------------------------------------------
delarrange = (req, res) => {
	var {id} = req.body;
	var sql = 'SELECT * FROM arrange WHERE id="' + id + '"';
	var callBack = (err, data) => {
		if(err){
			res.send({
				code: 404,
				msg: '操作失败'
			})
		}else{
			// console.log(data);
			//删除动作
			if(data[0].id == id){
				//执行删除动作
				var _sql = 'DELETE FROM arrange WHERE id=?';
				
				var _callBack = (err, result) => {
					if(err){
						res.send({
							code: 0,
							msg: '删除失败'
						})
					}else{
						res.send({
							code: 1,
							msg: '删除成功'
						})
					}
				}
				
				//调用执行删除sql语句
				db.sqlConnect(_sql, [id], _callBack);
			}else{
				res.send({
					code: 403,
					msg: '无删除数据'
				})
			}
		}
	}
	
	//调用执行查询sql语句
	db.sqlConnect(sql, [], callBack);
}
// 添加----------------------------------------------------------------
addarrange = (req, res) => {
	let sql = 'INSERT INTO arrange (name, lv,foods, codes, doorplate) VALUE (?,?,?,?,?)';
	
	let {name, lv,foods, codes, doorplate} = req.body;
	
	let _data = [name, lv,foods,codes, doorplate];
	console.log(_data);
	let callback = (err, data) => {
		if(err){
			console.log(err)
			res.send({
				code: 404,
				msg: '操作失败'
			})
		}else{
			console.log(_data);
			res.send({
				
				code: 404,
				msg: '添加成功'
			})
		}
	}
	db.sqlConnect(sql, _data, callback);
}
// 修改料理--------------------------------------------------------------------------
editarrange = (req, res) => {
	//解构赋值
	var {id,name, lv, foods, codes, doorplate} = req.body;
	var _data = [id,name, lv, foods, codes, doorplate];
	console.log(_data);
	var sql = 'SELECT id FROM arrange WHERE id="' + id + '"';
	var callBack = (err, data) => {
		if(err){
			res.send({
				code: 404,
				msg: '修改失败'
			})
		}else{
			if(data[0].id == id){
				var _sql = 'UPDATE arrange SET id=?,name=?,lv=?,foods=?,codes=?,doorplate=? WHERE id="' + id + '"';
				
				var _callBack = (err, result) => {
					if(err){
						res.send({
							code: 0,
							msg: '修改失败'
						})
					}else{
						res.send({
							code: 1,
							msg: '修改成功'
						})
					}
				}
				
				//执行修改sql语句
				db.sqlConnect(_sql, _data, _callBack);
			}else{
				res.send({
					code: 304,
					msg: '没有此数据',
					
				})
			}
		}
	}

	//执行查询sql语句
	db.sqlConnect(sql, [id], callBack);
}

// 获取游戏角色------------------------------------
getChacter = (req, res) => {
	let sql = 'SELECT * FROM chacter';
	console.log(sql);
	let callback = (err, data) => {
		if(err) {
			console.log(err)
			res.send({
				code: 404,
				msg: '数据获取失败'
			})
		}else{
			res.send({
				code: 200,
				msg: '数据获取成功',
				"list": data
			})
		}
	}
	
	db.sqlConnect(sql, [], callback);
}
// 删除料理------------------------------------------------------
delchacter = (req, res) => {
	var {id} = req.body;
	var sql = 'SELECT * FROM chacter WHERE id="' + id + '"';
	var callBack = (err, data) => {
		if(err){
			res.send({
				code: 404,
				msg: '操作失败'
			})
		}else{
			// console.log(data);
			//删除动作
			if(data[0].id == id){
				//执行删除动作
				var _sql = 'DELETE FROM chacter WHERE id=?';
				
				var _callBack = (err, result) => {
					if(err){
						res.send({
							code: 0,
							msg: '删除失败'
						})
					}else{
						res.send({
							code: 1,
							msg: '删除成功'
						})
					}
				}
				
				//调用执行删除sql语句
				db.sqlConnect(_sql, [id], _callBack);
			}else{
				res.send({
					code: 403,
					msg: '无删除数据'
				})
			}
		}
	}
	
	//调用执行查询sql语句
	db.sqlConnect(sql, [], callBack);
}
// 添加----------------------------------------------------------------
addchacter = (req, res) => {
	let sql = 'INSERT INTO chacter (name, lv, roledef, roleintr) VALUE (?,?,?,?)';
	
	let {name, lv,foods, codes, doorplate} = req.body;
	
	let _data = [name, lv,foods,codes, doorplate];
	console.log(_data);
	let callback = (err, data) => {
		if(err){
			console.log(err)
			res.send({
				code: 404,
				msg: '操作失败'
			})
		}else{
			console.log(_data);
			res.send({
				
				code: 404,
				msg: '添加成功'
			})
		}
	}
	db.sqlConnect(sql, _data, callback);
}
// 修改料理--------------------------------------------------------------------------
editchacter = (req, res) => {
	//解构赋值
	var {id,name, lv, roledef, roleintr} = req.body;
	var _data = [id,name, lv, roledef, roleintr];
	console.log(_data);
	var sql = 'SELECT id FROM chacter WHERE id="' + id + '"';
	var callBack = (err, data) => {
		if(err){
			res.send({
				code: 404,
				msg: '修改失败'
			})
		}else{
			if(data[0].id == id){
				var _sql = 'UPDATE chacter SET id=?,name=?,lv=?,roledef=?,roleintr=? WHERE id="' + id + '"';
				
				var _callBack = (err, result) => {
					if(err){
						res.send({
							code: 0,
							msg: '修改失败'
						})
					}else{
						res.send({
							code: 1,
							msg: '修改成功'
						})
					}
				}
				
				//执行修改sql语句
				db.sqlConnect(_sql, _data, _callBack);
			}else{
				res.send({
					code: 304,
					msg: '没有此数据',
					
				})
			}
		}
	}

	//执行查询sql语句
	db.sqlConnect(sql, [id], callBack);
}
// 暴露路由
module.exports = {
	getUsers,
	delarrange,
	addusers,
	editusers,
	getArrange,
	delarrange,
	addarrange,
	editarrange,
	getChacter,
	delchacter,
	addchacter,
	editchacter
};

