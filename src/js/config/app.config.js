function AppConfig($stateProvider, $urlRouterProvider, AuthProvider) {
  'ngInject';

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/main-view.html'
  });

  $urlRouterProvider.otherwise('/notfound');

  AuthProvider.baseUrl('http://localhost:3000');

}

export default AppConfig;
