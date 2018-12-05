// submit.on("click", function() {

//     d3.event.preventDefault();
  
//     var x1 = d3.select("#");
  
//     var value = x1.property("value");
    
//     var value = +value;

//  });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

d3.json('/trang').then(ageData => {
    console.log(ageData);
    var trace1 = {
        y: ageData.age_hd,
        type: 'box',
        name: 'Age w/ HD'
      };

      var trace2 = {
        y: ageData.age_no_hd,
        type: 'box',
        name: 'Age w/o HD'
      };
      
      var data = [trace1, trace2];
      
      Plotly.newPlot('boxplot', data);
});