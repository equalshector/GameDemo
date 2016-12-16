import React from "react"
import { Modal, Button } from "react-bootstrap"


export default class Signup extends React.Component {
    render() {
        return (
            <Modal show={this.props.modalShow} onHide={this.props.hideModal} dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Begin the Fight!</Modal.Title>
                    <h5>Choose wisely you wont be able to change.</h5>
                </Modal.Header>
                <Modal.Body>
                        <form class="form-horizontal">
                        <fieldset>
                            <div class="form-group">
                                <label for="inputUsername" class="col-lg-2 control-label">Username</label>
                                <div class="col-lg-10">
                                    <input type="text" class="form-control" id="inputUsername" placeholder="Username" autocomplete="off" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="inputEmail" class="col-lg-2 control-label">Email</label>
                                <div class="col-lg-10">
                                    <input type="text" class="form-control" id="inputEmail" placeholder="Email" autocomplete="off" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="inputPassword" class="col-lg-2 control-label">Password</label>
                                <div class="col-lg-10">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" autocomplete="off" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="select" class="col-lg-2 control-label">Army</label>
                                <div class="col-lg-10">
                                    <select class="form-control" id="select">
                                        <option>Divine</option>
                                        <option>Invador</option>
                                        <option>Council</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                            <div class="col-lg-10 pull-right text-right">
                                <Button onClick={this.props.hideModal}>Cancel</Button>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            </div>
                        </fieldset>
                        </form>
                </Modal.Body>
            </Modal>
        );
    }
}