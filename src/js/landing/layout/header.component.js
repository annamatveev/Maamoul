class AppHeaderCtrl {
  constructor(AppConstants, LocalStorage) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.currentUser = LocalStorage.get(AppConstants.localStorageUserKey);
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'landing/layout/header.html'
};

export default AppHeader;
