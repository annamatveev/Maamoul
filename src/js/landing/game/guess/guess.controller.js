class GuessCtrl {

    constructor($q, $scope, $location, $resolve, Users, LocalStorage) {
        'ngInject';

        this._$q = $q;
        this._LocalStorage = LocalStorage;
        this._$scope = $scope;
        this._$location = $location;

    }

    guessName() {
        console.log(this.guess.photo_id);
        console.log(this.selectedUser);
    }
}

export default GuessCtrl;