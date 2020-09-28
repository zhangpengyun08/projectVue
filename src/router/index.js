import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: '登录页',
		component: () => import('@/views/login.vue')
	},
	{
		path: '/home',
		name: '主页',
		component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
		redirect: '/index',
		children: [
			{
				path: '/index',
				name: '首页',
				component: () => import('@C/end/modify/index.vue')
			},
			{
				path: '/404',
				name: '404',
				component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
			},
			{
				path: '/1',
				name: '1',
				component: () => import('@C/end/modify/1.vue')
			},
			{
				path: '/2',
				name: '2',
				component: () => import('@C/end/modify/2.vue')
			},
			{
				path: '/3',
				name: '3',
				component: () => import('@C/end/modify/3.vue')
			},
			{
				path: '/detail',
				name: 'detail',
				component: () => import('@C/end/modify/detail.vue')
			},
			{
				path: '/route/:name',
				name: 'route',
				component: () => import('@C/end/modify/route.vue'),
				// component: {
				// 	template:`
				// 	<div>
				// 	<div>我叫：{{$route.params.name}}</div>
				// 	<router-link to="more" append>更多信息</router-link>
				// 	<router-view></router-view>
				// 	</div>
				// 	`
				// },
				children: [
					{
						path: 'more',
						name: '更多',
						component: () => import('@C/end/modify/more.vue')
						// component: {
						// 	template:`
						// 	<div>
						// 		用户{{$route.params.name}}的详细信息
						// 	</div>
						// 	`
						// },
					}
				]
			}
		]
	},

]

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.VUE_APP_BASE,
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition
		} else {
			return {x: 0, y: 0}
		}
	}
})

export default router
