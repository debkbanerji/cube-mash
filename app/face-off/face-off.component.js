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
                console.log("^Note: This is not an issue, since the array is synchronized");
                refreshPuzzle0();
                refreshPuzzle1();
            })
            .catch(function (error) {
                console.log("Error:", error);
            });

        self.click0 = function () {
            addWin(self.puzzle0);
            addLoss(self.puzzle1);
            refreshPuzzle1()
        };

        self.click1 = function () {
            addWin(self.puzzle1);
            addLoss(self.puzzle0);
            refreshPuzzle0()
        };

        self.skip = function () {
            refreshPuzzle0();
            refreshPuzzle1();
        };

        refreshPuzzle0 = function () {
            try {
                document.getElementById("image0").src = "";
            } catch (e) {

            }
            self.puzzle0 = self.puzzle1;
            while (self.puzzle0 == self.puzzle1) {
                self.puzzle0 = self.puzzles[Math.floor(Math.random() * self.puzzles.length)];
            }
        };

        refreshPuzzle1 = function () {
            try {
                document.getElementById("image1").src = "";
            } catch (e) {

            }
            self.puzzle1 = self.puzzle0;
            while (self.puzzle1 == self.puzzle0) {
                self.puzzle1 = self.puzzles[Math.floor(Math.random() * self.puzzles.length)];
            }
        };

        addWin = function (puzzle) {
            var winsRef = self.puzzlesRef.child(puzzle.$id).child("wins");
            winsRef.transaction(function (current_value) {
                return (current_value || 0) + 1;
            });
        };

        addLoss = function (puzzle) {
            var lossesRef = self.puzzlesRef.child(puzzle.$id).child("losses");
            lossesRef.transaction(function (current_value) {
                return (current_value || 0) + 1;
            });
        }
    }]
});