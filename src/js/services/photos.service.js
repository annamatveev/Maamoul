export default class Photos {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
    }

    getUserPhotos(user_id) {
        return this._$http({
            url: `${this._AppConstants.api}/users/${user_id}/photos`,
            method: 'GET',
        }).then((res) => res.data.map((item) => ({
                id: item.id,
                user_id: user_id,
                uploader_id: item.uploader_id,
                url: item.url
            })
            )
        );
    }

    uploadPhoto(user, url) {
        return this._$http({
            url: `${this._AppConstants.api}/users/${user.id}/photos`,
            method: 'POST',
            data: { url }
        }).then(function(res) {
                    console.log(res)
                }
        );
    }
}
