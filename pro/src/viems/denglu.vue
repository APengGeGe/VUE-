<template >
	<div id="bb">
		<van-nav-bar
		  title="标题"
		  :fixed="true"
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
			
		</div>	
		
		<van-button type="primary" @click="deng()">登录</van-button>
		<van-button type="primary" to="zhuce">注册</van-button>
		
		<hr />
		<h2>欢迎{{this.$store.state.name}}</h2>
		<h3>{{this.$store.state.count}}</h3>
		<h2>间接---{{count}}</h2>
		<h2>{{this.$store.state.info.counts}}</h2>
		<h2>间接---{{count1}}</h2>
		<van-button type="primary" @click="tap()">获取</van-button>
		<van-button type="primary" @click="tap1()">异步</van-button>
	</div>
</template>

<script>
import axios from "axios"
import {mapState,mapGetters,mapActions} from "vuex" 

export default{
	name:'denglu',
	data(){
 	return{
 		username:"",
 		password:"",
 		active: 0
 	}
 	},
 	computed:{
 		...mapState(["count"]),
 		...mapGetters(['count1'])
 	},
	methods: {
   		tap(){
   			this.$store.commit("add")
   		},
   		tap1(){
   			this.$store.dispatch("jian")
   		},
   		deng(){
   			this.$store.commit("login",this.username);
   			this.$router.push("/denglu")
   		}
 },
}
	
</script>

<style scoped="">
	#aa{
		margin-top:100px;
	}
</style>