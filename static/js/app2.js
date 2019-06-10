// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var inputField = d3.select("#datetime");

var button = d3.select("#filter-btn");

tableData.forEach((report) => {
    // console.log(report);

    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// button.on("click", function() {

//      tbody.html("") 
//     function filterDate(sighting) {
//         return sighting.datetime == document.getElementById('datetime').value 
//         }
   
//     var newDates = data.filter(filterDate)

//     newDates.forEach((report) => {
//         // console.log(report);
    
//         var row = tbody.append("tr");
//         Object.entries(report).forEach(([key, value]) => {
//         //   console.log(key, value);
//           // Append a cell to the row for each value
//           // in the report object
//           var cell = row.append("td");
//           cell.text(value);
//         });
//       });

//   });














button.on("click", function() {

    tbody.html("") 
    dateInput = document.getElementById('datetime').value
    cityInput = document.getElementById('city').value 
    stateInput = document.getElementById('state').value 
    countryInput = document.getElementById('country').value
    shapeInput = document.getElementById('shape').value
    
    // Filter statement for Date

    var newData = tableData;

    if (dateInput == "") {
        //pass
    }
    else {
        newData = newData.filter(function(sighting) {
        return sighting.datetime == dateInput
        })
    }
    // Filter statement for City

    if (cityInput == "") {
        //pass
    }
    else {
        newData = newData.filter(function(sighting) {
        return sighting.city == cityInput
        })
    }

    // Filter statement for State

    if (stateInput == ""){
        //pass 
    }
    else{
        newData = newData.filter(function(sighting) {
        return sighting.state == stateInput
        })
    }

    // Filter statement for Country
    if (countryInput == "") {
        //pass
    }
    else {
        newData = newData.filter(function(sighting) {
        return sighting.country == countryInput
        })
    }

    //Filter statement for Shape
    if (shapeInput == "") {
        //pass
    }
    else {
        newData = newData.filter(function(sighting) {
        return sighting.shape == shapeInput
        })
    }


   newData.forEach((report) => {
       // console.log(report);
   
       var row = tbody.append("tr");
       Object.entries(report).forEach(([key, value]) => {
       //   console.log(key, value);
         // Append a cell to the row for each value
         // in the report object
         var cell = row.append("td");
         cell.text(value);
       });
     });

 });



// // Filter statement for Date

// if (dateInput == "") {
//     //pass
// }
// else {
//     newData = tableData.filter(function() {
//         sighting.datetime == dateInput
//     })
// }
// // Filter statement for City

// if (cityInput == "") {
//     //pass
// }
// else {
//     newData = newData.filter(function() {
//         sighting.city == cityInput
//     })
// }

// // Filter statement for State

// if (stateInput == ""){
//     //pass 
// }
// else{
//     newData = newData.filter(function() {
//         sighting.state == stateInput
//     })
// }

// // Filter statement for Country
// if (countryInput == "") {
//     //pass
// }
// else {
//     newData = newData.filter(function() {
//         sighting.country == countryInput
//     })
// }

// //Filter statement for Shape
// if (shapeInput == "") {
//     //pass
// }
// else {
//     newData = newData.filter(function() {
//         sighting.shape == shapeInput
//     })
// }















inputField.on("change", function() {
    console.log(document.getElementById('datetime').value)
  });
  

console.log(document.getElementById('datetime').value)

console.log(document.getElementById('datetime').value == "")