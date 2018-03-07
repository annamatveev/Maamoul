class AppHeaderCtrl {
  constructor($location, AppConstants, LocalStorage) {
    'ngInject';

    this._$location = $location;
    this.appName = AppConstants.appName;
    this.currentUser = LocalStorage.get(AppConstants.localStorageUserKey);
  }

  navigateToBoard() {
    this._$location.path('/board');
  }

  navigateHome() {
        this._$location.path('/');
    }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'landing/layout/header.html'
};

export default AppHeader;
