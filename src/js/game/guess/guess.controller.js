class GuessCtrl {

    constructor($timeout, $state, Auth, AppConstants, Guess) {
        'ngInject';

        this._$timeout = $timeout;
        this._$state = $state;
        this._AppConstants = AppConstants;
        this._Guess = Guess;

        this.answered = false;
        this.isCorrect = false;
    }

    guessName() {
        let self = this;

        this._Guess.guessName(this.guess.photo_id, this.selectedUser, this.currentUser.id).then(function(correct) {
            self.answered = true;
            self.isCorrect = Boolean(correct);
            self._$timeout(self._$state.reload, self._AppConstants.guessInterval);

        })
    }
}

export default GuessCtrl;