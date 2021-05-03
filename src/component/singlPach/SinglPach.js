import React from 'react';
import { Col, Modal, Button } from "react-bootstrap";
import TodoLoader from '../loader/TodoLoader';
import ModalComponnent from '../modal/ModalComponnent';
import InputTodo from '../todo/InputTodo';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSinglPach } from '../../store/actions/actionReqvest';
import { isOpenMoalEdit, MoalComponent } from '../../store/actions/onOffModale';
import { reqvestChangeStatus } from '../../store/actions/actionReqvest';
import DatePicker from 'react-datepicker';



function SinglPach(props) {
    const { getSinglPach, singlArray, isOpenMoalEdit, MoalComponent, reqvestChangeStatus, show } = props
    const [inputs, setInputs] = React.useState({})
    const { id } = props.match.params
    React.useEffect(() => {
        if (inputs !== singlArray) {
            
            setInputs(singlArray)
        }
    });

    
    React.useEffect(() => {
        getSinglPach(id)
      
    },[id]);

    const editItem = (id) => {
        isOpenMoalEdit(id)
    };


    const removeitems = (id) => {
        MoalComponent(id)
    }
    const changeStatus = (id, status) => {
        let itemStatus = '';
        if (status === 'active') itemStatus = 'done'
        else if (status === 'done') itemStatus = 'active'
        reqvestChangeStatus(id, itemStatus)
    }


    const { isLoader } = props

    return (
        <div>

            <Col className="input-group col-lg-12 " style={{ justifyContent: 'center', alignItems: "center" }}>
                {isLoader ? <TodoLoader /> :


                    <Modal.Dialog style={{ width: "100%" }}>
                        <span></span>
                        <Modal.Header >
                            <Modal.Title>{inputs.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="text-left">
                            <p style={{ lineBreak: "anywhere", overflow: "auto", height: "10vh" }}>{inputs.description}</p>
                            <DatePicker
                                className="form-control"
                                value={new Date(inputs.date).toDateString()}
                                readOnly={true}
                            />
                        </Modal.Body>

                        <Modal.Footer>

                            <Button
                                className={"btn-danger  input-group-text btn btn-danger"}

                                onClick={() => editItem(inputs._id)}
                            >
                                <i className=" bi bi-pin-angle"></i>
                            </Button>
                            <Button
                                className={"btn-danger  input-group-text btn btn-danger"}
                                onClick={() => changeStatus(inputs._id, inputs.status)}
                            >
                                {singlArray.status === "active" ? <i className="bi bi-check-circle"></i> : <i className="bi bi-arrow-repeat"></i>}
                            </Button>
                            <Button
                                className="input-group-text btn btn-danger"
                                onClick={() => removeitems(inputs._id)}
                            >
                                <i className="bi bi-trash" ></i>
                            </Button>

                        </Modal.Footer>
                    </Modal.Dialog>


                }
            </Col>
            <ModalComponnent />
            { show && <InputTodo />}

        </div>
    )
}
const mapStateToProps = (state) => ({
    singlArray: state.globaleReducer.singlArray,
    isLoader: state.globaleReducer.isLoader,
    show: state.modalReducer.show,
})
const mapDispatchToProps = {
    getSinglPach,
    isOpenMoalEdit,
    MoalComponent,
    reqvestChangeStatus

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SinglPach))



