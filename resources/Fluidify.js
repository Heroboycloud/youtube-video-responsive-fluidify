import { debounce } from './helpers';

export default class Fluidify {
    constructor(elem) {
        this.elem = elem;

        this.videoPlayer = $('iframe[src*="youtube.com"], \
        ' + 'iframe[src*="vimeo.com"], \
        ' + 'iframe[src*="wistia.com"], \
        ' + 'iframe[src*="kickstarter.com"]'
        );
        $ = jQuery;
    }

    setStyles() {
        const fluidWrap = '<style>' + 'iframe[src*="youtube.com"], \
        ' + 'iframe[src*="vimeo.com"], \
        ' + 'iframe[src*="wistia.com"], \
        ' + 'iframe[src*="kickstarter.com"] { \
            width: 100%; \
            height: 100%; \
        } \
        </style>';

        $('body').prepend(fluidWrap);
        
        this.videoPlayer.wrap('<div class="fluidify-wrapper">');
		this.videoPlayer.each(function() {
            $(this).css({
                'width': '100%'
            });
        });
    }


    // Determine the size of the video player wrapper
    setSize() {
        let video = {};
        video.ratio = 0.5625, //16x9 aspect ratio
        video.width = $('.fluidify-wrapper').width(),
        video.height = video.ratio * video.width,
            
        // change the size of the video based on the ratio
        this.videoPlayer.css({
            'width': video.width,
            'height': video.height
        });
    }

    // Make the video player fluid/responsive
    makeFluid() {
        let fluidifyVideo = debounce(() => {
			this.setSize();
		}, 5);
		
		$(window).on('resize', fluidifyVideo);
    }

    init() {
        this.setStyles();
        this.setSize();
        this.makeFluid();
    }
}