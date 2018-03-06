class PhotoCtrl {
    constructor(AppConstants, Photos, LocalStorage) {
        'ngInject';

        this._Photos = Photos;
        this.loggedInUser = LocalStorage.get(AppConstants.localStorageUserKey);
    }
}

export default PhotoCtrl;
