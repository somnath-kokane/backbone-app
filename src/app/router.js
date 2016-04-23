define([
  'backbone',
  'app/handler'
], function(Backbone, appHandler){
  
  var AppRouter = Backbone.Router.extend({
    initialize: initialize
  });

  return AppRouter;

  function initialize(){
    this.route('', appHandler.home);
    /*this.route('contact', handler.contact.list);
    this.route('contact/:id/details', handler.contact.details);
    this.route('contact/:id/edit', handler.contact.edit);
    this.route('contact/:id/delete', handler.contact.delete);*/
  }

})