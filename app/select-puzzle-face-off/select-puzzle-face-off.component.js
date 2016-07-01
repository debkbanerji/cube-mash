angular.
module('selectPuzzleFaceOff').
component('selectPuzzleFaceOff', {
    templateUrl: 'select-puzzle-face-off/select-puzzle-face-off.template.html',

    controller: function selectPuzzleFaceOffController() {
        var self = this;
        this.puzzleTypes = ["3x3", "2x2", "4x4","5x5","6x6","7x7","Megaminx","Pyraminx","Square-1", "Skewb", "Clock"];
    }
});