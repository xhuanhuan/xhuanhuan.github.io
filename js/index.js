$(document).ready(function(){
  var w= $('#li-of-post').width();
  $('.fixhere').css({'width':w});

  var link = document.getElementsByClassName('toc-link');
  var scrotop=window.pageYOffset;
  if(scrotop>100){
        $('.navbar').css({'background-color':'#b8b8dc'});
      }
      else{
        $('.navbar-default').css({'background-color':'rgba(255,255,255,0.3)','border':'transparent'});
      }
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
           if(window.screen.width>767){
           var w= $('#li-of-post').width();
           $('.fixhere').css({'width':w});
           $('.here').addClass('fixhere');
         }
         }
         else{
           $('.here').removeClass('fixhere');
           }

//----------滚动监听-----------
  for(var i=0;i<link.length;i++)
  {
  // var link = $('.toc-link');
    // var mao = /#[\u4e00-\u9fa5|a-z|A-Z|0-9|]*/;
    var mao = /#.*/;
    var h=$(link[i].href.match(mao)[0]).offset().top-document.body.scrollTop;
    console.log(h);
    if(h<80 && h>40){
      $(link[i]).css('background-color','#d0d0d0');
    }else{
      $(link[i]).css('background-color','white');
    }

  }

 });
  });
  var link = document.getElementsByClassName('toc-link');
  // var link = $('.toc-link');
  for(var i=0;i<link.length;i++)
  {
      // var mao = /#[\u4e00-\u9fa5|a-z|A-Z|0-9|]*/;
      var mao = /#.*/;
      link[i].onclick = function(){
        var temp = $(this.href.match(mao)[0]);
        // $(this.href.match(mao)[0]).animate({'font-size':'30px'},1000);
        // $(this.href.match(mao)[0]).css('color','green');
        $('html,body').animate({scrollTop:$(this.href.match(mao)[0]).offset().top-70},500);
        return false;
      }
  }
  //---------
    var list = document.getElementsByClassName('tag-list-count');
    for(var i=0;i<list.length;i++)
    {
    list[i].innerHTML  = '('+list[i].innerHTML+')';
    }
    var list1 = document.getElementsByClassName('category-list-count');
  for(var i=0;i<list1.length;i++)
  {
    list1[i].innerHTML  = '('+list1[i].innerHTML+')';
  }
  var list2 = document.getElementsByClassName('archive-list-count');
for(var i=0;i<list2.length;i++)
{
  list2[i].innerHTML  = '('+list2[i].innerHTML+')';
}


window.onresize=function(){
  var ws=window.screen.width-50;
  var hs=window.screen.height;
  if(ws<767){
    $('.here').removeClass('fixhere');
    $('.here').addClass('fixleft');
      $('.fixleft').css({'width':ws});
    $('.fixleft').css({'left':-ws});
    $('.fixleft').css({'max-height':hs});
    $('#head1').click(
      function(){
        console.log(c);
        if($('.fixleft').css('left')=='0px'){
          $('.fixleft').animate({'left':-ws},500);
        }
        else{
          $('.fixleft').animate({'left':0},500);
      }
      })
      $('body').click(function(){
        if($('.fixleft').css('left')=='0px'){
            $('.fixleft').animate({'left':-ws},500);
        }
      })
  }else{
    $('.here').removeClass('fixleft');
    $('.here').css({'left':'auto'});
  }

}
var ws=window.screen.width-50;
var hs=window.screen.height;
if(ws<767){
  $('.here').removeClass('fixhere');
  $('.here').addClass('fixleft');
    $('.fixleft').css({'width':ws});
  $('.fixleft').css({'left':-ws});
  $('.fixleft').css({'max-height':hs});
  $('.fixleft').css({'padding-top':'50px'});
  $('#head1').click(
    function(){
      if($('.fixleft').css('left')=='0px'){
        $('.fixleft').animate({'left':-ws},500);
      }
      else{
        $('.fixleft').animate({'left':0},500);
    }
    })
    $('body').click(function(){
      if($('.fixleft').css('left')=='0px'){
          $('.fixleft').animate({'left':-ws},500);
      }
    })
}else{
  $('.here').removeClass('fixleft');
  $('.here').css({'left':'auto'});
}
