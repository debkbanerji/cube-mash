angular.module('faceOff').component('faceOff', {
    templateUrl: 'face-off/face-off.template.html',

    controller: ['$scope', '$routeParams', '$firebaseObject', '$firebaseArray', function faceOffController($scope, $routeParams, $firebaseObject, $firebaseArray) {
        var self = this;
        puzzleId = $routeParams.puzzleId;
        self.puzzlesRef = firebase.database().ref().child("puzzles").child(puzzleId);
        // putting a console.log here won't work due to the asynchronous call
        self.puzzles = $firebaseArray(self.puzzlesRef);

        self.puzzles.$loaded()
            .then(function (x) {
                console.log("^Calm down Firebase, I'm synchronizing the array.");
                self.refreshPuzzles();
                console.log(self.puzzle0);
                console.log(self.puzzle1);
            })
            .catch(function (error) {
                console.log("Error:", error);
            });

        self.refreshPuzzles = function () {
            self.puzzle0 = self.puzzles[Math.floor(Math.random() * self.puzzles.length)];
            self.puzzle1 = self.puzzles[Math.floor(Math.random() * self.puzzles.length)];
        };

        self.addWin = function (puzzle) {
            var winsRef = self.puzzlesRef.child(puzzle.$id).child("wins");
            winsRef.transaction(function (current_value) {
                return (current_value || 0) + 1;
            });
        };

        self.addLoss = function (puzzle) {
            var lossesRef = self.puzzlesRef.child(puzzle.$id).child("losses");
            lossesRef.transaction(function (current_value) {
                return (current_value || 0) + 1;
            });
        }
    }]
});