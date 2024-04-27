<template>
	<div class="lunbo">
		<div style="width: 1200px; height: 200px;" class="lunimg">
			<carousel-3d
			:autoplay="true"
			:autoplayTimeout="3500"
			ref="carousel"
			:perspective="35"
			:display="5"
			:animationSpeed="1500"
			:width="390"
			:height="200"
			controlsVisible
			>
				<slide v-for="(item, i) in lists" :index="i" style="box-shadow: 10px 5px 10px rgba(255,255,255,0.2);">
					<img class="carouselTitle" :src="item.title" alt="">
				</slide>
			</carousel-3d>
		</div>
	</div>
	<!-- 下部分 -->
	<div class="index_down">
		
		<div class="index_down_box" v-for="(item,index) in current">
			<div class="index_down_card">
				<div class="index_down_video">
					<vue3VideoPlay
					width="100%"
					height="100%"
					:loop="true"
					:src="item.video"
					:speed="true"
					:autoPlay="true"
					/>
				</div>
			</div>
			<div class="index_down_bottom">
				<span class="index_down_time" >&nbsp;{{ item.text }}</span>
				<el-button @click="texts.drewer = true,index_btn(index)" type="primary" class="index_down_button">详情</el-button>
			</div>
		</div>
		<el-drawer title="我是标题" v-model="texts.drewer" :with-header="false">
			<div v-for="(item,index) in tes" class="drawer_box">
				<div class="drawer_imgs">
					<img :src="item.imgs" alt="">
					<div>{{ item.txt }}</div>
				</div>
				<div class="drawer_Echars">
					
					<div style="text-align: left; padding: 1.25rem;"></div>
					<div id="drawer_Echars_box" >
						<e-charts id="cans" :option="option"/>
					</div>
					
				</div>
				<div class="drawer_wrap">
					<div>职业介绍：</div>
					<span>{{ item.intr }}</span>
				</div>
			</div>
		</el-drawer>
	</div>
</template>
 
<script setup>
import * as echarts from "echarts";
import { reactive,ref,computed,onMounted,onUpdated,onBeforeMount  } from 'vue';

let lists = reactive([
	{title: "https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0000.jpg"},
	{title: "https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0001.png"},
	{title: "https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0002.png"},
	{title: "https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0003.png"},
	{title: "https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0004.jpg"},
	{title: "https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0005.jpg"}
]) 
// 下部分
let current = reactive([
	{
		index: 0,
		text: '职业：剑',
		video: 'https://static-mp-d549bd85-eabc-4c00-a019-e4e1fefbe43a.next.bspapp.com/HomeWork/video001.mp4'
	},
	{
		index: 1,
		text: '职业：杖',
		video: 'https://static-mp-d549bd85-eabc-4c00-a019-e4e1fefbe43a.next.bspapp.com/HomeWork/video002.mp4'
	},
	{
		index: 2,
		text: '职业：拳',
		video: 'https://static-mp-d549bd85-eabc-4c00-a019-e4e1fefbe43a.next.bspapp.com/HomeWork/video003.mp4'
	},
	{
		index: 3,
		text: '职业：弓',
		video: 'https://static-mp-d549bd85-eabc-4c00-a019-e4e1fefbe43a.next.bspapp.com/HomeWork/video004.mp4'
	},
	{
		index: 4,
		text: '职业：斧枪',
		video: 'https://static-mp-d549bd85-eabc-4c00-a019-e4e1fefbe43a.next.bspapp.com/HomeWork/video005.mp4'
	},
	{
		index: 5,
		text: '职业：拔刀剑',
		video: 'https://static-mp-d549bd85-eabc-4c00-a019-e4e1fefbe43a.next.bspapp.com/HomeWork/video006.mp4'
	}
])
// 详情
let video_index = reactive([
			{
				index: current.index,
				text: current.text
			}
		]
	)
let texts = ref({drewer: false})

