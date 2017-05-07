cppemmApp.controller('HeaderController', function ($scope, $location) {

    $scope.isActive = function isActive(path) {
        return $location.path().substr(0, path.length) == path;
    };
});

cppemmApp.controller('FacultyController', function ($scope, $location) {

});
