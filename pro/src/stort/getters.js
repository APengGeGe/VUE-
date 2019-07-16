var getters ={
	count1:function(state){
		if(state.count>10){
			return "haha"
		}else{
			return "666"
		}
	}
}

export default getters;
