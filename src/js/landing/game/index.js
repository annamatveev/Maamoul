import angular from 'angular';

let gameModule = angular.module('app.game', []);

// Route Config
import GameConfig from './game.config';
gameModule.config(GameConfig);

// Controllers
import GameCtrl from './game.controller';
gameModule.controller('GameCtrl', GameCtrl);

import Guess from './guess/guess.component';
gameModule.component('guess', Guess);

export default gameModule;
