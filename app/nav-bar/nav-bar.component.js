angular.module('navBar').component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',

    controller: ['$scope', '$location', function navBarController($scope, $location) {
        var self = this;
        updateNavBar($location, self);

        $scope.$on('$routeChangeSuccess', function () {
            updateNavBar($location, self);
        });
    }

    ]
});

function updateNavBar(location, self) {
    self.path = location.path();
    self.url = location.url();
    self.play = /play$/.test(self.path);
    self.stats = /stats$/.test(self.path);
    self.about = /about$/.test(self.path);
}