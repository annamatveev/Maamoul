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
                topGamers: function(Board) {
                    return Board.topGamers();
                }
            }
        });

};

export default BoardConfig;
