angular.module('navBar').component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',

    controller: ['$location', function navBarController($location) {
        var self = this;
        var def = "DEF";
        var path = $location.path();
        var url = $location.url();
        console.log("location: ", $location);
        console.log("url: ", url);
        console.log("path: ", path);
    }]
});