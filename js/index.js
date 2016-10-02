
 document.addEventListener('scroll',function(){
   var mTop = document.getElementById('li-of-post').offsetTop-document.body.scrollTop;
   var scrotop=window.pageYOffset;
   mTop=mTop+scrotop;
    if(mTop<=scrotop){
    $('.here').addClass('fixhere');
    $('.mytittle').show();

    }
    else{
      $('.here').removeClass('fixhere');
          $('.mytittle').hide();

 });
