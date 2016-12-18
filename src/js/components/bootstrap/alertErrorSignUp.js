import React from "react"
import { Alert, Button } from "react-bootstrap"


export default class Signup extends React.Component {

    handleSubmit (e) {
        e.preventDefault()
    }

    render() {
        if (this.props.alertVisible) {
            return (
                <Alert bsStyle="danger" onDismiss={this.props.hideAlert}>
                    <h4>Oh, sorry about that!</h4>
                    <p>This username/email is already in use, maybe you forgot your login?</p>
                    <p>Try to signup with another username/email, or try to recover your password!</p>
                    <p class="text-right">
                        <Button onClick={this.props.hideAlert} class="btn-warning">Understood</Button>
                    </p>
                </Alert>
            );
        }
        else {
            return (null)
        }
    }

}