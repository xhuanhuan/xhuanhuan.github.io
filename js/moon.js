var c=document.getElementById("myCanvas");  
var ctx=c.getContext("2d");  

function drawmoon(){
var radial = ctx.createRadialGradient(100,100,30,100,100,60); //�غϵ�Բ������ 
radial.addColorStop(0,'white'); 
radial.addColorStop(1,'rgba(0,0,0,0)'); 
ctx.fillStyle=radial;
ctx.fillRect(0,0,200,200);
}





