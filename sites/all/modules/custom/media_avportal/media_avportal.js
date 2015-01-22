/**
 * @file Jquery module file.
 */
(function($) {
  Drupal.behaviors.media_avportal = {
    attach : function(context, settings) {

      $('div.language-switcher li a').click(
        function() {

          $(this).parents('ul').find('a.current').removeClass('current');
          $(this).addClass('current');
          var iframe = $(this).parents('div.language-switcher').siblings('p')
                .find('iframe');
          var lng = $(this).text().replace('+', ' ');
          var new_src = iframe.attr('src').replace(
                new RegExp("videolang=(.+)", "g"), 'videolang=' + lng);
          iframe.attr('src', new_src);
        })
    }
  }
})(jQuery);