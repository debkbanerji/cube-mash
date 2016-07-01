angular.module('stats').component('stats', {
    templateUrl: 'stats/stats.template.html',

    controller: ['$scope', '$routeParams', '$firebaseObject', '$firebaseArray', function statsController($scope, $routeParams, $firebaseObject, $firebaseArray) {
        var self = this;
        self.puzzleId = $routeParams.puzzleId;
        console.log("puzzleId:" + self.puzzleId);
        self.puzzlesRef = firebase.database().ref().child("puzzles").child(self.puzzleId);
        // putting a console.log here won't work due to the asynchronous call
        self.puzzles = $firebaseArray(self.puzzlesRef);
        // download the data into a local object
        // this.puzzles = $firebaseObject(ref);
        // putting a console.log here won't work, see below
        self.puzzles = $firebaseArray(ref);

        // self.pushData = function pushData() {
        //     self.puzzles.$add({
        //         name: "Moyu Weilong GTS",
        //         wins: 0,
        //         losses: 0
        //     });
        // }
    }]
});