export default class Users {
    constructor(JWT, AppConstants, $http, $q) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;


    }

    getAllNames() {
        return this._$http({
            url: this._AppConstants.api + '/users',
            method: 'GET',
        }).then((res) => res.data.map((item) => ({ value: angular.lowercase(item.name), display: item.name })));
    }
}
