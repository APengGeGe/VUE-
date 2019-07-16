var mutations ={
	add(state){
		state.count++
	},
	jian(state){
		state.count--
	},
	login(state,name){
		state.name = name
	}
}

export default mutations;
