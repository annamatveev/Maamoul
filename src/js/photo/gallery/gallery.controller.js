class GalleryCtrl {
    constructor(Photos, LocalStorage) {
        'ngInject';

        this._Photos = Photos;
        this.loggedInUser = LocalStorage.get(AppConstants.localStorageUserKey);
    }
}

export default GalleryCtrl;