import React, { Component } from 'react';
import { Col, Modal, Button } from "react-bootstrap";
import TodoLoader from '../loader/TodoLoader';
import ModalComponnent from '../modal/ModalComponnent';
import InputTodo from '../todo/InputTodo';

class SinglPach extends Component {

    state = {
        modal: false,
        isLoader: true,
        title: '',
        description: '',
        show: false
    }

    componentDidMount() {
        this.setState({ isLoader: true })
        const { id } = this.props.match.params
        fetch(`http://localhost:3001/task/${id}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ title: data.title, description: data.description })
            }
            )
            .catch(err => console.log("get reqvest is error", err))
            .finally(() => this.setState({ isLoader: false }))
    }
    hendelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    hendelSubmit = () => {
        this.setState({ isLoader: true })
        const { id } = this.props.match.params
        const { title, description } = this.state
        fetch(`http://localhost:3001/task/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        })
            .then(res => res.json())
            .then(data => {
                if (data.err)
                    throw data.err
                this.setState({ title: data.title, description: data.description, index: '' })
            })
            .catch(err => console.log("error", err))
            .finally(() => setTimeout(() => {
                this.setState({ isLoader: false })
            }, 1000))
        this.setState({ show: false })
    }

    editItem = () => {
        this.setState({ show: true })
    }

    responsDelete = (bol) => {
        if (bol) {
            this.setState({ isLoader: true })
            const { id } = this.props.match.params
            fetch(`http://localhost:3001/task/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.err)
                        throw data.err
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setTimeout(() => {
                        this.setState({ isLoader: false, modal: false })
                        this.props.history.go(-1)
                    }, 1000)
                })
        }
        this.setState({ modal: false })

    }

    removeitems = () => {
        this.setState({ modal: true })
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    render() {
        const { inputArrey, modal, isLoader, show, title, description } = this.state
        const { id } = this.props.match.params
        return (
            <div>
                <Col className="input-group col-lg-12 " style={{ justifyContent: 'center', alignItems: "center" }}>
                    {isLoader ? <TodoLoader /> :


                        <Modal.Dialog style={{ width: "100%" }}>

                            <Modal.Header >
                                <Modal.Title>{title}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body className="text-left">
                                <p style={{ lineBreak: "anywhere", overflow: "auto", height: "10vh" }}>{description}</p>
                            </Modal.Body>

                            <Modal.Footer>

                                <Button
                                    className={"btn-danger  input-group-text btn btn-danger"}

                                    onClick={this.editItem}
                                >
                                    <i className=" bi bi-pin-angle"></i>
                                </Button>
                                <Button
                                    className="input-group-text btn btn-danger"
                                    onClick={this.removeitems}
                                >
                                    <i className="bi bi-trash" ></i>
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>


                    }
                </Col>
                <ModalComponnent modal={modal} responsDelete={this.responsDelete} />
                { show &&
                    <InputTodo
                        show={show}
                        title={title}
                        description={description}
                        handleClose={this.handleClose}
                        hendelSubmit={this.hendelSubmit}
                        hendelChange={this.hendelChange}
                    />}
            </div>
        )
    }
}


export default SinglPach



