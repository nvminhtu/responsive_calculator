angular.module('starter.controllers', ['ngSanitize'])

.controller('MainCtrl',function($scope){
  // global variables 
  $scope.appName = "Web Responsive Calculator";

})

.controller('CalculatorCtrl',function($scope){
  // init
  var widthChild = 0,
      widthParent = 0,
      totalPercent = 0,
      cssClassName =  "your_class_name",
      cssMargin = "magin: 0 auto;"
      cssWidth =  "";

  $scope.total = "0";
  $scope.cssStyle = "//Your CSS here";
  
  $scope.calc = function() {
    if($scope.widthChild) {
      widthChild = $scope.widthChild;
    } else {
      widthChild = 0;
    }


    if($scope.widthParent) {
      widthParent = $scope.widthParent;
    } else {
      widthParent = 1; //because this denominator should not be 0
    }

    if($scope.className) {
      cssClassName = $scope.className;
    } else {
      cssClassName = "your_class_name";
    }

    totalPercent = ((parseFloat(widthChild) / parseFloat(widthParent)) * 100).toFixed(2);
    $scope.total =  totalPercent.toString().concat("%");
    
    cssWidth = "width: ".concat($scope.total) + ";";
    

    $scope.cssStyle = 
      "." + cssClassName  + "&nbsp;{&nbsp;<br />&nbsp;&nbsp;&nbsp;"
                    + cssWidth 
                    + "<br />&nbsp;&nbsp;&nbsp;"
                    + cssMargin
                    + "<br />"
                    + "}";
  };

});