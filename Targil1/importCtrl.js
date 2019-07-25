module.controller("importCtrl", function ($scope, requestService, dataValue) {
    $scope.req = requestService
    $scope.db= dataValue
})