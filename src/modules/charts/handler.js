define([
  'backbone',
  'app/view',
  'charts/views/pie-chart',
  'charts/views/category-chart'
], function(Backbone, appView, PieChartView, CategoryChartView){

  function ChartsHandler(){
    //
  }

  _.extend(ChartsHandler.prototype, Backbone.Events, {
    pieChart: pieChart,
    categoryChart: categoryChart
  });

  return new ChartsHandler;

  function pieChart(){
    var data = [],
      series = Math.floor(Math.random() * 1) + 3;

    for (var i = 0; i < series; i++) {
      data[i] = {
        label: "Series" + (i + 1),
        data: Math.floor(Math.random() * 10) + 1
      }
    }

    var locals = {
      data: data
    };

    var view = new PieChartView();
    appView.renderView(view, locals);
  }

  function categoryChart(){
    var data = [ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9] ];
    var view = new CategoryChartView();
    appView.renderView(view, {data: data});
  }

})