<template>
	<!-- 数据展示表格 -->
	<div class="addusers hide" style="height: 86%;">
		<!-- 添加功能 -->
		<div class="addipt">
			<el-upload class="ipthead"
			action="http://localhost:8888/users/"
			method="get"
			accept="image/jpeg,image/gif,image/png"
			:drag="true"
			:show-file-list="false"
			:on-success="handleAvatarSuccess"
			>
			  <img v-if='storeAdd.head' :src="storeAdd.head"/>
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		<!-- 	成员序号:<input type="text" placeholder="请输入成员序号......" v-model="storeAdd.id"> -->
			成员姓名:<input type="text" placeholder="请输入成员姓名......" v-model="storeAdd.name">
			身份证号:<input type="text" placeholder="请输入身份证号......" v-model="storeAdd.identity">
			手机账号:<input type="text" placeholder="请输入手机账号......" v-model="storeAdd.phone">
			成员密码:<input type="text" placeholder="请输入成员密码......" v-model="storeAdd.pass">
			<!-- 成员性别 -->
			<span style="position: relative; top: 10px;">成员性别:</span>
			<el-select v-model="seleSex.sex" placeholder="请选择性别......" style="width: 70%; margin-top: 15px;">
			    <el-option
			      v-for="item in seleSex.option"
			      :key="item.sex"
			      :value="item.sex"
			    >
			    </el-option>
			  </el-select>
			成员年龄:<input type="text" placeholder="请输入成员年龄......" v-model="storeAdd.age">
			成员资产:<input type="text" placeholder="请输入成员资产......" v-model="storeAdd.biens">
			<button class="yes" @click="conadd()">确认添加</button>
			<button class="no" @click="nousr()">取消添加</button>
		</div>
	</div>
	
	<!-- 修改模块 -->
	<div class="editusers hide" style="height: 86%;">
		<!-- 修改功能 -->
		<div class="addipt">
			<el-upload class="ipthead"
			action="http://localhost:8888/users/"
			method="get"
			accept="image/jpeg,image/gif,image/png"
			:drag="true"
			:show-file-list="false"
			:on-success="editleAvatarSuccess"
			>
			  <img v-if='edit.head' :src="edit.head"/>
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			成员姓名:<input type="text" placeholder="请输入成员姓名......" v-model="edit.name">
			身份证号:<input type="text" placeholder="请输入身份证号......" v-model="edit.identity">
			手机账号:<input type="text" placeholder="请输入手机账号......" v-model="edit.phone">
			成员密码:<input type="text" placeholder="请输入成员密码......" v-model="edit.pass">
			
			<span style="position: relative; top: 10px;">成员性别:</span>
			<el-select v-model="seleSex.sex" placeholder="请选择性别......" style="width: 70%; margin-top: 15px;">
			    <el-option
			      v-for="item in seleSex.option"
			      :key="item.sex"
			      :value="item.sex"
			    >
			    </el-option>
			  </el-select>
			成员年龄:<input type="text" placeholder="请输入成员年龄......" v-model="edit.age">
			成员资产:<input type="text" placeholder="请输入成员资产......" v-model="edit.biens">
			<button class="yes" @click="editsure()">确认修改</button>
			<button class="no" @click="nousr()">取消修改</button>
		</div>
	</div>
	<!-- 添加成员按钮 -->
	<el-button
	style="width: 11%; background-color: green;
	color: white; float: right; margin-bottom: 20px;"
	@click="addusr()">添加成员</el-button>
	  <!-- 过滤 -->
	<!-- 表格数据 -->
	<!-- 搜索过滤 -->
	<el-table :data="store.list.filter(data => !search
		|| data.phone.toLowerCase().includes(search.toLowerCase())
		|| data.identity.toLowerCase().includes(search.toLowerCase())
		|| data.name.toLowerCase().includes(search.toLowerCase()))"
		style="width: 100%;height: 580px; overflow-y: scroll;" id="tables" >
		<!-- 表头 -->
		<el-table-column width="175">
			<template #header>
				<el-input v-model="search" placeholder="搜索...."/>
			</template>
		</el-table-column>
		<el-table-column label="头像" width="80" align="center">
			<template #default="scope">
				<el-popover
				effect="light"
				trigger="click"
				width="320"
				placement="top">
					<template #default>
					<p>姓名: {{ scope.row.name }}</p>
					<p>身份证号: {{ scope.row.identity }}</p>
					<p>手机账号: {{ scope.row.phone }}</p>
					<p>密码: {{ scope.row.pass }}</p>
					<p>性别: {{ scope.row.sex }}</p>
					<p>年龄: {{ scope.row.age }}岁</p>
					<p>资产: {{ scope.row.biens }}元</p>
					</template>
					<!-- 数据渲染 -->
					<template #reference>
						<div class="name-wrapper">
						<div class="demo-type">
							<div>
								<el-avatar :src="scope.row.head"></el-avatar>
							</div>
							</div>
						</div>
					</template>
				</el-popover>
			</template>
		</el-table-column>
		<el-table-column label="姓名" width="140" align="center">
		  <template #default="scope">
			  <div class="name-wrapper">{{ scope.row.name }}</div>
		  </template>
		</el-table-column>
		<el-table-column label="身份证号" width="200" align="center">
		  <template #default="scope" show-overflow-tooltip="true">
			<div class="name-wrapper" id="hid">{{ scope.row.identity }}</div>
		  </template>
		</el-table-column>
		<el-table-column label="手机账号" width="130" align="center">
		  <template #default="scope" show-overflow-tooltip="true">
			<div class="name-wrapper" id="hid">{{ scope.row.phone }}</div>
		  </template>
		</el-table-column>
		<el-table-column label="密码" width="130" align="center">
		  <template #default="scope">
			<div class="name-wrapper">{{ scope.row.pass }}</div>   
		  </template>
		</el-table-column>
		<el-table-column label="性别" width="70" align="center">
		  <template #default="scope">
			<div class="name-wrapper">{{ scope.row.sex }}</div>
		  </template>
		</el-table-column>
	    <el-table-column label="年龄/岁" width="100" align="center">
	      <template #default="scope">
			<div class="name-wrapper">{{ scope.row.age }}</div>
	      </template>
	    </el-table-column>
		<el-table-column label="资产/元" width="120" align="center">
		  <template #default="scope">
			<div class="name-wrapper">{{ scope.row.biens }}</div>
		  </template>
		</el-table-column>
	    <el-table-column label="操作" align="center" width="150px">
	      <template #default="scope">
	        <el-button @click="handleEdit(scope.$index, scope.row)" style="width: 40px;">编辑</el-button>
	        <el-button @click="handleDelete(scope.$index, scope.row)" type="danger" style="width: 40px;">删除</el-button>
	      </template>
	    </el-table-column> 
	  </el-table> 
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onBeforeMount,onMounted,onUpdated,ref,reactive } from 'vue'
import { useStore } from '../stores/users.js'
import { $users,$delusers,$addusers,$editusers } from '../api/api.js';
const router = useRouter();
let lose = () =>{
	this.$forceUpdate();
}
const navTo = (_path, data = {}) => {
    router.push({
        path: _path,
        query: data
    });
}
let quit = () =>{
	router.push('/Adduser');
}
let login = () =>{
	router.push('/Login');
}
// 用pinia操作状态管理
const store = useStore();
const search = ref('');
onBeforeMount(() => {
    store.asyncGetUsers();
});
	
