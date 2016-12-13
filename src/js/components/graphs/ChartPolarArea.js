import React from "react"
var PolarAreaChart = require("react-chartjs").PolarArea 
var Chart = require('chart.js')

export default class ChartPolarArea extends React.Component {
    chartOptions = {
        //Boolean - Show a backdrop to the scale label
        scaleShowLabelBackdrop : false,
        //String - The colour of the label backdrop
        scaleBackdropColor : "rgba(255,255,255,1)",
        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero : true,
        //Number - The backdrop padding above & below the label in pixels
        scaleBackdropPaddingY : 2,
        //Number - The backdrop padding to the side of the label in pixels
        scaleBackdropPaddingX : 2,
        //Boolean - Show line for each value in the scale
        scaleShowLine : true,
        //Boolean - Stroke a line around each segment in the chart
        segmentShowStroke : true,
        //String - The colour of the stroke on each segment.
        segmentStrokeColor : "rgba(0,0,0,0.5)",
        //Number - The width of the stroke value in pixels
        segmentStrokeWidth : 2,
        //Number - Amount of animation steps
        animationSteps : 100,
        //String - Animation easing effect.
        animationEasing : "easeOutBounce",
        //Boolean - Whether to animate the rotation of the chart
        animateRotate : true,
        //Boolean - Whether to animate scaling the chart from the centre
        animateScale : true,
    }

    render() {
        return (<PolarAreaChart data={this.props.charData} options={this.chartOptions} redraw width="300px" height="300px"/>)
    }
}