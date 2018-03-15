class UploadPhotoCtrl {
    constructor($rootScope, AppConstants, Photos, LocalStorage) {
        'ngInject';

        this._Photos = Photos;
        this.loggedInUser = LocalStorage.get(AppConstants.localStorageUserKey);
        this._$rootScope = $rootScope;
    }

    uploadPhoto() {
        const url = this.uploadPhoto.url;

        let self = this;
        this._Photos.uploadPhoto(this.loggedInUser, url)
            .then(res => res.data)
            .then(function(data) {
                self._$rootScope.$emit('upload', {id: data.id, url});
            });

    }

}

export default UploadPhotoCtrl;
