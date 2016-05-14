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
      realPercent = 0,
      cssClassName =  "your_class_name",
      cssAttr = {
        "cssMargin": "magin: 0 auto;",
        "cssWidth":  ""
      };

  $scope.total = "0";
  $scope.cssStyle = "//Your CSS here";
  
  $scope.calc = function() {
    outputCssPercent();
  };

  $scope.items = [
    {id: 'class', name: 'Class Name'},
    {id: 'id', name: 'ID Name'}
  ];
  $scope.elementType = $scope.items[0];
  $scope.changetype = function() {
    outputCssPercent();
  }
  function outputCssPercent() {
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
      cssClassName = ".".concat($scope.className);
      if($scope.elementType.id == 'id') {
        cssClassName =  "#".concat($scope.className);
      }
    } else {
      cssClassName = "your_class_name";
      if($scope.elementType.id == 'id') {
        cssClassName = "your_id_name";
      }
    }

    totalPercent = ((parseFloat(widthChild) / parseFloat(widthParent)) * 100).toFixed(2);
    realPercent = totalPercent % 1;
    if(realPercent === 0) {
      totalPercent = parseInt(totalPercent);
    }
    $scope.total =  totalPercent.toString().concat("%");
    
    cssAttr["cssWidth"] = "width: ".concat($scope.total) + ";";
    

    $scope.cssStyle = cssClassName.concat("&nbsp;{<br />");
    $.each(cssAttr, function(key, value){
      value = "<span class='line'>".concat(value);
      value = value.concat("</span>");
      value = value.concat("<br />");
      $scope.cssStyle = $scope.cssStyle.concat(value);
    });
    $scope.cssStyle = $scope.cssStyle.concat("}");
  }
});