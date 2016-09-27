var c=document.getElementById("myCanvas");  
var ctx=c.getContext("2d");  
width=window.innerWidth;
height=window.innerHeight;
var starx=[],stary=[],starr=[];
numofstar=300;
for (i=1;i<=numofstar;i++){
	starx[i]=Math.random()*width+5;
	stary[i]=Math.random()*height+5;
	starr[i]=Math.random();
	ctx.beginPath();
	ctx.arc(starx[i], stary[i], starr[i], 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle = 'white';
    ctx.fill();
	
}

function blink(){
	ctx.clearRect(0,0,width,height);
	
    drawmoon();
	var flag=[];
	for(i=1;i<=numofstar;i++){
		flag[i]=Math.random();
	
	  if (flag[i]>0.5){
		starr[i]=starr[i]+0.2;
		if (starr[i]>0.8)
			starr[i]=0.8;
	   }
	  else{
		starr[i]=starr[i]-0.2;
		if(starr[i]<0)
			starr[i]=0.1;
	  }
    }
	drawstar();
}

function drawstar(){
for (i=1;i<=numofstar;i++){
	ctx.beginPath();
	ctx.arc(starx[i], stary[i], starr[i], 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fillStyle = 'white';
    ctx.fill();
	}
}