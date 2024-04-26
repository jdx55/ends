import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import Carousel3d from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"
import 'element-plus/dist/index.css'
import './style.css'
import router from './router'
import App from './App.vue'
import vue3videoPlay from 'vue3-video-play'
import 'vue3-video-play/dist/style.css'
import ECharts from 'vue-echarts'
import "echarts";   

const pinia = createPinia();
const app = createApp(App)


app.use(vue3videoPlay)
app.use(Carousel3d)
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.component('ECharts',ECharts) 
app.mount('#app')