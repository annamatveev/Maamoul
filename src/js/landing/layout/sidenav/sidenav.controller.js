class SideNavCtrl {
    constructor($timeout, $mdSidenav) {
        'ngInject';

        this._$timeout = $timeout;
        this._$mdSidenav = $mdSidenav;
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
}

export default SideNavCtrl;