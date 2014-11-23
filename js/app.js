'use strict';

var probleeApp = angular.module('probleeApp', ['ngDraggable']);

probleeApp.controller('probleeDragDropController', ['$scope',
  function($scope) {

    var loadProblem = function(problem){
      $('.drop-section').hide();
      $scope.template = $('#' + problem.template).show();
      $scope.introText = problem.introText;
      $scope.fields = problem.fields;
      $scope.wordBank = problem.wordBank;
    };

    loadProblem(function1_dragA);

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
        $('.message').fadeOut();
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


var AnswerField = function(correctAnswer) {
  this.correctAnswer = correctAnswer;
  this.userAnswer = null;
};

var function1_dragA = {
  template: 'function1_dragA',
  introText: 'Return the word "hello"',
  fields: {
      field0: new AnswerField('"hello"'),
      field1: new AnswerField('return')
   },
   wordBank: ['"hello"','return','var','hello']
};

var function1_dragB = {
  template: 'function1_dragB',
  introText: 'Return the word "hello"',
  fields: {
      field0: new AnswerField('var'),
      field1: new AnswerField('"hello"'),
      field2: new AnswerField('return')
   },
   wordBank: ['magic','return','"hello"','var','hello', 'variable']
};

var function1_dragC = {
  template: 'function1_dragC',
  introText: 'Return the word "hello"',
  fields: {
    field0: new AnswerField('var'),
    field1: new AnswerField('foo'),
    field2: new AnswerField('"hello"'),
    field3: new AnswerField('return'),
    field4: new AnswerField('foo'),
   },
   wordBank: ['function','"hello"','return','var','while','variable','hello']
};
