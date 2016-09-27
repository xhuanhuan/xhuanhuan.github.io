var c=document.getElementById("myCanvas");  
var ctx=c.getContext("2d");  

width=window.innerWidth;
height=window.innerHeight;
c=document.getElementById('myCanvas');
c.width=width;
c.height=height;




var count=0;
function main(){
	ctx.clearRect(0,0,width,height);
	count++;
	//if(count%10==0){
		blink();
		
	//}
	drawmoon();
	drawstar();
	slide();
	//getxandy();
}
getxandy();
setInterval('main()',10);