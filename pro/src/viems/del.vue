<template>
	<div>
		<van-nav-bar
		  	title="详情"
		  :fixed="true"
		   left-text="返回"
		  left-arrow
		   @click-left="onClickLeft"
		/>
		<div id="inner">
			<van-card
			  :price="detail.pprice"
			  :desc="detail.pdesc"  
			  :title="detail.pname"
			  :thumb="detail.pimg"
			/>	
		
		</div>
	
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				detail:''
			}
		},
		mounted(){
			var _this=this;	
			axios({
				url:'http://jx.xuzhixiang.top/ap/api/detail.php',
				params:{id:_this.$route.params.id}
			}).then((data)=>{
				this.detail=data.data.data
			})
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			
	}
		}
</script>

<style scoped="">
	#inner{
		margin-top: 46px;
		margin-bottom: 50px;
	}
</style>