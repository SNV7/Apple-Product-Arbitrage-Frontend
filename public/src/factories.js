angular.module("AppleArbitrageApp")
	.factory("PriceQuery", function($resource)
	{
		return $resource('http://localhost:8080/api/prices/country/:modelCode/:countryCode', {modelCode: '@modelCode', countryCode: '@countryCode'});
	})

	.factory("ProductLineQuery", function($resource)
	{
		return $resource('http://localhost:8080/api/product_line_list', {});
	})

	.factory("ProductQuery", function($resource)
	{
		return $resource('http://localhost:8080/api/product_list/:currentProductLine', {currentProductLine: '@currentProductLine'});
	})

	.factory("CountryQuery", function($resource)
	{
		return $resource('http://localhost:8080/api/country_list', {});
	})



	


