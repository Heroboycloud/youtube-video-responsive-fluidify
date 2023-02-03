import Fluidify from './Fluidify';

(function($) {
	$.fn.fluidify = function() {
        const elem = this;
        new Fluidify(this).init();
    }
})(jQuery);

jQuery('body').fluidify();