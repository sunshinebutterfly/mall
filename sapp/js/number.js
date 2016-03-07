//数量加减运算
var Number = function(id){
	this.id = $('#'+id);
	this.num = parseInt(this.id.text());
	this.addNum = function(){
		if(this.num > 0){
			this.num++;
		}
		this.id.html(this.num);
	}
	this.removeNum = function(){
		if(this.num <= 1){
			return false
		}else{
			this.num--;
			this.id.html(this.num);
		}	
	}
}