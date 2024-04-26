const express = require('express');
const router = express.Router();

const sql = require('./sql');


// 注册路由
// 管理员的登录注册------------------------
// 个人中心---------------------------------
// 个人信息
router.get('/users',sql.getUsers)
// 删除用户
router.post('/delusers',sql.delusers)
// 添加用户
router.post('/addusers',sql.addusers)
// 修改用户
router.post('/editusers',sql.editusers)
// 暴露
module.exports = router;