import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import TodoList from '@/components/TodoList'

Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
