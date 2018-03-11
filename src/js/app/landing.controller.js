class LandingCtrl {
    constructor(AppConstants, $location, LocalStorage) {
        'ngInject';

        this._LocalStorage = LocalStorage;

        this.identified = this._LocalStorage.hasKey(AppConstants.localStorageUserKey);
        this.hasPhoto = false;

        if (this.identified) {
            $location.path('/photo');
        }
        else {
            $location.path('/identification');
        }
    }
}

export default LandingCtrl;