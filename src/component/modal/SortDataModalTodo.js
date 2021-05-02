import React from 'react';
import { Modal, Container, Button, Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { closeShowSotrModal } from '../../store/actions/onOffModale';
import { changeSortData, sortSubmit, resetData, getTodoItems } from '../../store/actions/actionReqvest';
import './showModal.modal.css'


function SortDataTodo({
    sortModal,
    closeShowSotrModal,
    changeSortData,
    sortData,
    sortSubmit,
    resetData,
    getTodoItems
}) {

    const onOffModal = () => {
        closeShowSotrModal()
    }
    const handleChange = (e) => {
        changeSortData(e.target)
    }
    const handleChangeDay = (name, value) => {
        let date = { name, value }
        changeSortData(date)
    }
    const handleSearch = () => {
        let obj ;
        for(let key in sortData){
            if( key !== "status" && key !== "sort" &&  key !== "search"){
                let day =new Date(sortData[key]).toLocaleDateString()
              obj ={...obj,[key]:day}
            }else obj = {...obj,[key]:sortData[key]}
        }
        sortSubmit(obj)
        closeShowSotrModal()
    }
    const resetReqvest = () => {
        resetData()
        getTodoItems()
    }
 
    return (
        <div>
            <Modal show={sortModal} aria-labelledby="contained-modal-title-vcenter">
                <Form>
                    <Modal.Header closeButton onClick={onOffModal}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Filter todo item
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <fieldset>
                                <legend>Sort :</legend>
                                <select onChange={handleChange} name='sort'>
                                    <option value=''>All</option>
                                    <option value='a-z' >Sort : A-Z</option>
                                    <option value='z-a'>Sort : Z-A </option>
                                    <option value='creation_date_oldest'>Creation date oldest</option>
                                    <option value='creation_date_newest'>Creation date newest</option>
                                    <option value='completion_date_oldest'>Completion date oldest</option>
                                    <option value='completion_date_newest'>Completion date newest</option>

                                </select>
                            </fieldset>
                            <fieldset>
                                <legend>Status :</legend>
                                <select onChange={handleChange} name='status'>
                                    <option value='active' >Active :</option>
                                    <option value='done'>Done :</option>
                                </select>

                            </fieldset>


                            <fieldset>
                                <legend>Created before :</legend>
                                <DatePicker
                                    selected={sortData.create_lte}
                                    onChange={date => handleChangeDay('create_lte', date)}
                                    name='create_lte'
                                />
                            </fieldset>


                            <fieldset>
                                <legend>Created after :</legend>
                                <DatePicker
                                    selected={sortData.create_gte}
                                    onChange={date => handleChangeDay('create_gte', date)}
                                    name='create_gte' />
                            </fieldset>


                            <fieldset>
                                <legend>Completed before :</legend>
                                <DatePicker
                                    selected={sortData.complete_lte}
                                    onChange={date => handleChangeDay('complete_lte', date)}
                                    name='complete_lte' />
                            </fieldset>
                            <fieldset>
                                <legend>Completed after :</legend>
                                <DatePicker
                                    selected={sortData.complete_gte}
                                    onChange={date => handleChangeDay('complete_gte', date)}
                                    name='complete_gte' />
                            </fieldset>


                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onOffModal}>Close</Button>
                        <Button type="button" className="btn btn-success" onClick={handleSearch}>Search</Button>
                        <Button variant="outline-success" onClick={resetReqvest}> <i className="bi bi-trash-fill"></i></Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </div>
    )
}
const mapStateToProps = (state) => ({
    sortModal: state.modalReducer.sortModal,
    sortData: state.globaleReducer.sortData
})

const mapDispatchToprops = {
    closeShowSotrModal,
    changeSortData,
    sortSubmit,
    resetData,
    getTodoItems
}


export default connect(mapStateToProps, mapDispatchToprops)(SortDataTodo)