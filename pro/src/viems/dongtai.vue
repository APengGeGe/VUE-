<template >
	<div id="bb">
		<h3>dongtai</h3>
		<h3>dongtai</h3>
		<h3>hdongtai</h3>
		<h3>dongtai</h3>
		<h3>dongtai</h3>
	</div>
</template>

<script>
export default{
	name:'dongtai',
	data(){
 	return{
 		title:"动态"
 	}
 	},
 	mounted(){
   		this.$emit("toparent",this.title)
 },
}
	
</script>

<style scoped="">
	
</style>