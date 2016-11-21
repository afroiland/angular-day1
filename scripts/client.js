
var app = angular.module('BasicApp', []);

app.controller('BasicController', function(){
  console.log('ok');

  var self = this;

  self.greeting = "Hi";

  self.newThing = {};

  self.printGreeting = function(){
    console.log(self.greeting);
  }

  self.cohort = {
    roomNumber: 1,
    name: "Sigma"
  }

  self.hucksFavoriteThings = [
    {
      name: "Chipotle",
      happinessPoints: 1000,
      show: true
    },
    {
      name: "Friendship",
      happinessPoints: 17,
      show: false
    }
  ];

  self.createFavoriteThing = function(){
    self.hucksFavoriteThings.push(angular.copy(self.newThing));
  }

});
