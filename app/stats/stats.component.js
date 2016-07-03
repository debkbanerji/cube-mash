angular.module('stats').component('stats', {
    templateUrl: 'stats/stats.template.html',

    controller: ['$scope', '$routeParams', '$firebaseObject', '$firebaseArray', function statsController($scope, $routeParams, $firebaseObject, $firebaseArray) {
        var self = this;
        self.puzzleId = $routeParams.puzzleId;
        self.puzzlesRef = firebase.database().ref().child("puzzles").child(self.puzzleId);
        // putting a console.log here won't work due to the asynchronous call
        self.puzzles = $firebaseArray(self.puzzlesRef);

        self.puzzles.$loaded()
            .then(function (x) {
                console.log("^Note: This is not an issue, since the array is synchronized");
            })
            .catch(function (error) {
                console.log("Error:", error);
            });

        self.winRate = function(puzzle) {
            return (100*puzzle.wins/(puzzle.losses+puzzle.wins));
        };
        self.orderWinRate = function (puzzle) {
            return (self.winRate(puzzle) || 0);
        }
    }]
});