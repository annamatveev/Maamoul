function AppConfig($stateProvider, $urlRouterProvider, $httpProvider, AuthProvider) {
  'ngInject';

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/main-view.html'
  });

  $httpProvider.defaults.withCredentials = true;
  AuthProvider.baseUrl('http://localhost:3000');

  $urlRouterProvider.when('/','/identification');
  $urlRouterProvider.otherwise('/notfound');


}

export default AppConfig;
