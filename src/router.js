import VueRouter from 'vue-router'

// 导入路由对象
import Home from './components/tabbar/home.vue'
import Order from './components/tabbar/order.vue'
import My from './components/tabbar/my.vue'
import List from './components/list/list.vue'
import Reservation from './components/reservation/reservation.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [   //配置路由规则
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/list',component:List,name:'list'},
    {path:'/reservation',component:Reservation,name:'reservation'},
    {path:'/order',component:Order},
    {path:'/my',component:My}
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router