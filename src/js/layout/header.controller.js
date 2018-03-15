class AppHeaderCtrl {
    constructor($location, $rootScope, AppConstants, LocalStorage) {
        'ngInject';

        this._$location = $location;
        this.appName = AppConstants.appName;
        this.currentUser = LocalStorage.get(AppConstants.localStorageUserKey);

        let self = this;
        $rootScope.$on('login', function(event, data) {
            self.currentUser = data;
        });

        $rootScope.$on('logout', function(event, data) {
            self.currentUser = null;
        });
    }

    navigateHome() {
        this._$location.path('/');
    }
}

export default AppHeaderCtrl;