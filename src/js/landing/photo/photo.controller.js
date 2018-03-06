class PhotoCtrl {
    constructor($location, AppConstants, Photos, LocalStorage) {
        'ngInject';

        this._$location = $location;
        this._Photos = Photos;
        this.loggedInUser = LocalStorage.get(AppConstants.localStorageUserKey);
        this.message = this.randomWelcomeMessage();
    }

    skipUpload() {
        this._$location.path('/game');
    }

    randomWelcomeMessage() {
        const messages = ['hey funny lookin\'',
            'why so serious?',
            'go ahead, make my day',
            'it\'s a trap!',
            'release the kraken',
            'Bazinga!',
            'how you doin\'?',
            'no soup for you!',
            'suit up!',
            'wubba lubba dub dub'
        ];
        return messages[Math.floor(Math.random() * messages.length)];

    }
}

export default PhotoCtrl;
