
<template>
    <div class="eat_box">
        <div class="content" @click="Tong()" style="color: green;">
            <!-- <el-button :plain="true" @click="Tong()">消息</el-button> -->
            <div class="top"><img src="https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0012.jpg"></div>
            <div class="bottom"><img src="https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0013.jpg"></div>
            <div class="left"><img src="https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0014.jpg"></div>
            <div class="right"><img src="https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0015.jpg"></div>
            <div class="front"><img src="https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0016.jpg"></div>
            <div class="after"><img src="https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/0017.jpg"></div> 
        </div>
        <!-- <img class="posimg" src="https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/3001.png" alt=""> -->
        <div class="posimg">
            <div class="game_box">
                    <br><br><br><br><br><br><br><br><br>
                   <h2>还没想好.....</h2>
              
            </div>
        </div>
   </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import Speech from 'speak-tts';
let sins = reactive({
    lis: ['哎呦，好疼呀~~','求求你别戳我啦~~','啊！吃我一拳！！！','不理笨蛋~哼~','滚啊！死宅男！','我可爱吗？嘻嘻嘻']
});
const speech = new Speech();
if(speech.hasBrowserSupport()) { // 检测浏览器是否支持，returns a boolean
	console.log("语音引擎加载成功")
}
speech.init({
    volume: 0.6, // 音量0-1
    lang: 'zh-CN', // 语言
    rate: 1.5, // 语速1正常语速，2倍语速就写2
    pitch: 2, // 音调
    voice:'Microsoft Kangkang - Chinese (Simplified, PRC)',
    //支持Microsoft Huihui - Chinese (Simplified, PRC)
    //Microsoft Kangkang - Chinese (Simplified, PRC)
    //Microsoft Yaoyao - Chinese (Simplified, PRC)
    listeners: {
      // 事件
      onvoiceschanged: voices => {
        // console.log('事件声音已更改', voices);
      },
    },
  })
  .then(data => {
    console.log('语音已准备好，声音可用', data);
  })
  .catch(e => {
    console.error('初始化时发生错误 : ', e);
  });
let Tong = () =>{
   
    let texts;
    let lisgth = sins.lis.length;
    let rannum = Math.floor(Math.random() * (lisgth - 0 + 1) ) + 0;
    texts = sins.lis[rannum]
    if(rannum == 0){
        ElMessage(texts);
        speech.speak({
            text: texts,
        })
        .then(() => {
        console.log('Success !');
        })
        .catch(e => {
            console.error('An error occurred :', e);
        });
    }else if(rannum == 1){
        ElMessage(texts);
        speech.speak({
            text: texts,
        })
        .then(() => {
        console.log('Success !');
        })
        .catch(e => {
            console.error('An error occurred :', e);
        });
    }else if(rannum == 2){
        ElMessage(texts);
        speech.speak({
            text: texts,
        })
        .then(() => {
        console.log('Success !');
        })
        .catch(e => {
            console.error('An error occurred :', e);
        });
    }else if(rannum == 3){
        ElMessage(texts);
        speech.speak({
            text: texts,
        })
        .then(() => {
        console.log('Success !');
        })
        .catch(e => {
            console.error('An error occurred :', e);
        });
    }else if(rannum == 4){
        ElMessage(texts);
        speech.speak({
            text: texts,
        })
        .then(() => {
        console.log('Success !');
        })
        .catch(e => {
            console.error('An error occurred :', e);
        });
    }else if(rannum == 5){
        ElMessage(texts);
        speech.speak({
            text: texts,
        })
        .then(() => {
        console.log('Success !');
        })
        .catch(e => {
            console.error('An error occurred :', e);
        });
    }
    
    // 
}
console.log(sins.lis.length);
</script>


<style scoped>
.eat_box{
    /* position: relative; */
    width: 99%;
    height: 95%;
    border-radius: 10px;
    /* border: .1px solid gray; */
}
.posimg{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: url(https://static-mp-33881495-7888-4447-bf26-fb6742698492.next.bspapp.com/Tlm/3001.png)no-repeat center;
}
.game_box{
    position: relative;
    width: 50%;
    height: 70%;
    border: 2px solid gray;
    top: 80px;
    border-radius: 15px;
}
.content{
    position: absolute;
    top: 50px;
    left: 200px;
    width:100px;
    height:100px;
    transform-style:preserve-3d;
    transform: rotateX(-30deg) rotateY(-80deg);
    margin: 50px auto;
    animation: rotate linear 10s infinite;
}
@-webkit-keyframes rotate {
    from {
        transform: rotateX(0deg) rotateY(0deg);
    }
    to {
        transform: rotateX(360deg) rotateY(360deg);
    }
}
.content div{
  width:100px;
  height:100px;
  position: absolute;
  opacity: .9;
}
.content>div>img{
  width:100px;
  height:100px;
}
.content .top{
  transform: rotateX(90deg) translateZ(50px);
}
.content .left{
  transform: rotateY(-90deg) translateZ(50px);
}
.content .bottom{
  transform: rotateX(-90deg) translateZ(50px);
}
.content .right{
  transform: rotateY(90deg) translateZ(50px);
}
.content .front{
  transform: rotateY(0deg) translateZ(50px);
}
.content .after{
  transform: translateZ(-50px) rotateY(180deg);
}

</style>