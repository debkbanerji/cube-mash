angular.
module('selectPuzzleStats').
component('selectPuzzleStats', {
    templateUrl: 'select-puzzle-stats/select-puzzle-stats.template.html',

    controller: function selectPuzzleStatsController($routeParams) {
        var self = this;
        this.puzzleTypes = ["2x2","3x3","4x4","5x5","6x6","7x7","Megaminx","Pyraminx","Square-1", "Skewb", "Clock"];
    }
});