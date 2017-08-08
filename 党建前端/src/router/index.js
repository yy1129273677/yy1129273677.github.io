import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/nav/home.vue"
import nav from '../components/frame/nav.vue'
import inform from '../components/nav/inform.vue'
import my from '../components/nav/my.vue'
import newstitle from "../components/news/newstitle.vue"
import newsdetail from "../components/news/newsdetail.vue"
import seekorgan from "../components/organization/seekorgan.vue"
import thinking from "../components/organization/thinking.vue"
import checkstate from "../components/organization/checkstate.vue"
import exercise from '../components/exercise/exercise.vue'
import discussion from"../components/discussion/discussion.vue"
import postdetail from "../components/exercise/postdetail.vue"
import login from "../components/login/login.vue"
import changepwd from "../components/login/changepwd.vue"
import personmsg from "../components/personmsg/personmsg.vue"
import personpoint from "../components/personmsg/personpoint.vue"
import jifendetail from "../components/personmsg/jifendetail.vue"
import minzhujudge from "../components/minzhujudge/minzhujudge.vue"
import choose from "../components/minzhujudge/choose.vue"
import judgelist from "../components/minzhujudge/judgelist.vue"
import othersummary from "../components/minzhujudge/othersummary.vue"
import personsum from "../components/minzhujudge/personsum.vue"


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '默认',
      component: home,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/inform',
      name: 'inform',
      component: inform,
      meta:{
        role:true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta:{
        role:true
      }
    },
    {
      path: '/newstitle',
      name: 'newstitle',
      component: newstitle,
      meta:{
        role:true
      }
    },
    {
      path: '/seekorgan',
      name: 'seekorgan',
      component: seekorgan,
      meta:{
        role:true
      }
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: exercise,
      meta:{
        role:true
      }
    },
    {
      path: '/newsdetail',
      name: 'newsdetail',
      component: newsdetail,
      meta:{
        role:true
      }
    },
    {
      path: '/discussion',
      name: 'discussion',
      component: discussion,
      meta:{
        role:true
      }
    },
    {
      path: '/postdetail',
      name: 'postdetail',
      component: postdetail,
      meta:{
        role:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/personmsg',
      name: 'personmsg',
      component: personmsg,
      meta:{
        role:true
      }
    },
    {
      path: '/personpoint',
      name: 'personpoint',
      component: personpoint,
      meta:{
        role:true
      }
    },
    {
      path: '/jifendetail',
      name: 'jifendetail',
      component: jifendetail,
      meta:{
        role:true
      }
    },
    {
      path: '/changepwd',
      name: 'changepwd',
      component: changepwd,
      meta:{
        role:true
      }
    },
    {
      path: '/thinking',
      name: 'thinking',
      component: thinking,
      meta:{
        role:true
      }
    },
    {
      path: '/checkstate',
      name: 'checkstate',
      component: checkstate,
      meta:{
        role:true
      }
    },
    {
      path: '/minzhujudge',
      name: 'minzhujudge',
      component: minzhujudge,
      meta:{
        role:true
      }
    },
    {
      path: '/choose',
      name: 'choose',
      component: choose,
      meta:{
        role:true
      }
    },
    {
      path: '/judgelist',
      name: 'judgelist',
      component: judgelist,
      meta:{
        role:true
      }
    },
    {
      path: '/othersummary',
      name: 'othersummary',
      component: othersummary,
      meta:{
        role:true
      }
    },
    {
      path: '/personsum',
      name: 'personsum',
      component: personsum,
      meta:{
        role:true
      }
    },
  ]
})
