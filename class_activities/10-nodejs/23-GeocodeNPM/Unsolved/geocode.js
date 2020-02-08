// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.
// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.
// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.
// ========================================================================================================================
// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");
var weather = require("weather-js");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "YlrspS1OmgD5qrGa9OlmkHVPl5UphQiX"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);

// Take in the command line arguments
// Build your address as an array or string
var address = "";
process.argv.forEach(function (element, index) {
  (index > 1) ? address += element + " ": null;
});
console.log(address);

// Then use the geocoder object to search the address
geocoder.geocode(address, function (err, data) {
  // If there is an error log it.
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data, null, 2));
    // Search for the weather at that location
    weather.find({
      search: `${data[0].city}, ${data[0].stateCode}`,
      degreeType: "F"
    }, function (err, result) {

      // If there is an error log it.
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(result, null, 2));
      }
    });
  }
});