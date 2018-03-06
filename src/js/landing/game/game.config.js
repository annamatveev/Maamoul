function IdentificationConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.game', {
            url: '/game',
            controller: 'GameCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'landing/game/game.html',
            title: 'Start playin',
            resolve: {
                guess: function(Guess, LocalStorage) {
                    const user = LocalStorage.get('user');
                    return Guess.nextGuess(user.id);
                }
            }
        });

};

export default IdentificationConfig;
