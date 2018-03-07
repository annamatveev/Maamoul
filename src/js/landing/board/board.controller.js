class BoardCtrl {

    constructor($q, $scope, $location, $resolve, Users, LocalStorage) {
        'ngInject';

        this._$q = $q;
        this._LocalStorage = LocalStorage;
        this._$scope = $scope;
        this._$location = $location;
        this.message = this.randomWelcomeMessage();
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

export default BoardCtrl;