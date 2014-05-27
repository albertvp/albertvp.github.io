
Carousel = Backbone.View.extend({
  events: {
    'click .carousel-prev': 'prev',
    'click .carousel-next': 'next'
  },
  initialize: function(options) {
    _.bindAll(this);
    this.items = _.map(this.$('.carousel-item').hide(), function(i) { return i; });
    this.current = 0;
  },
  render: function() {
    $(this.items[this.current]).show();
    return this;
  },
  prev: function() {
    $(this.items[this.current]).fadeOut(function() {
      this.current = this.current - 1;
      if (this.current === -1) { this.current = this.items.length - 1 }
      $(this.items[this.current]).fadeIn();
    }.bind(this));
  },
  next: function() {
    $(this.items[this.current]).fadeOut(function() {
      this.current = this.current + 1;
      if (this.current === this.items.length) { this.current = 0 }
      $(this.items[this.current]).fadeIn();
    }.bind(this));
  }
});