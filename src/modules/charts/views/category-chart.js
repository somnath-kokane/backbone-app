define([
  'backbone',
  'text!charts/templates/category-chart.html',
  'flot/jquery.flot',
  'flot/jquery.flot.categories'
], function(Backbone, categoryChartTemplate){

  var CategoryChartView = Backbone.View.extend({
    initialize: initialize,
    render: render,
    renderChart: renderChart
  });

  return CategoryChartView;

  function initialize(){
    CategoryChartView.__super__.initialize.apply(this, arguments);
    this.compiledTemplate = _.template(categoryChartTemplate);
  }

  function render(locals){
    this.$el.html(this.compiledTemplate());
    this.renderChart(locals.data);
    return this;
  }

  function renderChart(data){
    _.defer(function(){
      console.log('data', data);
      var placeholder = self.$('.chart-placeholder');
      placeholder.css({height: '350px'})
      $.plot(placeholder, [ data ], {
        series: {
          bars: {
            show: true,
            barWidth: 0.6,
            align: "center"
          }
        },
        xaxis: {
          mode: "categories",
          tickLength: 0
        }
      });
    })
  }

})