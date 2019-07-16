<template >
	<div id="bb">
		<van-nav-bar
		  title="标题"
		  :fixed="true"
		   left-text="返回"
		   @click-left="onClickLeft"
		/>
		<div id="aa">
			<van-cell-group >
				  <van-field
				    v-model="username"
				    required
				    clearable
				    label="用户名"
				    right-icon="question-o"
				    placeholder="请输入用户名"
				    @click-right-icon="$toast('question')"
				    />
				
				  <van-field
				    v-model="password"
				    type="password"
				    label="密码"
				    placeholder="请输入密码"
				    required
				    
				  />
			</van-cell-group>
			
			<van-button type="primary" >注册</van-button>
		<h2>欢迎{{this.$store.state.name}}</h2>
	
			<van-tabbar v-model="active">
				
			  <van-tabbar-item icon="home-o" to="/shouye">首页</van-tabbar-item>
			  <van-tabbar-item icon="search" to="/sousuo">搜索</van-tabbar-item>
			  <van-tabbar-item icon="friends-o" to="/haoyou">好友</van-tabbar-item>
			  <van-tabbar-item icon="setting-o" to="/dongtai">动态</van-tabbar-item>
			</van-tabbar>
		</div>	
		
		<hr />
		
		<h3>{{this.$store.state.count}}</h3>
	</div>
</template>

<script>
export default{
	name:'zhuce',
	data(){
 	return{
 		username:"",
 		password:"",
 		active: 0
 	}
 	},
	methods: {
   		onClickLeft(){
   			this.$router.go(-1)
   		}
 },
}
	
</script>

<style scoped="">
	#aa{
		margin-top:100px;
	}
</style>