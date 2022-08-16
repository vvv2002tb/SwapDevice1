import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import '../src/assets/style/tailwind.css';
import { icon } from '@ant-design/icons-vue'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios';
import VueAxios from 'vue-axios';


createApp(App).use(store).use(Antd).use(router).use(VueAxios, axios, Vue).use(icon).mount('#app');
