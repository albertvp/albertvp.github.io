window.Block = Backbone.Model.extend({
	idAttribute: 'title',
	attributes: {
		title: '',
		description: '',
		images: []
	}
});

window.Blocks = Backbone.Collection.extend({
  model: Block,
  skip: -1,
  url: function() {
    return '/data/'+(++this.skip)+'.json';
  },
  fetch: function(ok) {
    return Backbone.Collection.prototype.fetch.call(this, {
    	success: ok,
    	error: app.error
    });
  }
});
