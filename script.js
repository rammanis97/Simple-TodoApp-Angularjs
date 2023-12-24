var app = angular.module("myList",[]);
app.controller("myListController",function($scope){
    $scope.items = [];
    $scope.addItem = function(){
        if($scope.newItem){
            $scope.items.push({ text: $scope.newItem, done: false });
            $scope.newItem = '';
        }
    };
    $scope.deleteItem = function(index){
        $scope.items.splice(index,1);
    };
});