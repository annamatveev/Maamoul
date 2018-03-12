class UploadPhotoCtrl {
    constructor(AppConstants, Photos, LocalStorage) {
        'ngInject';

        this._Photos = Photos;
        this.loggedInUser = LocalStorage.get(AppConstants.localStorageUserKey);
    }

    uploadPhoto() {
        const url = this.uploadPhoto.url;
        this._Photos.uploadPhoto(this.loggedInUser, url).then(function() {
            // ??
        })
    }

}

export default UploadPhotoCtrl;
