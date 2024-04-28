const express = require('express');
const router = express.Router();

const sql = require('./sql');


// 注册路由
// 管理员的登录注册------------------------
// 个人中心---------------------------------
// 个人信息
router.get('/users',sql.getUsers)
// 删除用户
router.post('/delarrange',sql.delarrange)
// 添加用户
router.post('/addusers',sql.addusers)
// 修改用户
router.post('/editusers',sql.editusers)
// 角色料理------------------------------------------
// 个人信息
router.get('/arrange',sql.getArrange)
// 删除料理
router.post('/delarrange',sql.delarrange)
// 添加料理
router.post('/addarrange',sql.addarrange)
// 修改料理
router.post('/editarrange',sql.editarrange)
// 角色卡------------------------------------------
// 角色
router.get('/chacter',sql.getChacter)
// 删除角色
router.post('/delchacter',sql.delchacter)
// 添加角色
router.post('/addchacter',sql.addchacter)
// 修改角色
router.post('/editchacter',sql.editchacter)

// 暴露
module.exports = router;