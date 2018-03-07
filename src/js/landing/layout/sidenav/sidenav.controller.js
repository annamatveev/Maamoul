class SideNavCtrl {
    constructor($timeout, $location, $mdSidenav, AppConstants, LocalStorage) {
        'ngInject';

        this._$timeout = $timeout;
        this._$location = $location;
        this._$mdSidenav = $mdSidenav;
        this._LocalStorage = LocalStorage;
        this._AppConstants = AppConstants;
        this.toggleLeft = this.buildDelayedToggler('left');
        this.toggleRight = this.buildToggler('right');
        this.isOpenRight = function(){
            return this._$mdSidenav('right').isOpen();
        };

    }

    debounce(func, wait, context) {
        let timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            this._$timeout.cancel(timer);
            timer = this._$timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    buildDelayedToggler(navID) {
        return this.debounce(function() {
            this._$mdSidenav(navID)
                .toggle()
                .then(function () {
                    console.log("toggle " + navID + " is done");
                });
        }, 200);
    }

    buildToggler(navID) {
        return function() {
            this._$mdSidenav(navID)
                .toggle()
                .then(function () {
                    console.log("toggle " + navID + " is done");
                });
        };
    }

    close() {
        this._$mdSidenav('right').close()
            .then(function () {
                console.log("close LEFT is done");
            });

    };

    navigateToBoard() {
        this._$location.path('/board');
        this.close();
    }

    navigateToDiscover() {
        this._$location.path('/discover');
        this.close();
    }

    logout() {
        this._LocalStorage.remove(this._AppConstants.localStorageUserKey);
        this._$location.path('/');
        this.close();
    }
}

export default SideNavCtrl;