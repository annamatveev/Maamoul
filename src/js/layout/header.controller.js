class HeaderCtrl {
    constructor($location, $rootScope, Auth, AppConstants) {
        'ngInject';

        this._$location = $location;
        this.appName = AppConstants.appName;

        let self = this;

        if (Auth.isAuthenticated()) {
            Auth.currentUser().then(function(user) {
                self.currentUser = user;
            });
        }

        $rootScope.$on('devise:login', function(event, user) {
            self.currentUser = user;
        });

        $rootScope.$on('devise:logout', function(event, data) {
            self.currentUser = null;
        });
    }
}

export default HeaderCtrl;