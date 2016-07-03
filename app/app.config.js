angular.module('cubeMashApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/about', {
            template: '<about></about>'
        }).when('/play', {
            template: '<select-puzzle-face-off></select-puzzle-face-off>'
        }).when('/play/:puzzleId', {
            template: '<face-off></face-off>'
        }).when('/stats', {
            template: '<select-puzzle-stats></select-puzzle-stats>'
        }).when('/stats/:puzzleId', {
            template: '<stats></stats>'
        }).otherwise('/play');

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

]);