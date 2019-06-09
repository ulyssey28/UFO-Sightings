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

button.on("click", function() {

     tbody.html("") 
    function filterDate(sighting) {
        return sighting.datetime == document.getElementById('datetime').value
        }
   
    var newDates = data.filter(filterDate)

    newDates.forEach((report) => {
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

inputField.on("change", function() {
    console.log(document.getElementById('datetime').value)
  });
  