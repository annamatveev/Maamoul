class IdentificationCtrl {

    constructor($q, $scope, $location, $rootScope, Users, LocalStorage) {
        'ngInject';

        this._$q = $q;
        this._LocalStorage = LocalStorage;
        this._$location = $location;
        this._$rootScope = $rootScope;

    }

    onSelectedItemChange(item) {
        if (item) {
            this._LocalStorage.set('user', item);
            this._$rootScope.$emit('login', item);
            this._$location.path('/photo');
        }
        else {
            this._LocalStorage.remove('user');
        }
    }

    createFilterFor(query) {
        const lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }

    querySearch (query) {
        const results = query ? this.$resolve.users.filter(this.createFilterFor(query) ) : this.$resolve.users;
        return results;
    }
}

export default IdentificationCtrl;