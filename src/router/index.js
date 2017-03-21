import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Component1 from '../components/Component1.vue'
import Component2 from '../components/Component2.vue'
import Component3 from '../components/Component3.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/component1',
      component: Component1
    },
    {
      path: '/component2',
      component: Component2
    },
    {
      path: '/component3',
      component: Component3
    },
    { path: '*',
      component: NotFoundComponent
    }
  ]
})
