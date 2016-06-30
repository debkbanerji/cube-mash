angular.module('stats').component('stats', {
    templateUrl: 'stats/stats.template.html',

    controller: ['$routeParams', function statsController($routeParams) {
        var self = this;
        self.puzzleId = $routeParams.puzzleId;
    }]
});