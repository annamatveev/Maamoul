class IdentificationCtrl {

    constructor($q, $scope, $location, $resolve, Users, LocalStorage) {
        'ngInject';

        this._$q = $q;
        this._LocalStorage = LocalStorage;
        this._$scope = $scope;
        this._$location = $location;

    }

    onSelectedItemChange(item) {
        if (item) {
            this._LocalStorage.set('user', item);
            this._$location.path('/photo');
        }
        else {
            this._LocalStorage.remove('user');
        }
    }

    createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }

    querySearch (query) {
        var results = query ? this.$resolve.users.filter(this.createFilterFor(query) ) : this.$resolve.users;
        return results;
    }
}

export default IdentificationCtrl;