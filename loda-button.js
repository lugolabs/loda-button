(function ($) {

		var methods = {
			start: function () {
				var loda = this.data('loda-button-data');
				if (loda) loda.start();
			},

			stop: function () {
				var loda = this.data('loda-button-data');
				if (loda) loda.stop();
			}
		},

		LodaButton = function(element) {
			this._element  = element;
			this._jelement = $(element);
			if (this._jelement.data('loda-button-data')) return;

			this._jelement.data('loda-button-data', this);
			this._init();
		};

	LodaButton.prototype = {
		_init: function() {

		},

		start: function() {
			this._jelement.addClass('loda-btn-loading');
		},

		stop: function() {
			this._jelement.removeClass('loda-btn-loading');
		}
	};


	$.fn.lodaButton = function(options) {

		if (methods[options]) {
			return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof methods === 'object' || !methods) {
			return this.each(function() {
				new LodaButton(this);
				return this;
			});
		} else {
			$.error( 'Method ' +  method + ' does not exist on lodaButton' );
		} 

			
	};

}(jQuery));