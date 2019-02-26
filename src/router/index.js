import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Code from '@/components/Code'
import Demos from '@/components/Demos'
import Imfor from '@/components/Imfor'
import JobWanted from '@/components/JobWanted'
import Skills from '@/components/Skills'
import Works from '@/components/Works'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        About,Code,Demos,Imfor,JobWanted,Skills,Works
      }
    },
    {
      path:'/About',
      name: 'About',
      component:About
    },
    {
      path:'/Code',
      name: 'Code',
      component:Code
    },
    {
      path:'/Demos',
      name: 'Demos',
      component:Demos
    },
    {
      path:'/Imfor',
      name: 'Imfor',
      component:Imfor
    },
    {
      path:'/JobWanted',
      name: 'JobWanted',
      component:JobWanted
    },
    {
      path:'/Skills',
      name: 'Skills',
      component:Skills
    },
    {
      path:'/Works',
      name: 'Works',
      component:Works
    }


  ]
})
