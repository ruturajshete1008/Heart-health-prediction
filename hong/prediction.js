var submit = d3.select(".submit");

var result = d3.select("#results");

submit.on("click", function() {

    result.html("<h3>Results:</h3>");
});