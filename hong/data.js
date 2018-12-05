d3.csv("../../db/train_values.csv", function(error, data) {
    if (error) return console.warn(error);
  
    console.log(data);


    var tbody = d3.select("tbody");

    data.forEach((d) => {
        var row = tbody.append("tr");
        Object.entries(d).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
        });
    });


});