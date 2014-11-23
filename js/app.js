'use strict';

var probleeApp = angular.module('probleeApp', ['ngDraggable']);

probleeApp.controller('probleeDragDropController', ['$scope', '$http',
  function($scope, $http) {
    $scope.introText = 'intro text';
    $scope.fields = [];
    $scope.wordBank = ['"hello"','return','var','other thing'];

    $scope.onDropComplete=function(fieldNum,data,evt){
      $scope.fields[fieldNum] = data;
    };
    $scope.onClick=function(fieldNum){
      var snippet = $scope.fields.splice(fieldNum, 1);
      console.log(snippet);
      $scope.wordBank.push(snippet[0]);
    };

    $scope.onDragSuccessFields=function(data,evt){
      var index = $scope.fields.indexOf(data);
      if (index > -1) {
        $scope.fields.splice(index, 1);
      }
    };

    $scope.onDragSuccessBank=function(data,evt){
      var index = $scope.wordBank.indexOf(data);
      if (index > -1) {
        $scope.wordBank.splice(index, 1);
      }
    };
  }

  ]);

// var problems = [
// {
//   introText: '',
//   tags: [],
//   difficulty: 1,

// },
// ];
