class PhotoCtrl {
    constructor($location, AppConstants, Photos, LocalStorage) {
        'ngInject';

        this._$location = $location;
        this._Photos = Photos;
        this.loggedInUser = LocalStorage.get(AppConstants.localStorageUserKey);
    }

    skipUpload() {
        this._$location.path('/game');
    }
}

export default PhotoCtrl;
