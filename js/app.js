'use strict';

var probleeApp = angular.module('probleeApp', ['ngDraggable']);

probleeApp.controller('probleeDragDropController', ['$scope', '$http',
  function($scope, $http) {

    var answerField = function(correctAnswer) {
      this.correctAnswer = correctAnswer;
      this.userAnswer = null;
    };

    $scope.introText = 'Return the word "hello"';

    $scope.fields = {
      field0: new answerField('"hello"'),
      field1: new answerField('return')
    };

    $scope.wordBank = ['"hello"','return','var','hello'];

    $scope.onDropComplete = function(fieldNum,data,evt){
      if($scope.fields['field'+fieldNum].userAnswer === null) {
        $scope.fields['field'+fieldNum].userAnswer = data;
      } else {
        $scope.wordBank.push(data); // Undo the change
      }
    };

    $scope.onClick = function(fieldNum){
      var snippet = $scope.fields['field'+fieldNum].userAnswer;
      $scope.fields['field'+fieldNum].userAnswer = null;
      if(snippet) {
        $scope.wordBank.push(snippet);
      }
    };

    $scope.onDragSuccessBank = function(data,evt){
      var index = $scope.wordBank.indexOf(data);
      if (index > -1) {
        $scope.wordBank.splice(index, 1);
      }
    };

    $scope.checkAnswer=function(){
    }
  }

  ]);

// var problems = [
// {
//   introText: '',
//   tags: [],
//   difficulty: 1,

// },
// ];
