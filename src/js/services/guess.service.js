export default class Guess {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
    }

    nextGuess(user_id) {
        return this._$http({
            url: `${this._AppConstants.api}/users/${user_id}/guess`,
            method: 'GET',
        }).then((res) => res.data);
    }

    guessName(photo_id, guessed_user_id, user_id) {
        return this._$http({
            url: `${this._AppConstants.api}/users/${user_id}/guess`,
            method: 'POST',
            data: { photo_id, guessed_user_id }
        }).then((res) => res.data.body);
    }
}
