class AppHeaderCtrl {
    constructor($location, $rootScope, AppConstants, LocalStorage) {
        'ngInject';

        this._$location = $location;
        this.appName = AppConstants.appName;
        this.currentUser = LocalStorage.get(AppConstants.localStorageUserKey);

        self = this;
        $rootScope.$on('login', function(event, data) {
            self.currentUser = data;
        });
    }

    navigateHome() {
        this._$location.path('/');
    }
}

export default AppHeaderCtrl;