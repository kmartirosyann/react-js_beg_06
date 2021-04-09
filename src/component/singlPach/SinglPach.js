import React from 'react';
import { Col, Modal, Button } from "react-bootstrap";
import TodoLoader from '../loader/TodoLoader';
import ModalComponnent from '../modal/ModalComponnent';
import InputTodo from '../todo/InputTodo';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getSinglPach from '../../store/actions/getSinglPach';
import updateSinglPach from '../../store/actions/updateSinglPach';
import {  
    isOpenMoalEdit ,
    remuveMoalComponent,
    clossMoalComponent
} from '../../store/actions/changeSinglePach';
import deleteSinglePach from '../../store/actions/deleteSinglePach'


function SinglPach(props) {
    const { title, description } = props.data
    const [state, setState] = React.useState({title,description})
const {getSinglPach , 
    isOpenMoalEdit ,
    remuveMoalComponent,
    clossMoalComponent,
    deleteSinglePach}=props

    React.useEffect(() => {
        const { id } = props.match.params
       getSinglPach(id)
    }, [])


    const hendelChange = (e) => {
        setState({[e.target.name]:e.target.value})
    }

    const hendelSubmit = () => {
        const { id } = props.match.params
        const { title, description } = state
        updateSinglPach(title,description,id)
    }

    const editItem = () => {
     isOpenMoalEdit() 

    }
    const removeitems = () => {
        remuveMoalComponent()
    }

    const responsDelete = (bol) => {
        if (bol === 1) {
            const { id } = props.match.params
            deleteSinglePach(id)
             props.history.go(-1)    

        } else clossMoalComponent()

    }
    
    const handleClose = () => {
        clossMoalComponent()
    }
const {data,isLoader,show,modal,errMesage }= props
    return (
        <div>

            <Col className="input-group col-lg-12 " style={{ justifyContent: 'center', alignItems: "center" }}>
                {isLoader ? <TodoLoader /> :

                    
                    <Modal.Dialog style={{ width: "100%" }}>
                       <span>{errMesage}</span>
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
const mapStateToProps = (state)=>({
    data:state.singlData,
    isLoader:state.isLoader,
    show:state.show,
    modal:state.modal,
    errMesage:state.errMesage
})
const mapDispatchToProps ={
    getSinglPach,
    updateSinglPach,
    isOpenMoalEdit ,
    remuveMoalComponent,
    deleteSinglePach,
    clossMoalComponent,

}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SinglPach)) 



