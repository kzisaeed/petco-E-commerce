// preloader start
setTimeout(function(){
    $('.preloader').fadeOut()
},1000)
// preloader end





// nav-part start
$(window).scroll(function(){
    if($(window).scrollTop() > 200){
        $(".menu").addClass("fixedmenu")
    }else{
        $(".menu").removeClass("fixedmenu")
    }
})

// nav-part end


// banner-part start
$(".banner-slider").slick({
    arrows:false,
    fade:true,
})
// banner-part end

// ccounter-part start
var od = document.querySelectorAll(".odometer")
var odArr = Array.from(od)
odArr.map(item=>{
    setTimeout(()=>{
        item.innerHTML = item.dataset.number
    },item.dataset.speed)
})

// ccounter-part end

// find-area start
$(".dropdown").click(function(){
    $(".drop").toggleClass('drop2')
})
// find-area end

// breed-part start
$('.breed-slider').slick({
    slidesToShow:2,
    nextArrow:"<button class='next'><img src='images/arrow.png'></button",
    prevArrow:"<button class='prev'><img src='images/arrow.png'></button",
})
// breed-part end

// history-part start
new VenoBox({
    selector: '.my-video-links',
});

$('.bottom-slider').slick({
    arrows:false,
    slidesToShow:6,
    autoplay:true,
})
// history-part end
// testimonial-part end

$('.testimonial-slider').slick({
    slidesToShow:2,
    dots:true,
    speed: 2000,
    arrows:false,
    slidesToScroll:2,
})

// testimonial-part end


$(window).scroll(function(){
    if($(window).scrollTop() > 200){
        $(".btm").fadeIn()
    }else{
        $(".btm").fadeOut()
    }
})

$(".btm").click(function(){
    $("html,body").animate({
        scrollTop:0
    },1000)
})

// adoption3
$('.adoption3-slider').slick({
    slidesToShow:1,
    arrows:false,
    autoplay:true,
})

$('.round-slider').slick({
    slidesToShow:4,
    nextArrow:"<button class='next'><img src='images/arrow-next.png'></button",
    prevArrow:"<button class='prev'><img src='images/arrow.png'></button",
})

$('.working-slider').slick({
    vertical: true,
    verticalSwiping: true,
    dots:true,
    arrows:false,
    autoplay:true,
    speed:1000,
})
// adoption3


// range
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
// range


// shop-details

$('.list1').click(function(){
    $('.wh1').toggleClass('active')
    $('.wh2').removeClass('active')
    $('.wh3').removeClass('active')
})
$('.list2').click(function(){
    $('.wh2').toggleClass('active')
    $('.wh1').removeClass('active')
    $('.wh3').removeClass('active')
})
$('.list3').click(function(){
    $('.wh3').toggleClass('active')
    $('.wh1').removeClass('active')
    $('.wh2').removeClass('active')
})


$('.list2').click(function(){
    $('.wh1').removeClass('whh1')
})
$('.list3').click(function(){
    $('.wh1').removeClass('whh1')
})





$('.c1').click(function(){
    $('.cc1').toggleClass('active1')
    $('.cc2').removeClass('active1')
    $('.cc3').removeClass('active1')
    $('.cc4').removeClass('active1')
})
$('.c2').click(function(){
    $('.cc2').toggleClass('active1')
    $('.cc1').removeClass('active1')
    $('.cc3').removeClass('active1')
    $('.cc4').removeClass('active1')
})
$('.c3').click(function(){
    $('.cc3').toggleClass('active1')
    $('.cc1').removeClass('active1')
    $('.cc2').removeClass('active1')
    $('.cc4').removeClass('active1')
})
$('.c4').click(function(){
    $('.cc4').toggleClass('active1')
    $('.cc1').removeClass('active1')
    $('.cc2').removeClass('active1')
    $('.cc3').removeClass('active1')
})




$('.c2').click(function(){
    $('.cc1').removeClass('ccc1')
})
$('.c3').click(function(){
    $('.cc1').removeClass('ccc1')
})
$('.c4').click(function(){
    $('.cc1').removeClass('ccc1')
})
// shop-details