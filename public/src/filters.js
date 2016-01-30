var app = angular.module("AppleArbitrageApp")
	


/*
 * Convert model property names to more UI friendly strings
 */
app.filter('modelPropertyNameToUIString', function()
{
	return function(input)
	{
		switch (input)
		{
			case "country_name": return "Country";
				break;
			case "currency_symbol": return "Currency Symbol";
				break;
			case "product_line": return "Product Line";
				break;
			case "model": return "Model";
				break;
			case "local_price": return "Foreign Price";
				break;
			case "local_formatted_price": return "Foreign Price";
				break;
			case "converted_price": return "Local Price";
				break;
			case "exchange_rate": return "FX Rate";
				break;
			case "price_difference": return "Price Diff";
				break;
			case "percent_difference": return "% Diff";
				break;
			case "flag_image": return "";
				break;

			default: return input;
		}//end switch
	};
});//end filter


/*
 * Rounds a number to 6 decimal places
 */
app.filter('roundNumberToSixPlaces', function()
{
	return function(num)
	{
		if(!isNaN(num)) return num = (Math.round(num * 1000000) / 1000000).toFixed(6);
		else return num;
	};
});//end filter

/*
 * Returns the flag image name for a given country name
 */
app.filter('flagImageNameForCountryName', function()
{
	return function(countryName)
	{
		switch (countryName)
		{
			case "Australia": return "Australia.png";
				break;
			case "Austria": return "Austria.png";
				break;
			case "Belgium": return "Belgium.png";
				break;
			case "Brazil": return "Brazil.png";
				break;
			case "Canada": return "Canada.png";
				break;
			case "China": return "China.png";
				break;
			case "Czech Republic": return "Czech_Republic.png";
				break;
			case "Denmark": return "Denmark.png";
				break;
			case "Finland": return "Finland.png";
				break;
			case "France": return "France.png";
				break;
			case "Germany": return "Germany.png";
				break;
			case "Hong Kong": return "Hong_Kong.png";
				break;
			case "Hungary": return "Hungary.png";
				break;
			case "India": return "India.png";
				break;
			case "Indonesia": return "Indonesia.png";
				break;
			case "Ireland": return "Ireland.png";
				break;
			case "Italy": return "Italy.png";
				break;
			case "Japan": return "Japan.png";
				break;
			case "Luxembourg": return "Luxembourg.png";
				break;
			case "Malaysia": return "Malaysia.png";
				break;
			case "Mexico": return "Mexico.png";
				break;
			case "Netherlands": return "Netherlands.png";
				break;
			case "New Zealand": return "New_Zealand.png";
				break;	
			case "Norway": return "Norway.png";
				break;
			case "Philipines": return "Philippines.png";
				break;
			case "Poland": return "Poland.png";
				break;
			case "Portugal": return "Portugal.png";
				break;
			case "Russia": return "Russian_Federation.png";
				break;
			case "Singapore": return "Singapore.png";
				break;
			case "South Korea": return "South_Korea.png";
				break;
			case "Spain": return "Spain.png";
				break;
			case "Sweeden": return "Sweden.png";
				break;
			case "Switzerland": return "Switzerland.png";
				break;
			case "Taiwan": return "Taiwan.png";
				break;
			case "Thailand": return "Thailand.png";
				break;
			case "Turkey": return "Turkey.png";
				break;
			case "United Arab Emirates": return "UAE.png";
				break;
			case "United Kingdom": return "United_Kingdom.png";
				break;
			case "United States": return "United_States_of_America.png";
				break;
			case "Vietnam": return "Vietnam.png";
				break;

			default: return countryName;
		}//end switch
	};
});//end filter

/*
 * Filters out products that are not part of a given product line and returns the product model name
 */
app.filter('filterOutModelsNotOfProductLine', function()
{
	return function(product, currentProductLine)
	{
		if(product.product_line == currentProductLine.product_line_name)
		{
			return product.product_model;
		}
		else
		{
			return "";
		}
	};
});//end filter



	



	





