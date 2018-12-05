function buildMetadata(sample) {

    // @TODO: Complete the following function that builds the metadata panel
  
    // Use `d3.json` to fetch the metadata for a sample
      // Use d3 to select the panel with id of `#sample-metadata`
      d3.json(`/metadata/${sample}`).then(data => {
        console.log(data);
      // create a reference to the box to populate data
      var PANEL = d3.select("#sample-metadata")
      // Use `.html("") to clear any existing metadata
      PANEL.html("")
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(data).forEach(([key, value]) => {
        PANEL.append('h6').text(`${key}: ${value}`);
      });
  });
  
  // BONUS: Build the Gauge Chart
      // buildGauge(data.WFREQ);
  
  function buildCharts(sample) {
  
    // @TODO: Use `d3.json` to fetch the sample data for the plots
    d3.json(`/samples/${sample}`).then(data => {
      // extract the data from our json
      var sampleValues = data.sample_values;
      var otuIds = data.otu_ids;
      var otuLabels = data.otu_labels;
  
  
      var trace1 = {
        x: otuIds,
        y: sampleValues,
        labels: otuLabels,
        mode: 'markers',
        marker: {
          size: sampleValues,
          color: otuIds,
          colorscale: 'Earth'
        }
      };
  
      var bubbleData = [trace1];
  
      var layout = {
        title: 'Plotting stuff',
      };
  
      Plotly.newPlot('bubble', bubbleData, layout);
      
    });
      // @TODO: Build a Bubble Chart using the sample data
  
      // @TODO: Build a Pie Chart
      // HINT: You will need to use slice() to grab the top 10 sample_values,
      // otu_ids, and labels (10 each).
  }
  
  function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("/names").then((sampleNames) => {
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      const firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
  }
  
  // Initialize the dashboard
  init();
  