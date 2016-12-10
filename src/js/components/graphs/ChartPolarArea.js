import React from "react"
var PolarAreaChart = require("react-chartjs").Doughnut 
var Chart = require('chart.js')

export default class ChartPolarArea extends React.Component {
    render() {
        return (<PolarAreaChart data={this.props.charData} options={this.props.chartOptions}/>)
    }
}