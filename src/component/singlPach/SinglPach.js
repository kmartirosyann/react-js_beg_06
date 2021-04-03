import React from 'react';
import { Col, Modal, Button } from "react-bootstrap";
import TodoLoader from '../loader/TodoLoader';
import ModalComponnent from '../modal/ModalComponnent';
import InputTodo from '../todo/InputTodo';
import { withRouter } from 'react-router-dom';
import { MovieContext } from "../../component/context/MovieContext";

function SinglPach(props) {
    const { state, dispatch } = React.useContext(MovieContext);


    React.useEffect(() => {
        dispatch({
            type: "DATA_ID",
            payload: props.match.params.id,
            method: "get"
        });
    }, [])


    const hendelChange = (e) => {
        dispatch({
            type: "CHANG_ITEM",
            payload: { [e.target.name]: e.target.value }
        })
    }

    const hendelSubmit = () => {
        const { id } = props.match.params
        const { title, description } = state.data
        fetch(`http://localhost:3001/task/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        })
            .then(res => res.json())
            .then(data => {
                if (data.err)
                    throw data.err
                dispatch({
                    type: "PUT_DATA_ITEM",
                    payload: data,
                });
            })
            .catch(err => console.log("error", err))


    }

    const editItem = () => {
        dispatch({
            type: "SHOW_MODAL",
            payload: true,
        });
    }
    const removeitems = () => {
        dispatch({
            type: "EVENT_MODAL",
            payload: true,
        });
    }

    const responsDelete = (bol) => {
        if (bol === 1) {
            const { id } = props.match.params
            fetch(`http://localhost:3001/task/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.err)
                        throw data.err
                    dispatch({
                        type: "DELETE_DATA_ITEM",
                        payload: data,
                    });
                    props.history.go(-1)
                })
                .catch(err => console.log(err))

        } else dispatch({
            type: "EVENT_MODAL",
            payload: false,
        });

    }
    
    const handleClose = () => {
        dispatch({
            type: "CLOSE_MODAL",
            payload: true,
        });
    }


    const { data, modal, show } = state
    const { id } = props.match.params
    return (
        <div>

            <Col className="input-group col-lg-12 " style={{ justifyContent: 'center', alignItems: "center" }}>
                {state.isLoader ? <TodoLoader /> :


                    <Modal.Dialog style={{ width: "100%" }}>

                        <Modal.Header >
                            <Modal.Title>{data.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="text-left">
                            <p style={{ lineBreak: "anywhere", overflow: "auto", height: "10vh" }}>{data.description}</p>
                        </Modal.Body>

                        <Modal.Footer>

                            <Button
                                className={"btn-danger  input-group-text btn btn-danger"}

                                onClick={editItem}
                            >
                                <i className=" bi bi-pin-angle"></i>
                            </Button>
                            <Button
                                className="input-group-text btn btn-danger"
                                onClick={removeitems}
                            >
                                <i className="bi bi-trash" ></i>
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>


                }
            </Col>
            <ModalComponnent modal={modal} responsDelete={responsDelete} />
            {show &&
                <InputTodo
                    show={show}
                    title={data.title}
                    description={data.description}
                    handleClose={handleClose}
                    hendelSubmit={hendelSubmit}
                    hendelChange={hendelChange}
                />}

        </div>
    )
}



export default withRouter(SinglPach)



