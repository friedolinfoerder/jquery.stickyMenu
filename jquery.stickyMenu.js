(function($) {
    var defaultOptions = {
        className: 'sticky'
    };
    
    $.fn.stickyMenu = function(options) {
        options = options || {};
        options = $.extend({}, defaultOptions, options);
        
        var $window = $(window);
        return this.each(function() {
            var $sticky = null,
                $this = $(this),
                offsetTop = $this.offset().top;
            
            $window.scroll(function() {
                var scrollTop = $window.scrollTop();
                if (scrollTop > offsetTop) {
                    if(!$sticky) {
                        $this
                            .after(function() {
                                $sticky = $(this).clone().addClass(options.className);
                                return $sticky;
                            });
                    }                    
                } else if($sticky) {
                    $sticky.remove();
                    $sticky = null;
                }
            }.bind(this));
        });
    };
}(jQuery));
