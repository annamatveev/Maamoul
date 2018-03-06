class GuessCtrl {

    constructor($timeout, $state, AppConstants, Guess, LocalStorage) {
        'ngInject';

        this._$timeout = $timeout;
        this._$state = $state;
        this._AppConstants = AppConstants;
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
            self._$timeout(self._$state.reload, self._AppConstants.guessInterval);

        })
    }
}

export default GuessCtrl;