let option;
var tes = reactive([])
// var tesval;
let index_btn = (index) =>{
	let indexs = index;
	if(index == 0){
		tes = reactive([
			{
				imgs: 'https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0006.jpg',
				txt: '职业：剑',
				intr: '使用两把单手剑作为主要武器的战斗万金油，有着不俗伤害的同时也有着很强的生存能力。',
				city1: 255,
				city2: 0,
				city3: 0,
				city4: 0,
				city5: 247,
				city6: 0
			}
		])
	}else if(index == 1){
		
		tes = reactive([
			{
				imgs: 'https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0007.jpg',
				txt: '职业：杖',
				intr: '使用法杖作为主要武器的魔法师，通过吟唱能施展出毁天灭地的魔法。',
				city1: 247,
				city2: 255,
				city3: 0,
				city4: 0,
				city5: 0,
				city6: 0
			}
		])
	}else if(index == 2){
		tes = reactive([
			{
				imgs: 'https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0008.jpg',
				txt: '职业：拳',
				intr: '使用拳套作为主要武器的拳法家，谁说双拳难敌四手，看我欧拉！欧拉！欧拉！',
				city1: 247,
				city2: 0,
				city3: 0,
				city4: 255,
				city5: 0,
				city6: 0
			}
		])
	}else if(index == 3){
		tes = reactive([
			{
				imgs: 'https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0009.jpg',
				txt: '职业：弓',
				intr: '使用长弓作为主要武器的弓箭手，明明用的是长弓，却能射的和加特林一样快呀啊喂！',
				city1: 247,
				city2: 0,
				city3: 0,
				city4: 0,
				city5: 255,
				city6: 0
			}
		])
	}else if(index == 4){
		tes = reactive([
			{
				imgs: 'https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0010.jpg',
				txt: '职业：斧枪',
				intr: '使用长枪作为主要武器的枪术师，枪乃百兵之王，聚力于一点，出之必杀。',
				city1: 255,
				city2: 0,
				city3: 0,
				city4: 247,
				city5: 0,
				city6: 0
			}
		])
	}else if(index == 5){
		tes= reactive([
			{
				imgs: 'https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0011.jpg',
				txt: '职业：拔刀剑',
				intr: '使用武士刀作为主要武器的武忍士，神の速さが開くとすぐに、，私は嵐でした！！！',
				city1: 247,
				city2: 0,
				city3: 0,
				city4: 0,
				city5: 255,
				city6: 0
			}
		])
	}
	// 数据图    暂定
	option = {
	
	title: {
	  text: ''
	},
	
	grid: {
		  position: 'center',
	   },
	   tooltip : {
	   //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
		  confine: true,
		  enterable: true, //鼠标是否可以移动到tooltip区域内
	   },
	radar: {
	  // shape: 'circle',
	  indicator: [
		{ name: '力量', max: 255 },
		{ name: '智力', max: 255 },
		{ name: '耐力', max: 255 },
		{ name: '敏捷', max: 255 },
		{ name: '灵巧', max: 255 },
		{ name: '自选', max: 255 }
	  ],
	  name: {
		fontSize: 8,
                textStyle: {
                                padding: [-10, -12]  // 控制文字padding
								
                            }
            }
	},
	series: [
	  {
		type: 'radar',
		data: [
		  {
			value: [tes[0].city1, tes[0].city2, tes[0].city3, tes[0].city4, tes[0].city5, tes[0].city6],
		  },
		 
		]
	  }
	],
	width: '250px',
	height: '250px'
  };
// 创建节点
// setTimeout(() => {
// 	var drawer_Echars_box = document.getElementById('drawer_Echars_box');
//  	console.log(drawer_Echars_box);
// 	var echartsq ='<e-charts id="cans" :option="option">';
// 	drawer_Echars_box.insertAdjacentHTML("beforeend",echartsq);
// 	}, 1000);
}





</script>
 
<style lang="less" scoped>

