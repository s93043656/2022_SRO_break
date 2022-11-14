var p1scene = document.getElementById('p1');
var parallaxInstance = new Parallax(p1scene, {
  relativeInput: true,
  scalarX: 4,
  scalarY: 3,
  limitX: true,
});
$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.secblock');
    elems.each(function(index){
        var elemTop   = $(this).offset().top;
        var elemBottom  = elemTop + $(this).height();
        var id    = $(this).attr('id');
        var navElem = $('ul.menubox li[id="#' + id+ '"]');
        navElem.removeClass( 'active' )
        if(currentTop >= elemTop && currentTop <= elemBottom){
        navElem.addClass('active');
        }
    })
});

var currentTop = $(window).scrollTop();
var elems = $('.secblock');
elems.each(function(index){
    var elemTop   = $(this).offset().top;
    var elemBottom  = elemTop + $(this).height();
    var id    = $(this).attr('id');
    var navElem = $('ul.menubox li[id="#' + id+ '"]');
    navElem.removeClass( 'active' )
    if(currentTop >= elemTop && currentTop <= elemBottom){
        navElem.addClass('active');
    }
})

$(document).ready(function(){
    $('.menubtn01').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec01-block').offset().top}, 500);
    });
    $('.menubtn02').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec02-block').offset().top}, 500);
    });

    $('.menubtn03').click(function(){ 
        $('html,body').animate({scrollTop:$('.sec03-block').offset().top}, 500);
    });
});

// tabbox
$(function(){
    var _showTab = 0;
    $('.tabarea').each(function(){
        var $tab = $(this);
        var $defaultLi = $('ul.tab-title li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();

        $('ul.tab-title li', $tab).click(function() {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        })
    });
});

$(document).scroll(function() {
    var topy = $(this).scrollTop();
    if (topy > 400) {
        $('.slogo , .topbar_top').addClass('appear');
    } else {
        $('.slogo , .topbar_top').removeClass('appear');
    }
});

particlesJS("particles-js", {"particles":{"number":{"value":101,"density":{"enable":true,"value_area":561.194221302933}},"color":{"value":"#ff7f4a"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":10,"height":20}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":320.6824121731046,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":12,"direction":"top","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":0,"rotateY":5371.430403899501}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
