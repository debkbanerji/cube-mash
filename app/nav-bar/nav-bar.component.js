angular.module('navBar').component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',

    controller: ['$scope', '$location', function navBarController($scope, $location) {
        var self = this;
        updateNavBar($location, self);

        self.abcd = true;
        
        $scope.$on('$routeChangeSuccess', function () {
            updateNavBar($location, self);
        });
    }

    ]
});

function updateNavBar(location, self) {
    self.path = location.path();
    self.url = location.url();
    // console.log("location: ", location);
    // console.log("url:", self.url);
    // console.log("path:", self.path);
    self.mash = /mash$/.test(self.path);
    self.stats = /stats$/.test(self.path);
    self.about = /about$/.test(self.path);
    // console.log(self.mash);
    // console.log(self.stats);
    // console.log(self.about);
}