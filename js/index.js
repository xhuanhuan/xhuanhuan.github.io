$(document).ready(function(){
  var scrotop=window.pageYOffset;
  if(scrotop>100){
        $('.navbar').css({'background-color':'#b8b8dc'});
      }
      else{
        $('.navbar-default').css({'background-color':'rgba(255,255,255,0.3)','border':'transparent'});
      }

      var w= $('#li-of-post').width();
      $('.fixhere').css({'width':w});
 document.addEventListener('scroll',function(){
    var scrotop=window.pageYOffset;
    if(scrotop>100){
          $('.navbar').css({'background-color':'#b8b8dc'});
          if(document.body.offsetWidth>767){
          $('.myfirstarchive').css({'height':'300px'});
                $('.mytittle').show();
          }
        }
        else{
          $('.navbar-default').css({'background-color':'rgba(255,255,255,0.3)','border':'transparent'});
            $('.mytittle').hide();
        }
        var mTop = document.getElementById('li-of-post').offsetTop-document.body.scrollTop;
        mTop=mTop+scrotop;
         if(mTop<=scrotop){
        $('.here').addClass('fixhere');
         }
         else{
           $('.here').removeClass('fixhere');
           }
 });


  });

//read works
// var fs = require("fs");
// var count=0;
// var num=[];
// var Data=[];
// var str='';
// function readFile(path,filesList)
// {
// files = fs.readdirSync(path);//需要用到同步读取
// files.forEach(walk);
// function walk(file)
// {
//   count=0;
//   num=[];
//   Data=[];
//   // console.log(file);console.log(1);
// var data=fs.readFileSync(path+'/'+file)
//
//       Data=data.toString();
//       for(var i=0;i<Data.length;i++){
//         if(Data[i]==':'&&Data[i+1]==' '){
//           num[count]=i;
//           count++;
//         }
//       }
//  //创建一个对象保存信息
//  var obj = new Object();
//  obj.wtitle =getstr(num[0]+2,num[1]-6,Data);//文件名
//  obj.Date =getstr(num[1]+2,num[2]-6,Data);
//  obj.path =getstr(num[2]+2,num[3]-5,Data);
//  obj.img =getstr(num[3]+2,num[4]-10,Data);
//  obj.subtitle =getstr(num[4]+2,num[5]-10,Data);
//  obj.contents =getstr(num[5]+2,Data.length-7,Data);
//  filesList.push(obj);
// }
// }
// function getstr(i,j,data){
//   str='';
//   for(var c=i;c<j;c++){
//     str=str+data[c];
//   }
//   return str;
// }
//
// function geFileList(path)
// {
// var filesList = [];
// readFile(path,filesList);
// return filesList;
// }
// var filesList = geFileList("D:/文档/web_items/blog/source/_works");
// console.log(filesList[0].wtitle);
