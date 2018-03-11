function AppConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/main-view.html'
  });

  $urlRouterProvider.otherwise('/notfound');

}

export default AppConfig;
