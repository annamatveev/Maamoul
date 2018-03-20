function BoardConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.board', {
            url: '/board',
            controller: 'BoardCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'board/board.html',
            title: 'Hall Of Fame',
            resolve: {
                topGamers: function(Users) {
                    return Users.topGamers();
                },
                currentUser: function(Auth) {
                    return Auth.currentUser().then(function(user) {
                        return user;
                    });
                }
            }
        });

};

export default BoardConfig;
