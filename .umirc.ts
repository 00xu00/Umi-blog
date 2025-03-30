import { defineConfig } from 'umi'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    {
      path: '/login',
      component: '@/pages/Login',
    },
    {
      path: '/register',
      component: '@/pages/Register',
    },
    {
      path: '/deepseekDemo',
      component: '@/pages/DeepSeekDemo',
    },
    {
      path: '/404',
      component: '404',
    },
  ],
})
