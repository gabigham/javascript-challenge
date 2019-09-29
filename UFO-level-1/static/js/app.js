// from data.js
var tableData = data;

// empty data
var emptyData = []

// select table from html
var table = d3.select("#ufo-table");
var filter = d3.select("#filter-btn")

// update data displayed
function display(displayedData) {
  
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
  
  dateFilter = (tableData) => ( tableData.datetime === filterDate )
  filteredData = tableData.filter(dateFilter)
  
  display(filteredData)

})


