// alert('js')

let app = angular.module('MyApp', []);
app.controller('TypischDeutschController', ($scope, $http) => {
    $scope.users = undefined;
    $scope.q = undefined;

    // https://docs.angularjs.org/api/ng/service/$http
    // Simple GET request example:
    $http({
        method: 'GET',
        url: 'https://randomname.de/?format=json&count=10&images=1&phone=a&email=gmail.com'
    }).then(function successCallback(res) {
        console.log(res.data);
        $scope.users = res.data;
    }, function errorCallback(err) {
        console.log(err);
    });
});