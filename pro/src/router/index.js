//路由
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Deng from '@/viems/denglu'
import Zhu from '@/viems/zhuce'
import Shou from '@/viems/zhouye'
import Home from '@/viems/home'
import Sou from '@/viems/sousuo'
import Hao from '@/viems/haoyou'
import Dong from '@/viems/dongtai'
import Del from '@/viems/del'
//@ ../
//vue中全局挂载router对象
Vue.use(Router)

//路由懒加载
//路由懒加载
//路由懒加载
//***********component:()=>import("./viems/路径")

export default new Router({
  routes: [
    {
    	path:'/',
			redirect:'/denglu'
    },
    {
    	path:'/denglu',
    	component:Deng
    },
    {
    	path:'/zhuce',
    	component:Zhu
    },
    {
    	path:"/zhouye",
    	component:Shou,
    	children:[
    		{
    			path:'/home',
    			component:Home
    		},
    			{
    			path:'/sousuo',
    			component:Sou
    		},
    			{
    			path:'/haoyou',
    			component:Hao
    		},
    			{
    			path:'/dongtai',
    			component:Dong
    		}
    	]
    },
    {
    	path:"/del/:id",
    	component:Del
    }
    
  ]
}
)
