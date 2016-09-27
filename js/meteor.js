var c=document.getElementById("myCanvas");  
var ctx=c.getContext("2d");  


var mdx=[];
var mdy=[];
var l=200;
var speed=2;
var num;
function getxandy(){
    num=Math.floor(Math.random()*10)+1;
    for(var i=0;i<num;i++){
	mdx[i]=Math.random()*width+600;
	  if(mdx[i]<width)
		  mdy[i]=0;
	  else 
		  mdy[i]= Math.random()*height; 
    }
}
 
function slide(){	
  for(i=0;i<num;i++){
    if(mdx[i]>0){
	mdx[i]=mdx[i]-speed;
	mdy[i]=mdy[i]+speed;
	drawmeteor(mdx[i],mdy[i],l);
    }
	else{
		mdx[i]=Math.random()*width+300;
	  if(mdx[i]<width)
		  mdy[i]=0;
	  else 
		  mdy[i]= Math.random()*height; 
    }
  }
}
 
function drawmeteor(x,y,r){
gra = ctx.createRadialGradient(x, y, 0, x, y,r);
gra.addColorStop(0, 'rgba(255,255,255,1)');
gra.addColorStop(1, 'rgba(0,0,0,0)');
ctx.save();
ctx.fillStyle = gra;

ctx.beginPath();
ctx.arc(x,y,0.5,0.25*Math.PI,1.25*Math.PI,false);  
ctx.lineTo(x+r,y-r);
ctx.closePath();
ctx.fill();
}
