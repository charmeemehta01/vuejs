import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import { routes } from './Router';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDk0ljUNTsg57HTeeZE4pjt4HAXlVudKl0",
    authDomain: "ipgm-dea57.firebaseapp.com",
    databaseURL: "https://ipgm-dea57.firebaseio.com",
    projectId: "ipgm-dea57",
    storageBucket: "ipgm-dea57.appspot.com",
    messagingSenderId: "938142155816",
    appId: "1:938142155816:web:a6eb1bc506a1f0a9fba11d"
});


Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')