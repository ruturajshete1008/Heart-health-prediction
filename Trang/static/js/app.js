d3.json('/data').then(ageData => {
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