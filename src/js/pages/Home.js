import React from "react"
import { IndexLink, Link } from "react-router"

import PolarArea from "../components/graphs/ChartPolarArea"

export default class Home extends React.Component {
charData = [
    {
        value: 300,
        color:"#ff0000",
        highlight: "#00ff00",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }

];



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
    segmentStrokeColor : "#fff",

    //Number - The width of the stroke value in pixels
    segmentStrokeWidth : 2,

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect.
    animationEasing : "easeOutBounce",

    //Boolean - Whether to animate the rotation of the chart
    animateRotate : true,

    //Boolean - Whether to animate scaling the chart from the centre
    animateScale : false,

}




    render() {
        return (
            <div id="home">
                <div class="jumbotron">
                    <div class="container text-center">
                        <h1>The Monster Game</h1> 
                        <p>Turn Based Strategy Game<br/>Show your Friends who are they dealing with!</p>
                        <p><a class="btn btn-default btn-lg">Play Now</a></p>
                    </div>
                </div>
                <div class="main-classes container">
                    <div class="col-md-4">
                        <img src="../../img/shield1.png" />
                        <h3>The Divines</h3>
                        <article></article>
                    </div>
                    <div class="col-md-4">
                        <img src="../../img/shield2.png" />
                        <h3>The Invaders</h3>
                        <article></article>
                    </div>
                    <div class="col-md-4">
                        <img src="../../img/shield3.png" />
                        <h3>The Council</h3>
                        <article></article>
                    </div>
                </div>
 
                <div>
                    <PolarArea charData={this.charData} chartOptions={this.chartOptions}></PolarArea>
                </div>
            </div>
        )
    }
}