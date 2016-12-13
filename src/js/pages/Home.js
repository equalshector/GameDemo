import React from "react"
import { IndexLink, Link } from "react-router"

import { Modal, Button } from "react-bootstrap"
import Signup from "../components/modal/Signup"

import PolarArea from "../components/graphs/ChartPolarArea"



export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {modalShow: false}
    }

    hideModal() {
        this.setState({ modalShow: false })
    }

    showModal() {
        this.setState({ modalShow: true })
    }


    charData = [
        {
            value: 48775,
            color: "#848484",
            highlight: "#c9c9c9",
            label: "Council"
        },
        {
            value: 65610,
            color: "#5f8c77",
            highlight: "#a4d6bf",
            label: "Invaders"
        },
        {
            value: 85600,
            color:"#b56767",
            highlight: "#ffb5b5",
            label: "Divines"
        },
    ];

    render() {
        return (
            <div id="home">
                <div class="jumbotron">
                    <div class="container text-center">
                        <h1>The Monster Game</h1> 
                        <p>Turn Based Strategy Game<br/>Show your Friends who are they dealing with!</p>
                    </div>
                </div>
                <div class="main-classes container">
                    <div class="col-md-4">
                        <img src="../../img/shield1.png" />
                        <h3>The Divines</h3>
                        <div>Tip the Balance of POWER to your will!</div>
                        <ul>
                            <li>+25% Attack</li>
                            <li>+25% Defense</li>
                        </ul>
                        <p><Button class="btn btn-danger" onClick={this.showModal.bind(this)}>Join the Divines!</Button></p>
                    </div>
                    <div class="col-md-4">
                        <img src="../../img/shield2.png" />
                        <h3>The Invaders</h3>
                        <div>Use Advanced Tach to Conquer ALL!</div>
                        <ul>
                            <li>+20% Attack</li>
                            <li>+20% Defense</li>
                            <li>+10% Army</li>
                        </ul>
                        <p><Button class="btn btn-success" onClick={this.showModal.bind(this)}>Join the Invaders!</Button></p>

                    </div>
                    <div class="col-md-4">
                        <img src="../../img/shield3.png" />
                        <h3>The Council</h3>
                        <div>Raise the Dead and Defend yourself!</div>
                        <ul>
                            <li>+40% Army</li>
                            <li>+10% Defense</li>
                        </ul>
                        <p><Button class="btn btn-primary" onClick={this.showModal.bind(this)}>Join the Council!</Button></p>
                    </div>
                </div>
 
                <div id="maingraph" class="text-center">
                    <h3>The Armies</h3>
                    <PolarArea charData={this.charData}></PolarArea>
                </div>

                <Signup modalShow={this.state.modalShow} hideModal={this.hideModal.bind(this)}/>
            </div>
        )
    } 
}