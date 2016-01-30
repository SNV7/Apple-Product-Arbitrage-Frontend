var app = angular.module("AppleArbitrageApp")

app.directive('ngSparkline', function() {
  return {
    restrict: 'A',
    template: '<div class="sparkline"></div>'
  }
});