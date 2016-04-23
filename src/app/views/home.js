define([
  'backbone',
  'text!app/templates/home.html'
], function(Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    initialize: initialize,
    render: render
  });

  return HomeView;

  function initialize(){
    HomeView.__super__.initialize.apply(this, arguments);
    this.compiledTemplate = _.template(homeTemplate);
  }

  function render(){
    this.$el.html(this.compiledTemplate());
    return this;
  }

})