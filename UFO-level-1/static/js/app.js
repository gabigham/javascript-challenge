// from data.js
var tableData = data;

// select table from html
var table = d3.select("#ufo-table").select("tbody");
var filter = d3.select("#filter-btn")

// update data displayed
function display(displayedData) {
  // clear table
  table.html('')
  // append data
  displayedData.forEach((observation) => {
    var row = table.append("tr");
    Object.entries(observation).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

filter.on("click", function() {
  var inputDate = d3.select("#datetime");
  var filterDate = inputDate.property("value");
  // filter by filter date
  dateFilter = (tableData) => ( tableData.datetime === filterDate )
  filteredData = tableData.filter(dateFilter)
  display(filteredData)
})


