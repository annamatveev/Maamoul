class GameCtrl {

    constructor() {
        'ngInject';

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
            'wubba lubba dub dub',
            'huston, we have a problem',
            'say hello to my little friend',
            'did i do that?',
            'is that your final answer?',
            'live long and prosper',
            'yabba dabba doo!',
            'frankly, my dear, i don\'t give a damn',
            'i have a bad feeling about this',
        ];
        return messages[Math.floor(Math.random() * messages.length)];

    }
}

export default GameCtrl;