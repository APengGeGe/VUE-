<template >
	<div id="bb">
		<van-card
			v-for="item in list"
			  :price="item.pprice"
			  :desc="item.pesc"  
			  :thumb="item.pimg"
			  @click ="tap(item.pid)"
		/>
		
	</div>
</template>

<script>
import axios from "axios";
export default{
	name:'home',
	data(){
 		return{
 			title:"首页",
 			list:[]
 		}
 	},
 	methods:{
 		tap(id){
 			this.$router.push("/del/"+id);
 			/*console.log(id)*/
 		}
 	},
 	mounted(){
 		axios({url:'http://jx.xuzhixiang.top/ap/api/productlist.php'
 		}).then((data)=>{
 			this.list = data.data.data;
 			console.log(data.data.data)
 		})
   		this.$emit("toparent",this.title)
 },
}
	
</script>

<style scoped="">
	
</style>