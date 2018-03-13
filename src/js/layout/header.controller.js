class AppHeaderCtrl {
    constructor($location, AppConstants, LocalStorage) {
        'ngInject';

        this._$location = $location;
        this.appName = AppConstants.appName;
        this.currentUser = LocalStorage.get(AppConstants.localStorageUserKey);
    }

    navigateHome() {
        this._$location.path('/');
    }
}