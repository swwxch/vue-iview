const routers = [{
    path: '/',
    meta: {
        title: '欢迎主页面'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;