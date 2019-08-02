import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/dashboard',
      meta: {
        title: 'MOBA操作后台'
      }
    },
    {
      path: '/dashboard',
      name: 'main',
      meta: {
        title: 'MOBA操作后台'
      },
      component: () =>
        import(/* webpackChunkName: "Main" */ './views/Main.vue'),
      children: [
        {
          path: '/catagories/create',
          name: 'categoryedit',
          meta: {
            title: 'MOBA创建分类'
          },
          component: () =>
            import(/* webpackChunkName: "Main" */ './views/CategoryEdit.vue')
        }
      ]
    }
  ]
})
