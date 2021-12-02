// alert('js')

let app = angular.module('MyApp', []);
app.controller('TypischDeutschController', ($scope, $http) => {
    $scope.user = { name: 'jon leicher' };

    // https://docs.angularjs.org/api/ng/service/$http
    // Simple GET request example:
    $http({
        method: 'GET',
        url: 'https://randomname.de/?format=json&images=1&phone=a&email=gmail.com'
    }).then(function successCallback(res) {
        console.log(res.data[0]);
        const u = res.data[0];
        $scope.user = u;
    }, function errorCallback(err) {
        console.log(err);
    });
});