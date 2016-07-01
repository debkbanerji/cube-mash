angular.module('faceOff').component('faceOff', {
    templateUrl: 'face-off/face-off.template.html',

    controller: ['$scope', '$routeParams', '$firebaseObject', '$firebaseArray', function faceOffController($scope, $routeParams, $firebaseObject, $firebaseArray) {
        var self = this;
        self.puzzleId = $routeParams.puzzleId;
        self.puzzlesRef = firebase.database().ref().child("puzzles").child(self.puzzleId);
        // putting a console.log here won't work due to the asynchronous call
        self.puzzles = $firebaseArray(self.puzzlesRef);

        

        self.addWin = function pushData(puzzle) {
            var winsRef = self.puzzlesRef.child(puzzle.$id).child("wins");
            winsRef.transaction(function (current_value) {
                return (current_value || 0) + 1;
            });
        };

        self.addLoss = function pushData(puzzle) {
            var lossesRef = self.puzzlesRef.child(puzzle.$id).child("losses");
            lossesRef.transaction(function (current_value) {
                return (current_value || 0) + 1;
            });
        }
    }]
});