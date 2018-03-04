class LandingCtrl {
    constructor(Users, AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;

    }
}

export default LandingCtrl;