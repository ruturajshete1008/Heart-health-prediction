d3.json('/hong').then(data => {
    console.log(data);


    var tbody = d3.select("tbody");

    data.forEach(d => {
        console.log(d);

        var row = tbody.append("tr");
        Object.entries(d).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
        });
    });


});