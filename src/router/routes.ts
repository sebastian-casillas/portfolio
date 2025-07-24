import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import('pages/Index.vue'),
        children: [
          { 
            path: '', 
            name: 'Workflow', 
            component:  () => import('src/pages/WorkflowPage.vue')
          },
          { 
            path: 'background', 
            name: 'Bakcground', 
            component:  () => import('pages/Background.vue')
          },
          { 
            path: 'portfolio/:slug?', 
            name: 'Portfolio', 
            component:  () => import('pages/Portfolio.vue')
          },
        ]
      },
      { 
        path: '/cv', 
        name: 'CV', 
        component: () => import('pages/Curriculum.vue') 
      },
     
      { 
        path: '/explorative', 
        name: 'Explorative', 
        component: () => import('pages/ExpViz.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
