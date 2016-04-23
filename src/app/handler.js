define([
  'backbone',
  'app/view',
  'app/views/home'
], function(Backbone, appView, HomeView){

  function AppHandler(){
    //
  }

  _.extend(AppHandler.prototype, Backbone.Events, {
    home: home
  });

  return new AppHandler;

  function home(){
    console.log('app:index');
    var view = new HomeView();
    appView.renderView(view);
  }

})