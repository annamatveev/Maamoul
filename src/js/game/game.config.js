function IdentificationConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.game', {
            url: '/game',
            controller: 'GameCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'game/game.html',
            title: 'Start playin',
            resolve: {
                currentUser: function(Auth) {
                    return Auth.currentUser();
                },
                guess: function(Auth, Guess) {
                    return Auth.currentUser().then((user) => Guess.generate(user.id));
                }

            }
        });

};

export default IdentificationConfig;
