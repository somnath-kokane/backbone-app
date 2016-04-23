define([
  'backbone',
  'app/views/layout',
], function(Backbone, LayoutView){

  var AppView = Backbone.View.extend({
    initialize: initialize,
    renderApp: renderApp,
    renderView: renderView
  });

  var currentView;

  return new AppView;

  function initialize(){
    this.renderApp();
  }

  function renderApp(){
    this.layout = new LayoutView({el: 'body'});
    this.layout.render();
    return this;
  }

  function renderView(view, locals){
    locals = locals || {};
    try {
      if(currentView){
        currentView.remove();
        currentView = null;
      }
      currentView = view;
      currentView.render(locals);
      this.layout.$('#main-view').html(currentView.$el);
    } catch(err){
      console.error('Error:', err);
      currentView = null;
    }
  }

})