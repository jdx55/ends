<template>
	<div class="common-layout" style="position: relative;">
	<!-- 侧边栏部分 -->
	  <el-container>
	    <el-aside width="200px">
			<el-row class="tac">
				<el-col :span="24">
					<el-menu
						:uniqueOpened="true"
						default-active="2"
						class="el-menu-vertical-demo"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b"
					>
						<el-menu-item index="1" @click="navTo('/index')">
							<template #title>展厅</template>
						</el-menu-item>
						<el-sub-menu index="2">
							<template #title>
								<i class="el-icon-location"></i>
								<span>角色</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="2-1" @click="navTo('/user')" style="font-size: 15px;">实名信息</el-menu-item>
								<el-menu-item index="2-2" @click="navTo('')" style="font-size: 15px;">角色信息-待定</el-menu-item>
								<el-menu-item index="2-3" @click="navTo('/arrange')" style="font-size: 15px;">料理属性</el-menu-item>
							</el-menu-item-group>
						</el-sub-menu>
						<el-menu-item index="3">
							<template #title>待定......</template>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</el-aside>
	<!-- 内容部分 -->
	    <el-container>
			<!-- 头部内容 -->
	      <el-header>
			
			<img class="icos" src="https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0000.jpg" alt=""> 
			<span class="sp">๑托拉姆物语๑</span>
		</el-header>
		  <!-- 表格内容 -->
	      <el-main>
				<router-view></router-view>
		  </el-main>
	    </el-container>
	  </el-container>	  
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onBeforeMount,onMounted,onUpdated,ref,reactive } from 'vue'
const router = useRouter();
	const navTo = (_path, data = {}) => {
	    router.push({
	        path: _path,
	        query: data
	    });
	}
	let quit = () =>{
		router.push('/user');
	}
	let login = () =>{
		router.push('/Login');
	}


	
    

</script>
<style scoped>
	*{
		font-size: 1.2rem;
		list-style: none;
		margin: 0;
	}
	
	.el-header{
	background-color: #b3c0d1;
	color: var(--el-text-color-primary);
	text-align: center;
	line-height: 60px;
	display: flex;
	justify-content: space-evenly;
	}
	
	.el-aside {
	width: 8%;
	background-color: #d3dce6;
	color: var(--el-text-color-primary);
	text-align: center;
	}
	
	.el-main {
	/* background-color: #e9eef3; */
	color: var(--el-text-color-primary);
	text-align: center;
	height: 680px;
	overflow-y: scroll;
	}
	.adver{
		width: 100%;
		height: 100%;
	}
	.icos{
		width: 100px;
		height: 60px;
		border-radius: 5px;
		margin-left: 220px;
	}
	.sp{
		position: relative;
		right: 240px;
		font-size: 30px;
		
	}
</style>
