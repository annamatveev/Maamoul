class UploadPhotoCtrl {
    constructor($scope, $rootScope, Auth, AppConstants, Photos) {
        'ngInject';

        this._Photos = Photos;
        this._$rootScope = $rootScope;
        this._$scope = $scope;
    }

    uploadPhoto() {
        const url = this.uploadPhoto.url;

        let self = this;
        this._Photos.uploadPhoto(this.currentUser, url)
            .then(res => res.data)
            .then((data) => {
                self._$rootScope.$emit('upload', {id: data.id, url});
                self.uploadPhoto.url = null;
                self._$scope.uploadForm.$setUntouched();
            });

    }

}

export default UploadPhotoCtrl;
