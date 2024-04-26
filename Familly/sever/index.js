const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// 导入路由文件
var router = require('./api/router.js');
 
// CROS跨域设置
app.all('*', (req, res, next) =>{
	 // 允许跨域的域名 
	res.header("Access-Control-Allow-Origin", "*");
	// header允许的类型
	res.header("Access-Control-Allow-Headers","content-type");
	// 跨域允许的请求方式
	res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT,OPTIONS");
	// options尝试请求
	if(req.method.toLowerCase() == 'options'){
		res.sendStatus(200);
	}else{
		next();
	}
});
 
// post请求地址栏参数解析
app.use(bodyParser.json());//解析为json数据
// 解析url中的参数
app.use(bodyParser.urlencoded({extended: false}));

// 使用路由
app.use(router);

app.listen(8888, () => console.log('服务已启动......'));
