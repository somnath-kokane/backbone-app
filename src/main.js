requirejs.config({
  baseUrl: '../',
  map: {
    '*': {
      'common': 'src/common',
      'app': 'src/app',
      'auth': 'src/modules/auth'
    }
  },
  paths: {
    jquery: 'bower_components/jquery/dist/jquery.min',
    bootstrap: 'bower_components/bootstrap-css/js/bootstrap.min',
    underscore: 'bower_components/underscore/underscore-min',
    backbone: 'bower_components/backbone/backbone-min',
    text: 'bower_components/text/text'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  },
  priority: ['jquery']
});

requirejs([
  'app/app',
  'common'
], function(App){
  new App();
})