// STEP 1 - Include Dependencies
// Include react
import React from "react";
// import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


// STEP 3 - Creating the JSON object to store the chart configurations

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// class App extends React.Component {
//   render() {
//     return (<ReactFC {...chartConfigs} />);
//   }
// }
const ChartComponent = ({ data }) =>
{
  console.log(data)
const chartConfigs = {
  type: "column3D", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "stars per Languages",
      //Set the chart subcaption
      // subCaption: "In MMbbl = On4 Million barrels",
      // //Set the x-axis name
      // xAxisName: "Country",
      // //Set the y-axis name
      // yAxisName: "Reserves (MMbbl)",
      // numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion",
      doughnutRadius: '45%',
      showPercentvalues: 0,
      theme: 'candy'
    },
    // Chart Data
    data,
  }
};

{
  return <ReactFC {...chartConfigs} />
  
}
}
export default ChartComponent;