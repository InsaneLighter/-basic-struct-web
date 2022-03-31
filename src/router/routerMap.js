import Layout from '@/components/layouts/Layout'

export const routerMap = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: (resolve) => require(['@/views/dashboard'], resolve)
            }
        ]
    },
    {
        path: '/403',
        component: (resolve) => require(['@/views/exception/403'], resolve),
        hidden: true
    },
    {
        path: '/404',
        component: (resolve) => require(['@/views/exception/404'], resolve),
        hidden: true
    },
    {
        path: '/500',
        component: (resolve) => require(['@/views/exception/500'], resolve),
        hidden: true
    },
    //以上路由均不匹配则重定向入404页面
    {
        path: '*',
        redirect: "/404"
    }
]
