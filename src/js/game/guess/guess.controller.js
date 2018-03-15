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
        let self = this;
        const currentUser = this._LocalStorage.get(this._AppConstants.localStorageUserKey)
        this._Guess.guessName(this.guess.photo_id, this.selectedUser, currentUser.id).then(function(correct) {
            self.answered = true;
            self.correctAnswer = Boolean(correct);
            self._$timeout(self._$state.reload, self._AppConstants.guessInterval);

        })
    }
}

export default GuessCtrl;