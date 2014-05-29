
window.NUMBLOCKS = 4;

window.BlockView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    //_.bindAll(this, 'render');
    //this.model.bind('change', this.render);
  },
  render: function() {
    return app.views.block(this.model.attributes);
  }
});

window.CarouselView = Backbone.View.extend({
  el: '#carousel',
  collection: null,
  events: {
    'click .carousel-prev': 'prev',
    'click .carousel-next': 'next'
  },
  initialize: function(options) {
    app._carousel = this;
    if (options.el) this.el = options.el;
    api.getTemplate(options.carousel, function(tmpl){
      app._carousel.template = _.template(tmpl);
      api.getTemplate(options.block, function(tmpl){
        app.views.block = _.template(tmpl);
        app._carousel.fetch();
      });
    });
    _.bindAll(this);
  },
  map: function(){
    this.items = _.map(this.$('.carousel-blocks').hide(), function(i) { return i; });
    this.current = 0;
    $('.carousel-prev').addClass('disabled');
    $(this.items[this.current]).show();
  },
  fetch: function(){
    if (!this.collection) this.collection = new Blocks();
    this.collection.fetch(function(){
      app._carousel.render();
    });
  },
  render: function() {
    var k = this.collection.models.length, pack = []; 
    _.each(this.collection.models,function(block) {
      if (pack.length===NUMBLOCKS) {
        $(app._carousel.el).append(app._carousel.template({ pack: pack.slice(0) }));
        pack = [];
      } else pack.push(new BlockView(block).render());
      if (--k===0) {
        if (pack.length) $(app._carousel.el).append(app._carousel.template({ pack: pack }));
        app._carousel.map();
      }
    });
    return this;
  },
  prev: function() {
    this.showButtons();
    if (this.current < 1) {
      $('.carousel-prev').addClass('disabled');
    } else $(this.items[this.current]).fadeOut(function() {
      $(this.items[--this.current]).fadeIn();
      if (this.current < 1)
        $('.carousel-prev').addClass('disabled');
    }.bind(this));
  },
  next: function() {
    this.showButtons();
    if (this.current > this.items.length-2) {
      $('.carousel-next').addClass('disabled');
    } else $(this.items[this.current]).fadeOut(function() {
      $(this.items[++this.current]).fadeIn();
      if (this.current > this.items.length-2)
        $('.carousel-next').addClass('disabled');
    }.bind(this));
  },
  showButtons: function(){
    $('.carousel-next').removeClass('disabled');
    $('.carousel-prev').removeClass('disabled');
  }
});