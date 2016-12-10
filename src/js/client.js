import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import DefaultLayout from "./components/layout/DefaultLayout"
import Home from "./pages/Home"
import About from "./pages/About"

const app = document.getElementById('app')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={DefaultLayout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about(/:favorite)" component={About}></Route>
        </Route>
    </Router>,
app)