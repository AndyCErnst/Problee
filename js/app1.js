var App = angular.module('drag-and-drop', ['ngDragDrop']);

App.controller('oneCtrl', function($scope, $timeout) {
  $scope.answerFields = [  {'submitted':[],
                            'correct':[] },

                            {'submitted':[],
                            'correct':[] }
  ];
 
  $scope.wordBank = [
    { 'title': 'hello', 'drag': true },
    { 'title': 'return', 'drag': true },
    { 'title': 'do while', 'drag': true },
    { 'title': '===', 'drag': true },
    { 'title': '"hello"', 'drag': true },
    { 'title': '+=', 'drag': true },
    { 'title': 'var foo', 'drag': true },
    { 'title': 'function()', 'drag': true },
    { 'title': 'this.foo', 'drag': true },
  ];

  // Limit items to be dropped in list1
  $scope.optionsList1 = {
    accept: function(dragEl) {
      if ($scope.f1.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  $scope.popWord = function(index) {
      console.log("removing word");
      val = $scope.answerFields[index]["submitted"].pop();
      $scope.wordBank.push(val);
  }

   $scope.checkAnswer=function(){
    }

});