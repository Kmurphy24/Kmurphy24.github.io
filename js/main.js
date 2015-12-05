$(document).ready(function(){
  var InfiniteRotator =
    {
        init: function()
        {
            var initialFadeIn = 100;

            var itemInterval = 4000;

            var fadeTime = 1500;

            var numberOfItems = $('.rotate').length;

            var currentItem = 0;

            $('.rotate').eq(currentItem).fadeIn(initialFadeIn);

            var infiniteLoop = setInterval(function(){
                $('.rotate').eq(currentItem).fadeOut(fadeTime);
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotate').eq(currentItem).fadeIn(fadeTime);
            }, itemInterval);
        }
    };

    InfiniteRotator.init();

$("#beer").on("click", expandBeer);
$("#wine").on("click", expandWine);
$("#liquor").on("click", expandLiquor);

});

function expandBeer(){
    if($(".beerlist").hasClass("open"))
        $(".beerlist").slideUp(400).removeClass("open");
    else
        $(".beerlist").slideDown(400).addClass("open");
};

function expandWine(){
  if($(".winelist").hasClass("open"))
        $(".winelist").slideUp(400).removeClass("open");
    else
        $(".winelist").slideDown(400).addClass("open");
};

function expandLiquor(){
  if($(".liquorlist").hasClass("open"))
        $(".liquorlist").slideUp(400).removeClass("open");
    else
        $(".liquorlist").slideDown(400).addClass("open");s
};
