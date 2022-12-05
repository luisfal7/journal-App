
export default {

    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path:'',
            name:'login',
            component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/view/Login.vue'),
        },
        {
            path:'/register',
            name:'register',
            component: () => import(/* webpackChunkName: "register" */ '@/modules/auth/view/Register.vue'),
        },
    ]

}