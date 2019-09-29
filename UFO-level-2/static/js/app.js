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
  var filterDate = d3.select("#datetime").property("value");
  var filterCity = d3.select("#city").property("value");
  var filterState = d3.select("#state").property("value");
  var filterCountry = d3.select("#country").property("value");
  var filterShape = d3.select("#shape").property("value");
  // default filters
  dateFilter = (tableData) => ( tableData.datetime);
  cityFilter = (tableData) => ( tableData.city );
  stateFilter = (tableData) => ( tableData.state);
  countryFilter = (tableData) => ( tableData.country);
  shapeFilter = (tableData) => ( tableData.shape);
  // set filters if input entered
  if (!(filterDate == '')) dateFilter = (tableData) => ( tableData.datetime == filterDate ) ;
  if (!(filterCity == '')) cityFilter = (tableData) => ( tableData.city == filterCity ) ;
  if (!(filterState == '')) stateFilter = (tableData) => ( tableData.state == filterState ) ;
  if (!(filterCountry == '')) countryFilter = (tableData) => ( tableData.country == filterCountry ) ;
  if (!(filterShape == '')) shapeFilter = (tableData) => ( tableData.shape == filterShape ) ;
  // filter and display
  filteredData = tableData.filter(dateFilter).filter(cityFilter).filter(stateFilter).filter(countryFilter).filter(shapeFilter)
  display(filteredData)
})
