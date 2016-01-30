//Job of controller is to pass in values into the scope that will be used to render the templates
//Controllers should be lightweight 

var app = angular.module("AppleArbitrageApp")

app.controller("HomeController", function($scope, $http, $rootScope, $location, PriceQuery, ProductLineQuery, ProductQuery, CountryQuery, $routeParams, $filter, $window){
	$rootScope.PAGE = "home";

	$scope.pageTitle = "Apple Arbitrage";
	$scope.fields = ["flag_image", "country_name", "local_formatted_price", "converted_price", "exchange_rate", "price_difference", "percent_difference"]; 

    //$scope.prices = PriceQuery.query();
    //$scope.products = ProductQuery.query();
    //$scope.countries = CountryQuery.query();

    //Query for prices
    $scope.prices = PriceQuery.query({modelCode: "ipadair2_wifi_128", countryCode: "ca"}, function(err, data) 
    {
    	//Done loading prices
        if(data.length > 0){
            $scope.priceLastUpdateDate = $scope.prices[0].price_last_update;
            $scope.exchangeRatesLastUpdateDate = $scope.prices[0].exchange_rate_last_update;
        } 
    });

    //Query for product lines
    $scope.currentProductLine = "";
    $scope.productLines = ProductLineQuery.query({}, function(err,data)
    {
        if(data.length > 0) $scope.currentProductLine = $scope.productLines[0];

        //Query for products once we know the product line
        $scope.currentProductModel = "";
    	$scope.products = ProductQuery.query({currentProductLine:$scope.currentProductLine.product_line_name}, function(err,data)
    	{
        	if(data.length > 0) $scope.currentProductModel = $scope.products[0];
    	}); 

    }); 

    //Query for Countries
    $scope.currentCountry = "";
    $scope.countries = CountryQuery.query({}, function(err,data)
    {
        if(data.length > 0) $scope.currentCountry = $scope.countries[0];
    }); 



    $scope.$watchGroup(["currentProductModel", "currentCountry"], function(){
        $scope.prices = PriceQuery.query({modelCode: $scope.currentProductModel.product_id, countryCode: $scope.currentCountry.country_code}, function(err, data) 
        {
            //Done loading prices
            if(data.length > 0){
                $scope.priceLastUpdateDate = $scope.prices[0].price_last_update;
                $scope.exchangeRatesLastUpdateDate = $scope.prices[0].exchange_rate_last_update;
            } 

        }); 
    });

    /*
	 * Opens URL in new tab
	 */
	$scope.openLink = function(url)
	{
        $window.open(url, '_blank');
	};

});




