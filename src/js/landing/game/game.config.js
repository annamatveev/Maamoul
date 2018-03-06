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
                guess: function(Users) {
                    return Users.getAllNames();
                }
            }
        });

};

export default IdentificationConfig;
