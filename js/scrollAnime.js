function fadeInAnime(){
  $(".fadeInObj").each(function(){
    let elemPos = $(this).offset().top-50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(scroll>=elemPos-windowHeight){
      $(this).addClass("fadeIn");
    } else{
      $(this).removeClass("fadeIn");
    }
  });
}
function fadeupAnime(){
  $(".fadeUpObj").each(function(){
    let elemPos = $(this).offset().top-50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(scroll>=elemPos-windowHeight){
      $(this).addClass("fadeUp");
    } else{
      $(this).removeClass("fadeUp");
    }
  });
}

// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){
    // 背景色が伸びて出現（左から右）
  $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    }else{
      $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
    }
  });
   // 文字列を囲う子要素
  $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }else{
      $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
    }
  });
}

$(window).scroll(function(){
  fadeInAnime();
  fadeupAnime();
  BgFadeAnime();
});
$(window).on('load', function(){
  fadeInAnime();
  fadeupAnime();
  BgFadeAnime();
});
