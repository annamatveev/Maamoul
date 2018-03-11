function IdentificationConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.identification', {
            url: '/identification',
            controller: 'IdentificationCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'identification/identification.html',
            title: 'Who are you?',
            resolve: {
                users: function(Users) {
                    return Users.getAllNames();
                }
            }
        });

};

export default IdentificationConfig;
