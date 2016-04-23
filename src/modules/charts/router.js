define([
  'backbone',
  'charts/handler'
], function(backbone, chartsHandler){

  var ChartsRouter = Backbone.Router.extend({
    initialize: initialize
  });

  return ChartsRouter;

  function initialize(){
    ChartsRouter.__super__.initialize.apply(this, arguments);
    this.route('charts/pie', chartsHandler.pieChart);
    this.route('charts/category', chartsHandler.categoryChart);
    this.route('charts/interacting', chartsHandler.interactingChart);
  }

})