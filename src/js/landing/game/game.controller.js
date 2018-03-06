class GameCtrl {

    constructor($q, $scope, $location, $resolve, Users, LocalStorage) {
        'ngInject';

        this._$q = $q;
        this._LocalStorage = LocalStorage;
        this._$scope = $scope;
        this._$location = $location;

    }
}

export default GameCtrl;