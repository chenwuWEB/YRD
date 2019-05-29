import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//import Api from './lib/module/js/api.js';
//Vue.config.productionTip = false
//Vue.prototype.Api = Api;



//mint-ui按需引入
import'mint-ui/lib/style.css'
import {Swipe,SwipeItem} from "mint-ui"
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);


// 1.引入axios库
import axios from "axios"
// 2.配置跨域选项
axios.defaults.withCredentials=true
// 3.将axios配置为Vue实例属性
Vue.prototype.axios=axios


Vue.prototype.COMMON = {
  url: 'http://127.0.0.1:3000/'
}

//日期过滤器
Vue.filter("Date",function(value){
  var now=new Date(value);
  var n=now.getFullYear();
  var y=now.getMonth()+1;
  var r=now.getDate();
  //var s=now.getHours();
  //var f=now.getMinutes();
  //var m=now.getSeconds();
  y<10&&(y="0"+y);
  r<10&&(r="0"+r);
  //s<10&&(s="0"+s);
  //f<10&&(f="0"+f);
  //m<10&&(m="0"+m);
  //return `${n}-${y}-${r} ${s}:${f}:${m}`
  return `${n}-${y}-${r}`
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
