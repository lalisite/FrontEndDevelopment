//@ts-check
app.controller("calculatorCtrlr",function($scope){
    $scope.num1=0;
    $scope.num2=0;
    $scope.sum = function(){
        return $scope.num1+$scope.num2;
    };
    $scope.sub = function(num1,num2){
        return num1-num2;
    };
    $scope.mult = function(num1,num2){
        return num1*num2;
    };
    $scope.div = function(num1,num2){
        return num1/num2;
    };
});