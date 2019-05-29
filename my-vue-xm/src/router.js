import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import About_4 from './views/Qualification.vue'
import About_5 from './views/Partners.vue'
import Business from './views/Business.vue'
import Details from './views/Details.vue'
import Case from './views/Case.vue'
import Recruitment from './views/Recruitment.vue'
import Concept from './views/Concept.vue'
import News from './views/News.vue'
import Contact from './views/Contact.vue'
import Message from './views/Message.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',component: Home},
    {path:'/Home',component: Home},
    {path:'/About',component:About},
    {path:'/About_4',component:About_4},
    {path:'/About_5',component:About_5},
    {path:'/Business',component:Business},
    {path:'/Details',component:Details},
    {path:'/Case',component:Case},
    {path:'/Recruitment',component:Recruitment},
    {path:'/Concept',component:Concept},
    {path:'/News',component:News},
    {path:'/Contact',component:Contact},
    {path:'/Message',component:Message},
  ]
})