// 删除功能
// 删除-----------------------------------------------------
const handleDelete = (index, row) => {
    let data = store.list[index].id
    console.log(data)
    $delusers({ id: data })
        .then(res => console.log(res.msg))
        .catch(err => console.log(err));
		location.reload();
}
// 添加-----------------------------------------------------
let addusers = document.getElementsByClassName("addusers");
let noipt = document.getElementsByTagName('input');
const storeAdd = reactive(
	{
		head: '',
		name: '',
		identity: '',
		phone: '',
		pass: '',
		age: '',
		sex: '',
		biens: ''
	}
);
let seleSex = reactive({
	option: [
		{
			sex: '男',
			label: '男'
		},
		{
			sex: '女',
			label: '女'
		},
		{
			sex: '其它',
			label: '其它'
		}
	],
	sex: '',
	}
)

let handleAvatarSuccess = (res, file) => {
  storeAdd.head = URL.createObjectURL(file.raw)
}

let addusr = () =>{
	addusers[0].className = "addusers";
}
let nousr = () =>{
	addusers[0].className = "addusers hide";
	editusers[0].className = "editusers hide";
}
// 确认添加按钮
const conadd = () => {
	storeAdd.sex = seleSex.sex;
	// storeAdd.biens = storeAdd.biens.replace(/(?=(?:\d{3})+(?!\d))/g,','); 
	// 手机号正则
	let idphone = storeAdd.phone;
	let _IDPh = (idphone) =>{
		let reph = /^1(3\d|4[5-9]|5[^4\D]|6[56]|7[^249\D]|8\d|9[189])\d{8}$/;
		return reph.test(idphone)
	}
	// 姓名正则
	let idname = storeAdd.name;
	let _IDName = (idname) =>{
		let rename = /^[\u4E00-\u9FA5]{1,6}(?:·[\u4E00-\u9FA5]{1,6})*$/;
		return rename.test(idname)
	}
	// 身份正号正则
	let idCard = storeAdd.identity;
	let _IDRe = (idCard) =>{
		let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		return reg.test(idCard)
	}
	// 密码正则
	let idpass = storeAdd.pass;
	let _IDPass = (idpass) =>{
		let repass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		return repass.test(idpass)
	}
	// 性别正则
	let idsex = seleSex.sex;
	let _IDSex = (idsex) =>{
		let resex = /^男$|^女$|^其它$/;
		return resex.test(idsex)
	}
	// 年龄赋值判断
	let idage = storeAdd.age;
	// 判断格式
	if(_IDName(idname) != true){
		alert('请输入正确姓名格式......');
	}else if(_IDRe(idCard) != true){
		alert('请输入正确的身份证号......');
	}else if(_IDPh(idphone) != true){
		alert('请输入正确的手机号......');
	}else if(_IDPass(idpass) != true){
		alert('密码至少包含一个字母和一个数字，长度在8个字符及以上......');
	}else if(_IDSex(idsex) != true){
		alert('请输入‘男’ 或 ‘女’ 或者 ‘其它’......');
	}else if(idage <= -1 || idage >= 121){
		alert("请输入合法年龄......");	
    } else if(storeAdd.biens == '' || storeAdd.head == ''){
		alert('内容不能为空......');
	} else {
        $addusers(storeAdd)
            .then(res => {
				alert("添加成功");
				location.reload();
			})
            .catch(err => console.log(err));
			addusers[0].className = 'addusers hide'
	}
   
}
// 修改-----------------------------------------------------
let editleAvatarSuccess = (res, file) => {
	  edit.value.head = URL.createObjectURL(file.raw)
	}
