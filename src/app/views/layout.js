define([
  'backbone',
  'text!app/templates/layout.html'
], function(Backbone, layoutTemplate){

  var LayoutView = Backbone.View.extend({
    initialize: initialize,
    render: render
  });

  return LayoutView;

  function initialize(){
    LayoutView.__super__.initialize.apply(this, arguments);
    this.compiledTemplate = _.template(layoutTemplate || '');
  }

  function render(){
    this.$el.html(this.compiledTemplate());
    return this;
  }

})