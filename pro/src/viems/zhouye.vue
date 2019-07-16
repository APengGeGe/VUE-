<template >
	<div id="bb">
		
		<van-nav-bar
		
		:title="title"
		:fixed="true"
		left-text="返回登录"
		left-arrow
		@click-left="onClickLeft"
		/>
		
		<div id="cc">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
	  			<router-view @toparent="getval"></router-view>
			</van-pull-refresh>
			
		</div>
		
		
		<div id="aa">
	
			<van-tabbar v-model="active"  :fixed="true">
			  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
			  <van-tabbar-item icon="search" to="/sousuo">搜索</van-tabbar-item>
			  <van-tabbar-item icon="friends-o" to="/haoyou">好友</van-tabbar-item>
			  <van-tabbar-item icon="setting-o" to="/dongtai">动态</van-tabbar-item>
			</van-tabbar>
		</div>	
		
	</div>
</template>

<script>
export default{
	name:'zhouye',
	data(){
 	return{
 		
 		active: 0,
 		title:"首页",
 		isLoading:false
 		}
 	},
	methods:{
   		getval(msg){
   			this.title = msg
   		},
   		onClickLeft(){
   			window.location.href = "/denglu"
   		},
   		onRefresh() {
     	 setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  
},
 	mounted(){
 		this.$emit("toparent",this.title)
 }
}
	
</script>

<style scoped="">
	#aa{
		margin-bottom:50px;
	}
	#cc{
		margin-top:46px;
	}
</style>