let editusers = document.getElementsByClassName('editusers');
let edit = ref({
	id: '',
	head: '',
	name: '',
	identity: '',
	phone: '',
	pass: '',
	age: '',
	sex: '',
	biens: ''
});
const handleEdit = (index, row) => {
    editusers[0].className = 'editusers'
    edit.value = {
		id: row.id,
		head: row.head,
		name: row.name,
		identity: row.identity,
		phone: row.phone,
		pass: row.pass,
		age: row.age,
		sex: '',
		biens: row.biens
    }
}
 
const editsure = (index, row) => {
	edit.value.sex = seleSex.sex;
	// edit.value.biens = edit.value.biens.replace(/(?=(?:\d{3})+(?!\d))/g,','); 
	// 手机号正则
	let idphone = edit.value.phone;
	let _IDPh = (idphone) =>{
		let reph = /^1(3\d|4[5-9]|5[^4\D]|6[56]|7[^249\D]|8\d|9[189])\d{8}$/;
		return reph.test(idphone)
	}
	// 姓名正则
	let idname = edit.value.name;
	let _IDName = (idname) =>{
		let rename = /^[\u4E00-\u9FA5]{1,6}(?:·[\u4E00-\u9FA5]{1,6})*$/;
		return rename.test(idname)
	}
	// 身份正号正则
	let idCard = edit.value.identity;
	let _IDRe = (idCard) =>{
		let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		return reg.test(idCard)
	}
	// 密码正则
	let idpass = edit.value.pass;
	let _IDPass = (idpass) =>{
		let repass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		return repass.test(idpass)
	}
	// 性别正则
	let idsex = seleSex.sex;
	let _IDSex = (idsex) =>{
		let resex = /^男$|^女$|^其它$/;
		return resex.test(idsex)
	}
	// 年龄赋值判断
	let idage = edit.value.age;
	
	// 判断格式
	if(_IDName(idname) != true){
		alert('请输入正确姓名格式......');
	}else if(_IDRe(idCard) != true){
		alert('请输入正确的身份证号......');
	}else if(_IDPh(idphone) != true){
		alert('请输入正确的手机号......');
	}else if(_IDPass(idpass) != true){
		alert('密码至少包含一个字母和一个数字，长度在8个字符及以上......');
	}else if(_IDSex(idsex) != true){
		alert('请输入‘男’ 或 ‘女’ 或者 ‘其它’......');
	}else if(idage <= -1 || idage >= 121){
		alert("请输入合法年龄......");	
	} else if(edit.value.biens == '' || edit.value.head == ''){
		alert('内容不能为空......');
	} else {
		$editusers(edit.value)
			.then(res => console.log(res.msg))
			.catch(err => console.log(err));
			location.reload();
		editusers[0].className = 'editusers hide'
	}
}
	 
</script>

<style scoped>
*{
	font-size: 1.2rem;
}
.hide{
	visibility: hidden;
}
.el-aside {
	width: 8%;
	background-color: #d3dce6;
	color: var(--el-text-color-primary);
	text-align: center;
}
.name-wrapper{
	text-align: center;
}
/* 底部 */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
/* 添加样式 */
.editusers,
.addusers{
	position: absolute;
	z-index: 999;
	display: flex;
	width: 88.5%;
	justify-content: space-evenly;
	background-color: rgba(0, 1, 15, .4);
}
.addipt{
	width: 318px;
	color: white;
	margin: 0 auto;
	/* background-color: rebeccapurple; */
}
.addipt input{
	width: 212px;
	height: 32px;
	margin-top: 15px;
	list-style: none;
	border: none;
	outline: none;
	padding: 0px 5px;
	border-radius: 0.3125rem;
 }
.addipt button{
	height: 30px;
	border-radius: 5px;
	border: black solid 0.5px;
	margin: 40px 38px 0px 30px;
}
.yes{
	 
	background-color: rgba(143, 195, 32, .8)
}
.no{
	color: white;
	background-color: rgba(231, 0, 18, .8)
}
 
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
	font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
 
.ipthead{
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    overflow: hidden;
    margin: 0 auto;
}
.ipthead img{
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    top: -1px;
    left: -1px;
}
	   
</style>