angular.module('faceOff').component('faceOff', {
    templateUrl: 'face-off/face-off.template.html',

    controller: ['$routeParams', function faceOffController($routeParams) {
        var self = this;
        self.puzzleId = $routeParams.puzzleId;
    }]
});