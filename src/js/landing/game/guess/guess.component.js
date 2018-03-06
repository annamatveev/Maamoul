import GuessCtrl from './guess.controller'
let Guess = {
    bindings: {
        guess: '='
    },
    controller: GuessCtrl,
    templateUrl: 'landing/game/guess/guess.html'
};

export default Guess;
