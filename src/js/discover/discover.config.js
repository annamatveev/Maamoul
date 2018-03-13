function DiscoverConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.discover', {
            url: '/discover',
            controller: 'DiscoverCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'discover/discover.html',
            title: 'Discover',
            resolve: {
                leastFamiliar: function(Users) {
                    return Users.leastFamiliar();
                }
            }
        });

};

export default DiscoverConfig;
