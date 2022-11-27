
$(function () {
  //TOPのスワイパー
  let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false, // 自動再生を継続させる
    },
    speed: 2000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  new Swiper('.swiper-container', swipeOption);
});


// ページトップへ戻る
$(window).scroll(function () {
  var now = $(window).scrollTop();
  if (now > 200) {
    $('.pagetop').fadeIn("slow");
  } else {
    $('.pagetop').fadeOut('slow');
  }
});

// ハンバーガーメニュー
$(function () {
  $('#toggle').on('click', function () {
    $('body').toggleClass('is-open');
    $('#main').toggleClass('overlay');
  });
  $(document).on('click', '.overlay', function () {
    $('body').removeClass('is-open');
    $('#main').removeClass('overlay');
  });
});

// $(function(){
//   $("nav").hide();
//   $(".js-btn").click(function(){//メニューボタンをクリックしたとき
//       $("nav").toggle(300);//0.3秒で表示したり非表示にしたりする
//       $('.header-container, .btn-line').toggleClass('open');
//   });
// });

// $(function () {
//   $('.js-btn').on('click', function () {
//     // js-btnクラスをクリックすると、
//     $(this).toggleClass("open");
//     $(".header, .drawer-bg, nav").slideToggle();
//     // $(".header, .drawer-bg, nav").toggle(300);
//     $('.btn-line').toggleClass('open');
//     // メニューとバーガーの線にopenクラスをつけ外しする
//   })
// });




// ーーーー
// メニューページのタブ
// ーーーー


$(function () {
  $(".l-menu-tabs").on('click', function () {
    // タブをクリックしたら発動
    $('.l-menu-box').removeClass('active');
    // 選択されていたl-menu-boxから activeクラスが外れる
    $($(this).attr('id')).addClass('active');
    // クリックされたl-menu-tabに activeクラスを付与
    $('.l-menu-tab').removeClass('active');
    // 選択されていた l-menu-tabから activeクラスを取り除く
    $(this).addClass('active');
    // クリックされた l-menu-tabに activeクラスを付与
  });

  // 以降はアニメーション

  // $('.l-menu-tab').click(function() {
  //   $('.l-menu-box').css('display','none');
  //   //コンテンツを一旦非表示
  //   $($(this).attr('id')).fadeIn(500).addClass('active');
  //       //クリックしたタブに応じてコンテンツを表示
  //   });
});