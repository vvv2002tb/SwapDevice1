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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1P36UV7lK67wFS3w3cI3Qo0rfnvguios",
    authDomain: "login-56d51.firebaseapp.com",
    projectId: "login-56d51",
    storageBucket: "login-56d51.appspot.com",
    messagingSenderId: "991467051797",
    appId: "1:991467051797:web:786f71a7032d2f8878671c",
    measurementId: "G-X0FH5VFC55"
  };

// Initialize Firebase
initializeApp(firebaseConfig);



createApp(App).use(store).use(Antd).use(router).use(VueAxios, axios, Vue).use(icon).mount('#app');
