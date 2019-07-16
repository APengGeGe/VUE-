<template >
	<div id="bb">
		<h3>haoyou</h3>
		<h3>haoyou</h3>
		<h3>haoyou</h3>
		<h3>haoyou</h3>
		<h3>haoyou</h3>
	</div>
</template>

<script>
export default{
	name:'haoyou',
	data(){
 	return{
 		title:"好友"
 	}
 	},
 	mounted(){
   		this.$emit("toparent",this.title)
 },
}
	
</script>

<style scoped="">
	
</style>