'use strict';

var probleeApp = angular.module('probleeApp', ['ui.sortable']);

probleeApp.controller('probleeDragDropController', ['$scope', '$http',
  function($scope, $http) {
    $scope.introText = 'intro text';
    $scope.problem = {};
    $scope.wordBank = ['"hello"','return','var','other thing'];

    $scope.dragControlListeners = {
      accept: function (sourceItemHandleScope, destSortableScope) {return true;},
      itemMoved: function (event) {},
      orderChanged: function(event) {},
      containment: 'body'
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
