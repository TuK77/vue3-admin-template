import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/zh-cn';
import 'element-plus/dist/index.css';
import '@/styles/index.scss';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app');
