export default {
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        { path: '/', redirect: '/app/intelligences' },
        { path: '/home', redirect: '/app/intelligences' },
        {
          path: '/app',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          routes: [
            { path: '/app/', redirect: '/app/intelligences' },
            {
              path: '/app/intelligences',
              name: 'intelligences',
              icon: 'info-circle',
              component: './Intelligences',
            },
            {
              path: '/app/sois',
              name: 'sois',
              icon: 'cloud-server',
              component: './SOIs',
            },
            {
              path: '/app/agents',
              name: 'agents',
              icon: 'cluster',
              component: './Agents',
            },
            {
              path: '/app/settings',
              name: 'settings',
              icon: 'setting',
              component: './Settings',
            },
          ],
        },
      ],
    },
    {
      component: './404',
    },
  ],
  proxy: {
    '/apis/': {
      target: 'http://localhost:9099',
      changeOrigin: true,
      // pathRewrite: { '^/server': '' },
    },
  },
};