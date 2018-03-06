class GuessCtrl {

    constructor($scope, $location, Guess, LocalStorage) {
        'ngInject';

        this._LocalStorage = LocalStorage;
        this._$scope = $scope;
        this._$location = $location;
        this._Guess = Guess;
        this._LocalStorage = LocalStorage;
        this.answered = false;
        this.correctAnswer = false;
    }

    guessName() {
        self = this;
        this._Guess.guessName(this.guess.photo_id, this.selectedUser).then(function(correct) {
            self.answered = true;
            self.correctAnswer = Boolean(correct);

        })
    }
}

export default GuessCtrl;