import React from 'react';
import './sort.modal.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { openShowSotrModal } from '../../store/actions/onOffModale';
import { sortSubmit } from '../../store/actions/actionReqvest';
import { changeSortData, resetData, getTodoItems } from "../../store/actions/actionReqvest"


function SortTodo({
    openShowSotrModal,
    sortSubmit,
    sortData,
    changeSortData,
    resetData,
    getTodoItems }) {
    const changeModalSort = () => {
        openShowSotrModal()
    }
    const handleChange = (e) => {
        changeSortData(e.target)
    }
    const handleSubmit = () => {
        sortSubmit(sortData)
    }

    const resetReqvest = () => {
        getTodoItems()
        resetData()
    }


    return (
        <>
            <Button
                className="sortBox"
                onClick={changeModalSort}
            >
                Sort todo
            <i className="bi bi-arrow-down "></i>
            </Button>
            <Form inline>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-sm-2"
                    name="search"
                    onChange={handleChange}
                    value={sortData.search}
                />
                <Button
                    variant="outline-success"
                    onClick={handleSubmit}
                >
                    <i className="bi bi-search"></i>
                </Button>
                <Button
                    variant="outline-success"
                    onClick={resetReqvest}
                >
                    <i className="bi bi-trash-fill"></i>
                </Button>
            </Form>
        </>
    )
}

const mapStateToProps = (state) => ({
    sortData: state.globaleReducer.sortData
})

const mapDispatchToProps = {
    openShowSotrModal,
    sortSubmit,
    changeSortData,
    resetData,
    getTodoItems
}

export default connect(mapStateToProps, mapDispatchToProps)(SortTodo)