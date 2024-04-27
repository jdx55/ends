<template>
	<!-- 数据展示表格 -->
	<div class="addarrange hide" style="height: 86%;">
		<!-- 添加功能 -->
		<div class="addipt">
            角色姓名:<input type="text" placeholder="请输入角色姓名......" v-model="storeAdd.name">
            料理等级:<input type="text" placeholder="请输入料理等级......" v-model="storeAdd.lv">
			料理效果:<input type="text" placeholder="请输入料理效果......" v-model="storeAdd.foods">
			角色地址:<input type="text" placeholder="请输入角色地址......" v-model="storeAdd.codes">
			角色代码:<input type="text" placeholder="请输入角色代码......" v-model="storeAdd.doorplate">
			<button class="yes" @click="conadd()">确认添加</button>
			<button class="no" @click="nousr()">取消添加</button>
		</div>
	</div>
	
	<!-- 修改模块 -->
	<div class="editarrange hide" style="height: 86%;">
		<!-- 修改功能 -->
		<div class="addipt">
			角色姓名:<input type="text" placeholder="请输入角色姓名......" v-model="edit.name">
            料理等级:<input type="text" placeholder="请输入料理等级......" v-model="edit.lv">
			料理效果:<input type="text" placeholder="请输入料理效果......" v-model="edit.foods">
			角色地址:<input type="text" placeholder="请输入角色地址......" v-model="edit.codes">
			角色代码:<input type="text" placeholder="请输入角色代码......" v-model="edit.doorplate">
			<button class="yes" @click="editsure()">确认修改</button>
			<button class="no" @click="nousr()">取消修改</button>
		</div>
	</div>
	<!-- 添加成员按钮 -->
	<el-button
	style="width: 11%; background-color: green;
	color: white; float: right; margin-bottom: 20px;"
	@click="addusr()">添加角色</el-button>
	  <!-- 过滤 -->
	<!-- 表格数据 -->
	<!-- 搜索过滤 -->
	<el-table :data="store.list.filter(data => !search
		|| data.lv.toString().toLowerCase().includes(search.toString().toLowerCase())
		|| data.name.toString().toLowerCase().includes(search.toString().toLowerCase()))"
		style="width: 100%;height: 580px; overflow-y: scroll;" id="tables" >
		<!-- 表头 -->
		<el-table-column width="175">
			<template #header>
				<el-input v-model="search" placeholder="搜索...."/>
			</template>
		</el-table-column>
		<el-table-column label="角色姓名" width="" align="center">
		  <template #default="scope">
			  <div class="name-wrapper">{{ scope.row.name }}</div>
		  </template>
		</el-table-column>
		<el-table-column label="料理等级" width="" align="center">
		  <template #default="scope" show-overflow-tooltip="true">
			<div class="name-wrapper" id="hid">{{ scope.row.lv }}</div>
		  </template>
		</el-table-column>
		<el-table-column label="料理效果" width="" align="center">
		  <template #default="scope">
			<div class="name-wrapper">{{ scope.row.foods }}</div>   
		  </template>
		</el-table-column>
		<el-table-column label="角色地址" width="" align="center">
		  <template #default="scope" show-overflow-tooltip="true">
			<div class="name-wrapper" id="hid">{{ scope.row.codes }}</div>
		  </template>
		</el-table-column>
		<el-table-column label="角色代码" width="" align="center">
		  <template #default="scope">
			<div class="name-wrapper">{{ scope.row.doorplate }}</div>   
		  </template>
		</el-table-column>
		
	    <el-table-column label="操作" align="center" width="180px">
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
import { useStore, useStorearr } from '../stores/users.js'
import { $arrange,$delarrange,$addarrange,$editarrange } from '../api/api.js';
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
// 用pinia操作状态管理
const store = useStorearr();
const search = ref('');
onBeforeMount(() => {
    store.asyncGetArrange();
});
	
// 删除功能
// 删除-----------------------------------------------------
const handleDelete = (index, row) => {
    let data = store.list[index].id
    console.log(data)
    $delarrange({ id: data })
        .then(res => console.log(res.msg))
        .catch(err => console.log(err));
		location.reload();
}
// 添加-----------------------------------------------------
let addarrange = document.getElementsByClassName("addarrange");
let noipt = document.getElementsByTagName('input');
const storeAdd = reactive(
	{
		
		name: '',
		lv: '',
		foods: '',
		codes: '',
		doorplate: '',
		
	}
);


let handleAvatarSuccess = (res, file) => {
  storeAdd.lv = URL.createObjectURL(file.raw)
}

let addusr = () =>{
	addarrange[0].className = "addarrange";
}
let nousr = () =>{
	addarrange[0].className = "addarrange hide";
	editarrange[0].className = "editarrange hide";
}
// 确认添加按钮
const conadd = () => {	
        $addarrange(storeAdd)
            .then(res => {
				alert("添加成功");
				location.reload();
			})
            .catch(err => console.log(err));
			addarrange[0].className = 'addarrange hide'
   
}
// 修改-----------------------------------------------------
let editarrange = document.getElementsByClassName('editarrange');
let edit = ref({
	id: '',
	name: '',
	lv: '',
	foods: '',
	codes: '',
	doorplate: '',
	
});
const handleEdit = (index, row) => {
    editarrange[0].className = 'editarrange'
    edit.value = {
		id: row.id,
		name: row.name,
		lv: row.lv,
		foods: row.foods,
		codes: row.codes,
		doorplate: row.doorplate,
    }
}

	const editsure = (index, row) => {
		
	if(edit.value.lv == ''){
		alert('内容不能为空......');
	}else {
		$editarrange(edit.value)
			.then(res => console.log(res.msg))
			.catch(err => console.log(err));
			location.reload();
		editusers[0].className = 'editarrange hide'
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
.editarrange,
.addarrange{
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
 
.iptlv{
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    overflow: hidden;
    margin: 0 auto;
}
.iptlv img{
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    top: -1px;
    left: -1px;
}
	   
</style>