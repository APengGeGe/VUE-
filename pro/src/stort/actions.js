var actions ={
	jian:function({commit}){
		setInterval(function(){
			commit('jian')
		},1000)
	},
	
}

export default actions;
