class PhotoCtrl {
    constructor($location, Auth, AppConstants, Photos) {
        'ngInject';

        this._$location = $location;
        this._Photos = Photos;
    }
}

export default PhotoCtrl;
