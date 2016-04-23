define([
  'backbone',
  'app/router',
  'charts/router'
], function(Backbone, AppRouter, ChartRouter){

  function App(){
    this.initialize.apply(this, arguments);
  }

  _.extend(App.prototype, Backbone.Events, {
    initialize: initialize
  });

  function initialize(){
    new AppRouter();
    new ChartRouter();
    Backbone.history.start();
  }

  return App;

})