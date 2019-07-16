<template >
	<div id="bb">
		<h3>sousuo</h3>
		<h3>sousuo</h3>
		<h3>sousuo</h3>
		<h3>sousuo</h3>
		<h3>sousuo</h3>
	</div>
</template>

<script>
export default{
	name:"sousuo",
 	data(){
 	return{
 		title:"搜索"
 	}
 	},
 	mounted(){
   		this.$emit("toparent",this.title)
 },
}
	
</script>

<style scoped="">
	
</style>