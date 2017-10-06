



var selectid=function(i){
	console.log("i am in")
	if(i==="="){
		this.innerHTML = eval(this.innerHTML);
	}
        if(i==="back"){
         this.innerHTML = this.innerHTML.slice(0,-1)}
	else{
	this.innerHTML = this.innerHTML + i;
   }





}



function startthis(){
	var p = document.querySelector("#write-here");
	
     var c =document.getElementById("table");
	for(var i =0 ; i<10;i++){
		var t=c.getElementsByTagName('th')[i];
		console.log(t);
        t.addEventListener('click', selectid.bind(p , i.toString()));

	}
                document.addEventListener('keydown' , function(event){
if(event.keyCode==8){selectid("back")}
})
	
		var o=c.getElementsByTagName('td')[0];
		console.log(o);
		o.addEventListener('click', selectid.bind(p ,"+"));

		var o1=c.getElementsByTagName('td')[1];
		o1.addEventListener('click', selectid.bind(p , "-"));

		var o2=c.getElementsByTagName('td')[2];
		o2.addEventListener('click', selectid.bind(p ,"*"));
		
		var o3=c.getElementsByTagName('td')[3];
		o3.addEventListener('click', selectid.bind(p ,"="));

		var o4=c.getElementsByTagName('td')[4];
		o4.addEventListener('click', selectid.bind(p ,"/"));

		
}


window.addEventListener('load' , startthis);
