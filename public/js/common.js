//==========================================================================
//common.js
//==========================================================================

//userAgent
//---------------------------------------------------------
function userAgent() {
  const ua = navigator.userAgent;
  if (ua.indexOf('iPhone') != -1 || ua.indexOf('iPod') != -1 || ua.indexOf('Android') != -1 && ua.indexOf('Mobile') != -1) {
    //sp
    $('body').addClass('is-view-sp');
  } else if (ua.indexOf('iPad') != -1 || ua.indexOf('Android') != -1) {
    //tab
    $('body').addClass('is-view-tab');
  } else {
    // pc
    $('body').addClass('is-view-pc');
  }
}


//userAgentIE
//---------------------------------------------------------
function userAgentIE() {
  const ua = window.navigator.userAgent.toLowerCase();
  const uaVersion = window.navigator.appVersion.toLowerCase();
  //ie
  if (ua.indexOf('msie') != -1 || ua.indexOf('trident') !== -1) {
    $('body').addClass('is-view-ie');
  }
}


//sprite svg
//---------------------------------------------------------
function spriteSvg() {
  $.ajax({
    type: 'get',
    url: './public/images/sprite.svg'
  }).done(function(data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });
}


//menu
//---------------------------------------------------------
function menu() {
  const $menuTrriger = $('.js-menu-trigger');
  const $menuTarget = $('.js-menu-target');
  const $menuBg = $('.js-menu-bg');
  const $menuClose = $('.js-menu-close-trigger');
  let scrollPosition;
  //menuTrriger
  $menuTrriger.on('click', function(){
    if(!$(this).hasClass('is-open')){
      $menuTrriger.addClass('is-open');
      $menuTarget.addClass('is-open');
      $menuBg.addClass('is-open');
      scrollPosition = $(window).scrollTop();
      $('body').addClass('is-locked').css({ 'top': -scrollPosition });
    } else {
      menuClose();
    }
  });
  //menuClose
  $menuClose.on('click', function(){
    menuClose();
  });
  //menuClose
  function menuClose () {
    $menuTrriger.removeClass('is-open');
    $menuTarget.removeClass('is-open');
    $menuBg.removeClass('is-open');
    $('body').removeClass('is-locked').css({ 'top': '' });
    window.scrollTo(0, scrollPosition);
  }
}


//drop down nav
//---------------------------------------------------------
function dropNav() {
  $('.js-drop-nav').hover(function() {
    $(this).toggleClass('is-drop-nav-active');
  });
}


//pagetop
//---------------------------------------------------------
function pagetop() {
  const pagetopTrigger = $('.js-pagetop');
  $(window).on('scroll', function() {
    scrollHeight = $(document).height();
    triggerHeight = pagetopTrigger.height();
    scrollPosition = window.innerHeight + $(window).scrollTop() + triggerHeight;
    footHeight = $('.l-footer').height();
    if (scrollHeight - scrollPosition  <= footHeight) {
      pagetopTrigger.removeClass('is-fixed');
    } else {
      pagetopTrigger.addClass('is-fixed');
    }
  });
  pagetopTrigger.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
}


// anker
// ---------------------------------------------------
function anker() {
  const headerHeight = 60;
  const urlHash = location.hash;
  if(urlHash) {
    $('html, body').stop().scrollTop(0);
    setTimeout(function(){
      let target = $(urlHash);
      let position = target.offset().top - headerHeight -20;
      $('html, body').stop().animate({scrollTop: position}, 10);
    }, 100);
  }
  $('.js-anker[href^="#"]').click(function () {
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - headerHeight - 20;
    $('html, body').animate({
      scrollTop: position
    },500);
    return false;
  });
}


//animation
//---------------------------------------------------------
function scrollAnimation() {
  const animationTarget = $('.js-animate');
  animationTarget.addClass('is-animate');
  $(window).on('load scroll', function(){
    animationTarget.each(function(){
      let targetPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > targetPos - windowHeight + 100){
        $(this).addClass('is-animated');
      }
    });
  });
}


//accordion
//---------------------------------------------------------
function accordion() {
  $('.js-accordion').on('click', function() {
    $(this).toggleClass('is-active').next().stop().slideToggle(300);
    return false;
  });
}

//lang
//---------------------------------------------------------
function lang() {
  langState();
  $('.js-lang-ja').on('click', function() {
    langState('ja');
  });
  $('.js-lang-vn').on('click', function() {
    langState('vn');
  });
  function langState( $langState ){
    if($langState == undefined){
      var $langState = jQuery.cookie('langState');
      if($langState == undefined){
        var $langState = 'ja';
      }
    }
    jQuery.cookie('langState', $langState, {expires: 100, path:'/'});
    $('.l-page').attr('data-lang-state', $langState);
  }
}



//init
//---------------------------------------------------------
$(function(){
  userAgent();
  userAgentIE();
  spriteSvg();
  menu();
  dropNav();
  pagetop();
  anker();
  scrollAnimation();
  accordion();
  lang();
});








