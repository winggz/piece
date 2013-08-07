require.config({
	paths: {
		//plugin
		text: 'src/vendor/requirejs-text/js/text',
		domReady: 'src/vendor/requirejs-domready/js/domready',
		i18n: 'src/vendor/requirejs-i18n/js/i18n',
		//lib
		zepto: 'src/vendor/zepto/js/zepto',
		underscore: 'src/vendor/underscore/js/underscore',
		backbone: 'src/vendor/backbone/js/backbone',
		fastclick: 'src/vendor/fastclick/js/fastclick',

		//path
		vendor: 'src/vendor',
		core: 'src/core'
	},
	shim: {
		backbone: {
			deps: ['underscore'],
			exports: 'Backbone'
		},
		zepto: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		fastclick: {
			exports: 'FastClick'
		}
	}
});