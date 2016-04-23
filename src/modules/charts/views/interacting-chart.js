define([
  'backbone',
  'text!charts/templates/interacting-chart.html',
  'flot/jquery.flot'
], function(Backbone, interactingChartTemplate){

  var InteractingChartView = Backbone.View.extend({
    initialize: initialize,
    render: render,
    renderChart: renderChart
  });

  return InteractingChartView;

  function initialize(){
    InteractingChartView.__super__.initialize.apply(this, arguments);
    this.compiledTemplate = _.template(interactingChartTemplate);
  }

  function render(locals){
    this.$el.html(this.compiledTemplate());
    this.renderChart(locals.data);
    return this;
  }

  function renderChart(data){
    var self = this;
    _.defer(function(){
      var placeholder = self.$('.chart-placeholder');
      placeholder.css({height: '400px'})
      $.plot(placeholder, data, {
        series: {
          lines: {
            show: true
          },
          points: {
            show: true
          }
        },
        grid: {
          hoverable: true,
          clickable: true
        },
        yaxis: {
          min: -1.2,
          max: 1.2
        }
      });
    });
  }

})