.carousel-3d-container[data-v-d1f6685d]{
	width: 1000px;
	margin: 0 auto;
}
:deep(.left-1) {
    color: red;
    transform: rotateY(-40deg) translateX(-400px) translateZ(120px) !important;
}
:deep(.left-2) {
    color: red;
    transform: rotateY(-80deg) translateX(-800px) translateZ(120px) !important;
}
:deep(.right-1) {
  color: red;
  transform: rotateY(40deg) translateX(400px) translateZ(120px) !important;
}
:deep(.right-2) {
  color: red;
  transform: rotateY(80deg) translateX(800px) translateZ(120px) !important;
}

.lunbo{
	width: 1299px;
	height: 280px;
	margin: 0 auto;
	border-radius: 10px;
	box-shadow: 20px 20px 4px rgba(0,0,0,0.18),0 0 6px rgba(0,0,0,0.18);
	background-color: black;
	
}
.lunimg{
	position: relative;
	margin: 0px auto;
	top: 40px;
	
}
.carouselTitle{
	width: 100%;
	height: 100%;
}
// 下部分
.index_down{
	display: flex;
	margin: 30px auto 0 auto;
	width: 1299px;
	height: 300px;
	border-radius: 10px;
	box-shadow: 20px 20px 4px rgba(0,0,0,0.18),0 0 6px rgba(0,0,0,0.18);
}
.index_down_box {
	width: 205px;
	height: 200px;
	display: block;
	border: 1px solid gainsboro;
	margin-left: 8px;
	margin-top: 50px;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 7px 10px 4px rgba(0,0,0,0.18);
	// background-color: green;
}
.index_down_card{
	width: 100%;
	height: 120px;
}
.index_down_bottom {
	width: 100%;
	height: 80px;
	display: flex;
	line-height: 12px;
	justify-content: space-between;
	align-items: center;
}
.index_down_bottom span{
	width: 80%;
	height: 80px;
	text-align: center;
	line-height: 80px;
	margin-right: 20px;
	font-size: 15px;
	font-weight: 700;
	text-shadow: 12px -5px 2px rgba(0,0,0,0.4);
}

.index_down_button {
	width: 30%;
	height: 50%;
	font-size: 16px;
	color: white;
	text-align: right;
	margin-right: 0.3125rem;
	min-height: auto;
	background-color: #46A3FF;
	
}
.index_down_video{
	width: 100%;
	height: 100%;
	background-color: green;
}
// 详情
.drawer_box{
	width: 390px;
	height: 702px;
	box-shadow: 20px 20px 4px rgba(0,0,0,0.18),0 0 6px rgba(0,0,0,0.18);
}
.drawer_imgs{
	width: 100%;
	height: 20%;
	margin: 0 auto;
	text-shadow: 12px -4px 2px rgba(0,0,0,0.4);
	// background-color: rebeccapurple;
}
.drawer_imgs img{
	width: 100px;
	height: 100px;
	margin: 5px;
	border-radius: 10px;
	box-shadow: 10px 10px 4px rgba(0,0,0,0.18),0 0 6px rgba(0,0,0,0.18);
}
.drawer_Echars{
	width: 100%;
	height: 40%;
	margin: 0 auto;
	// background-color: grey;
}
#drawer_Echars_box{
	display: flex;
	position: relative;
	justify-content: center;
	width: 40%;
	height: 50%;
	margin: 0 auto;
	border-radius: 15px;
	background: url(https://static-mp-d549bd85-eabc-4c00-a019-e4e1fefbe43a.next.bspapp.com/HomeWork/018.jpg)no-repeat center center/cover;
	box-shadow: 10px 10px 4px rgba(0,0,0,0.18),0 0 6px rgba(0,0,0,0.18);
}

#cans{
	position: absolute;
	top: 25px;
	width: 62%;
	height: 80%;
}

.drawer_wrap{
	width: 80%;
	height: 30%;
	margin: 0 auto;
	border-radius: 10px;
	background: url(https://static-mp-d549bd85-eabc-4c00-a019-e4e1fefbe43a.next.bspapp.com/HomeWork/019.jpg)no-repeat center center/cover;
	box-shadow: 10px 10px 4px rgba(0,0,0,0.18),0 0 6px rgba(0,0,0,0.18);
	// background-color: rgba(0,0,0,0.4);
}
</style>
