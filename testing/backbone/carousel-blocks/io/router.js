window.Router = Backbone.Router.extend({
	routes: {
		'': 'index'
	},
	index: function(){
		if (!app.views.blocks) app.views.blocks = new Blocks();
		//app.views.carousel = new Carousel({el: '#carousel'}).render();
	}
});