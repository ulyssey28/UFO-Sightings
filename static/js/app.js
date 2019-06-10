// from data.js

// assign sightings data to a variable. Note the data is a list of objects.
var tableData = data;

// assign the table body tag to a variable
var tbody = d3.select("tbody");

// reference the filter button using d3 and assign it to a variable 
var button = d3.select("#filter-btn");

// Populate the table body tag using a foreach method on our array of objects
tableData.forEach((report) => {

    // For each object within our array, we appened a table row to the table body
    var row = tbody.append("tr");

    // Note Object.entries() creates an array of arrays (with arrays of two elements ... a key and a value.. for a specific object)
    Object.entries(report).forEach(([key, value]) => {
      // Append a cell to the row for each value in a report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Note the main idea behind this filter code is to capture all of the sighting in an array then use a series of conditional statements 
// to perform several filters until we are left with an array containing the objects of interest 
// then populate the table body using the data from the objects of interest


// Catch the event of clicking the filter button 
button.on("click", function() {

    // First clear the table body
    tbody.html("") 

    // Assign the current value of each input box to a variable
    dateInput = document.getElementById('datetime').value
    cityInput = document.getElementById('city').value
    stateInput = document.getElementById('state').value
    countryInput = document.getElementById('country').value
    shapeInput = document.getElementById('shape').value
    


    var newData = tableData;

    // Note by default a blank input box has a value of ""
    // If an input box is left with a value of "", we assume it is not a category we want to filter by

    // First filter the array of sighting objects based on current date value
    if (dateInput == "") {
        //pass
    }
    else {

        // If the input box is not empty, set the newData variable equal to the filtered sighting data 
        newData = newData.filter(function(sighting) {
        return sighting.datetime == dateInput
        })
    }
    // Then filter the array of sighting objects based on current city value

    if (cityInput == "") {
        //pass
    }
    else {
        newData = newData.filter(function(sighting) {
        return sighting.city == cityInput.toLowerCase()
        })
    }

    // Next filter the array of sighting objects based on current state value

    if (stateInput == ""){
        //pass 
    }
    else{
        newData = newData.filter(function(sighting) {
        return sighting.state == stateInput.toLowerCase()
        })
    }

    // Then filter the array of sighting objects based on current country value
    if (countryInput == "") {
        //pass
    }
    else {
        newData = newData.filter(function(sighting) {
        return sighting.country == countryInput.toLowerCase()
        })
    }

    // Lastly filter the array of sighting objects based on current shape value
    if (shapeInput == "") {
        //pass
    }
    else {
        newData = newData.filter(function(sighting) {
        return sighting.shape == shapeInput.toLowerCase()
        })
    }

// Populate the , now empty, table body tag with the filtered array of objects
newData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        // Append a cell to the row for each value
        // in the report object
        var cell = row.append("td");
        cell.text(value);
    });
    });

 });

