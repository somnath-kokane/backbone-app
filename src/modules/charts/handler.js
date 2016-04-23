define([
  'backbone',
  'app/view',
  'charts/views/pie-chart',
  'charts/views/category-chart',
  'charts/views/interacting-chart'
], function(Backbone, appView, 
  PieChartView, CategoryChartView, InteractingChartView){

  function ChartsHandler(){
    //
  }

  _.extend(ChartsHandler.prototype, Backbone.Events, {
    pieChart: pieChart,
    categoryChart: categoryChart,
    interactingChart: interactingChart
  });

  return new ChartsHandler;

  function pieChart(){
    var data = [], series = Math.floor(Math.random() * 1) + 3;
    for (var i = 0; i < series; i++) {
      data[i] = {
        label: "Series" + (i + 1),
        data: Math.floor(Math.random() * 10) + 1
      }
    }
    var view = new PieChartView();
    appView.renderView(view, {data: data});
  }

  function categoryChart(){
    var data = {};
    data.months = [ 
      ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9],
      ["July", 10], ["Augest", 8], ["September", 4], ["October", 13], ["Novembar", 17], ["December", 9]
    ];
    data.weeks = [ ["Sun", 10], ["Mon", 8], ["Tue", 4], ["Wed", 13], ["Thur", 17], ["Fri", 9], ["Sat", 10] ];
    var view = new CategoryChartView();
    appView.renderView(view, {data: data});
  }

  function interactingChart(){
    var sin = [],cos = [], data;
    for (var i = 0; i < 14; i += 0.5) {
      sin.push([i, Math.sin(i)]);
      cos.push([i, Math.cos(i)]);
    }
    data = [
      { data: sin, label: "sin(x)"},
      { data: cos, label: "cos(x)"}
    ];
    var view = new InteractingChartView();
    appView.renderView(view, {data: data});
  }

})