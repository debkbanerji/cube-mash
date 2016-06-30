angular.module('stats').component('stats', {
    templateUrl: 'stats/stats.template.html',

    controller: ['$scope', '$routeParams', '$firebaseObject', '$firebaseArray', function statsController($scope, $routeParams, $firebaseObject, $firebaseArray) {
        var self = this;
        self.puzzleId = $routeParams.puzzleId;
        console.log("puzzleId:" + self.puzzleId);
        var ref = firebase.database().ref().child("puzzles").child(self.puzzleId);
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