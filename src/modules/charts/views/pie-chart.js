define([
  'jquery',
  'backbone',
  'text!charts/templates/pie-chart.html',
  'flot/jquery.flot',
  'flot/jquery.flot.pie'
], function($, Backbone, chartsTemplate){

  var PieChartView = Backbone.View.extend({
    initialize: initialize,
    render: render,
    renderChart: renderChart
  });

  return PieChartView;

  function initialize(){
    this.compiledTemplate = _.template(chartsTemplate);
  }

  function render(locals){
    var data = locals.data || [];
    this.$el.html(this.compiledTemplate());
    _.each([data, data, data], this.renderChart);
    return this;
  }

  function renderChart(data, index){
    var self = this;
    _.delay(function(){
      var placeholder = self.$('.pie-placeholder'+index);
      placeholder.css({height: '350px', width: '250px'})
      $.plot(placeholder, data, {
        series: {
          pie: {
            innerRadius: 0.5,
            show: true
          }
        }
      });
    }, 10);
  }

});

