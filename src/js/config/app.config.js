function AppConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'landing/layout/main-view.html'
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
