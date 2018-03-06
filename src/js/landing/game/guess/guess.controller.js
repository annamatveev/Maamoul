class GuessCtrl {

    constructor($scope, $location, Guess, LocalStorage) {
        'ngInject';

        this._LocalStorage = LocalStorage;
        this._$scope = $scope;
        this._$location = $location;
        this._Guess = Guess;
        this._LocalStorage = LocalStorage;
    }

    guessName() {
        this._Guess.guessName(this.guess.photo_id, this.selectedUser).then(function(correct) {
            console.log(correct);
        })
    }
}

export default GuessCtrl;