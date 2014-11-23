'use strict';

var probleeApp = angular.module('probleeApp', ['ngDraggable']);

probleeApp.controller('probleeDragDropController', ['$scope', '$http',
  function($scope, $http) {

    var AnswerField = function(correctAnswer) {
      this.correctAnswer = correctAnswer;
      this.userAnswer = null;
    };

    $scope.introText = 'Return the word "hello"';

    $scope.fields = {
      field0: new AnswerField('"hello"'),
      field1: new AnswerField('return')
    };

    $scope.wordBank = ['"hello"','return','var','hello'];

    $scope.onDropComplete = function(fieldNum,data,evt){
      $('.field'+fieldNum).removeClass('has-error');
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

    $scope.submitAnswer = function(){
      if(checkAnswer()) {
        $('.message').show().addClass('successMessage').text('Good Job');
      } else {
        $('.message').show().removeClass('successMessage').text('Try again');
      }
      setTimeout(function(){
        $('.message').hide();
      }, 3000);
    };

    var checkAnswer = function(){
      var allCorrect = true;
      _.forEach($scope.fields, function(field, index){
        if(field.correctAnswer !== field.userAnswer) {
          $('.'+index).addClass('has-error');
          allCorrect = false;
        }
      });
      return allCorrect;
    };
  }

  ]);
