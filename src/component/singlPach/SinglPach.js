import React from 'react';
import { Col, Modal, Button } from "react-bootstrap";
import TodoLoader from '../loader/TodoLoader';
import ModalComponnent from '../modal/ModalComponnent';
import InputTodo from '../todo/InputTodo';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getSinglPach} from '../../store/actions/actionReqvest';
import {isOpenMoalEdit,MoalComponent} from '../../store/actions/onOffModale'



function SinglPach(props) {
  const {getSinglPach,singlArray,isOpenMoalEdit,MoalComponent} = props
    const [inputs, setInputs] = React.useState({})

    React.useEffect(() => {
        if(!!setInputs.length){
        const{ id } = props.match.params
        getSinglPach(id)
        setInputs(singlArray)
        } 
    }, []);


  
        const editItem =(id)=>{
            isOpenMoalEdit(id)
         };

    
    const removeitems = (id) => {
        MoalComponent(id)
    }



    const {isLoader,show} = props
    return (
        <div>

            <Col className="input-group col-lg-12 " style={{ justifyContent: 'center', alignItems: "center" }}>
                {isLoader ? <TodoLoader /> :


                    <Modal.Dialog style={{ width: "100%" }}>
                        <span></span>
                        <Modal.Header >
                            <Modal.Title>{singlArray.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="text-left">
                            <p style={{ lineBreak: "anywhere", overflow: "auto", height: "10vh" }}>{singlArray.description}</p>
                        </Modal.Body>

                        <Modal.Footer>

                            <Button
                                className={"btn-danger  input-group-text btn btn-danger"}

                                onClick={()=>editItem(singlArray._id)}
                            >
                                <i className=" bi bi-pin-angle"></i>
                            </Button>
                            <Button
                                className="input-group-text btn btn-danger"
                                onClick={()=> removeitems(singlArray._id)}
                            >
                                <i className="bi bi-trash" ></i>
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>


                }
            </Col>
            <ModalComponnent  />
             { show &&  <InputTodo />}

        </div>
    )
}
const mapStateToProps = (state) => ({
    singlArray:state.globaleReducer.singlArray,
    isLoader:state.globaleReducer.isLoader,
    show:state.modalReducer.show,
})
const mapDispatchToProps = {
    getSinglPach,
    isOpenMoalEdit,
    MoalComponent

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SinglPach))



