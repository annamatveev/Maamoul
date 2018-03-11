class LandingCtrl {
    constructor(AppConstants, $scope, $location, LocalStorage) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._LocalStorage = LocalStorage;

        this.identified = this._LocalStorage.hasKey('user');
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