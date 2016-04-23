define([
  'backbone',
  'app/router'
], function(Backbone, AppRouter){

  function App(){
    this.initialize.apply(this, arguments);
  }

  _.extend(App.prototype, Backbone.Events, {
    initialize: initialize
  });

  function initialize(){
    new AppRouter();
    Backbone.history.start();
  }

  return App;

})