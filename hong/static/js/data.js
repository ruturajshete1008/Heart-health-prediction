d3.json('/hong').then(data => {
    console.log(data);


    var tbody = d3.select("tbody");

        Object.entries(data).forEach(([key, value]) => {
            var row = tbody.append("tr");

            for (i = 0; i < value.length; i++) {
            var cell = tbody.append("td");
            cell.text(value[i]);
            }
    });


});