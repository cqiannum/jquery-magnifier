/*
 * jquery-magnifier
 * https://github.com/lenovo/jquery-magnifier
 *
 * Copyright (c) 2013 cqiannum
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.jquery_magnifier = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.jquery_magnifier = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jquery_magnifier.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.jquery_magnifier.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].jquery_magnifier = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
