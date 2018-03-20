import GuessCtrl from './guess.controller'
let Guess = {
    bindings: {
        guess: '<',
        currentUser: '<'
    },
    controller: GuessCtrl,
    templateUrl: 'game/guess/guess.html'
};

export default Guess;
