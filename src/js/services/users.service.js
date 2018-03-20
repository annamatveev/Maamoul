export default class Users {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
    }

    getAllNames() {
        return this._$http({
            url: this._AppConstants.api + '/users',
            method: 'GET',
        }).then((res) => res.data.map((item) => ({ id: item.id,
                                                    username: item.username,
                                                    value: angular.lowercase(item.name),
                                                    display: item.name,
                                                    email: item.email
                                                })
                                    )
        );
    }

    topGamers() {
        return this._$http({
            url: `${this._AppConstants.api}/users/top_gamers`,
            method: 'GET'
        }).then((res) => res.data);
    }

    leastFamiliar() {
        return this._$http({
            url: `${this._AppConstants.api}/users/least_familiar`,
            method: 'GET'
        }).then((res) => res.data);
    }
}
