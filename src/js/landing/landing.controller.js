class LandingCtrl {
    constructor(AppConstants, $scope, LocalStorage) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;
        this._LocalStorage = LocalStorage;
        this.selectedItemChange = this.selectedItemChange.bind(this);

    }

    selectedItemChange(item) {
        this._LocalStorage.set('user', item);
    }
}

export default LandingCtrl;