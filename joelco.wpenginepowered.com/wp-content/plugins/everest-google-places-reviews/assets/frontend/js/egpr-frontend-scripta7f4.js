/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
    $(document).ready(function () {
        var egpr_reviews_slider = {};

        wow = new WOW();
        wow.init();

        $('.egpr-slider-type').each(function () {
            var id = $(this).attr('id');
            var speed = $(this).data('speed');
            var pause = $(this).data('pause');
            var pager_show = $(this).data('show-pager');
            var pager = $(this).data('pager'); //dot and pagination
            var showcontrols = $(this).data('show-controls');
            if (showcontrols == 1) {
                showcontrols = "true";
            } else {
                showcontrols = "false";
            }
            var controls = $(this).data('controls'); //arrow or text
            var autoplay = $(this).data('autoplay');
            if(autoplay == 1){
                autoplay = true;
            }else{
                autoplay = false;
            }
            var adaptiveheight = $(this).data('adaptiveheight');
            if(adaptiveheight == ''){
                var adHeight = true;
            }else{
                if(adaptiveheight == 1){
                 var adHeight = true;
                }else{
                 var adHeight = false;
                }
               
            }
            var mode = $(this).data('mode');
            if (controls == "arrow") {
                var next_text = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
                var pre_text = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
            } else {
                var next_text = 'Next<i class="fa fa-angle-right" aria-hidden="true"></i>';
                var pre_text = '<i class="fa fa-angle-left" aria-hidden="true"></i>Prev';
            }
                egpr_reviews_slider.id = $(this).bxSlider({
                    auto: autoplay,
                    controls: showcontrols,
                    pager: true,
                    speed: speed,
                    pause: pause,
                    mode: mode,
                    pagerType: 'full',
                    adaptiveHeight: adHeight,
                    nextText: next_text,
                    prevText: pre_text,
                    infiniteLoop: true,
                    touchEnabled:false // to resolve the issue on chrome for not clickable readmore button.
                });
        });

        
        $('.egpr-fcanvas-badge').on('click',function(){
           var separator = $(this);
           separator.closest('.egpr-freview-wrap').toggleClass('egpr-show-fcanvas');
             $('.egpr-fcanvas-review-wrapper').mCustomScrollbar({
                   theme: 'minimal-dark',
                   mouseWheel: {enable: true},
                   axis: 'y'
               });
        });

         $(document).keydown(function(e) {
                // Enable esc
                if (e.keyCode == 27) {
                   $('.egpr-fcanvas-badge').click();
                }
        });

        $(document).mouseup(function(e){
            var container = $(".egpr-floating-review-wrapper");

            // If the target of the click isn't the container
            if(!container.is(e.target) && container.has(e.target).length === 0){
                container.find('.egpr-freview-wrap').removeClass('egpr-show-fcanvas');
            }
         });
 
        /** Read More Excerpt Control **/
           $('.egpr-read-more').click(function () {
                $(this).closest('.egpr-small-description').slideUp(400);
                $(this).closest('.egpr-content-reviews-wrapper').find('.egpr-full-description').slideDown(400);
                $(this).parents().find('.bx-viewport').css('height','100%');
                return false;
            });

           /** Read less Excerpt Control **/
           $('.egpr-read-less').click(function () {
                $(this).closest('.egpr-full-description').slideUp(400);
                $(this).closest('.egpr-content-reviews-wrapper').find('.egpr-small-description').slideDown(400);
                return false;
            });

        
            $('.egpr-close-btn i').on('click',function(){
               $(this).closest('.egpr-freview-wrap').toggleClass('egpr-show-fcanvas');
            });
             
             /* compatibiltiy check for lazy sizes plugin */
             $('.egpr-user-review-avatar img').each(function(){
                 var img_src = $(this).attr('data-src');
                 if (typeof img_src !== 'undefined')
                 {
                   $(this).attr('src',img_src);
                 }
             });
             

    });//$(function () end
}(jQuery));


