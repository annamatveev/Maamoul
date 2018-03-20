function AppRun($rootScope, $state, Auth, AppConstants) {
  'ngInject';

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.setPageTitle(toState.title);

      if (!Auth.isAuthenticated()) { // Redirect to login
          $state.go('app.identification');
      }
      else if (toState.url === '/identification' || toState.url === '/') { // Prevent logged in users from getting to login page
          $state.go('app.photo');
      }
  });

  // Helper method for setting the page's title
  $rootScope.setPageTitle = (title) => {
    $rootScope.pageTitle = '';
    if (title) {
      $rootScope.pageTitle += title;
      $rootScope.pageTitle += ' \u2014 ';
    }
    $rootScope.pageTitle += AppConstants.appName;
  };
}

export default AppRun;
