import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import ModalComponnent from '../modal/ModalComponnent'


class TodoFunction extends Component {
    state = {
        title: '',
        inputArrey: [],
        select: new Set(),
        active: false,
        show: false,
        modal: false,
        index: '',
        description: '',
        isLoader:true
    }


    componentDidMount() {
        fetch('http://localhost:3001/task', {
            method: "GET"
        })
            .then(res => res.json())
            .then(date =>
                this.setState({ inputArrey: date })
            )
            .catch(err=>console.log("error",err))
            .finally(() => setTimeout(() => {
                this.setState({ isLoader: false })
            }, 1000))
    }
    hendelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // add inputArrey 

    hendelSubmit = (data) => {
        const { index, inputArrey, title, description } = this.state
        let editUp = {title,description,index}
        if ((data.title !== "") && (data.description !== '')) {
            if (index !== '') {
             let arr = inputArrey.map(el => (
                    el._id === index ?  el = editUp: el))
                fetch(`http://localhost:3001/task/${index}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title, description })
                })
                    .then(res => res.json())
                    .then(data =>{  
                        if (data.err)
                        throw data.err
                        
                    })
                    .catch(err => console.log("error",err))
                    .finally(() => setTimeout(() => {
                        this.setState({ isLoader: false })
                    }, 1000))
                    this.setState({ inputArrey:arr,index: '',title:'', description:'' })    
                        
                    
            } else {
                fetch('http://localhost:3001/task', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: data.title, description: data.description })
                })
                 .then(res => res.json())
                 .then(data => {let arr = [...inputArrey,data]
                    this.setState({ inputArrey: arr })
                     if(data.err) 
                       throw data.err})
                 .catch(err => console.log("error", err))
                 .finally(() => setTimeout(() => {
                    this.setState({ isLoader: false })
                }, 1000))
               
            }

            this.setState({ title: '', description: '',index:'', active: false, show: false })
        }
    }
    //add enter inputArrey
    hendelPress = (event, data) => {
        if (event.key === 'Enter') {
            this.hendelSubmit(data)
        }
    }
    //delete one item 

    removeitems = (id) => {
        let { select } = this.state
        let selectId = select.add(id)
        this.setState({ select: selectId })
        this.allModallDelete()

    }
    // cheking all inputcheck
    inputArreyFun = () => {
        let { select, inputArrey } = this.state
        let chengeActive = inputArrey.map((item) => select.has(item._id) ? { ...item, active: true } : { ...item, active: false })
        this.setState({ inputArrey: chengeActive })
    }
    // delete all items
    removeSelect = () => {
        const { select,inputArrey } = this.state
        let arr = []
        for (let key of select) {
         arr.push(key)
        }
        if(arr.length >1){
            fetch(`http://localhost:3001/task`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tasks: arr })
            })
                .then(res => res.json())
                .then(data => {
                    if(data.err) 
                    throw data.err
                })
                .catch(err => console.log(err))
                .finally(() => setTimeout(() => {
                    this.setState({ isLoader: false })
                }, 1000))

            }else if(arr.length === 1){
                fetch(`http://localhost:3001/task/${arr}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.err) 
                        throw data.err
                    })
                    .catch(err => console.log(err))
                    .finally(() => setTimeout(() => {
                        this.setState({ isLoader: false })
                    }, 1000))
            }
            
        let removeAllSelect = inputArrey.filter((item) => !this.state.select.has(item._id))

        this.setState({ inputArrey: removeAllSelect,index:'', active: false })
    }

    // add all id in select

    selectAllTasks = () => {
        let { select, inputArrey } = this.state
        for (let key of inputArrey) {
            if (select.has(key._id)) {
                select.delete(key._id)
            } else select.add(key._id)
        }
        this.inputArreyFun()
        this.setState({ active: !this.state.active ,index:''})
    }

    //cansel one inputcheced

    hendelcansel = () => {
        let { select } = this.state
        select.clear()
        this.inputArreyFun()
        this.setState({ active: !this.state.active ,index:''})
    }

    //open modal input

    handleClose = () => {
        this.setState({ show: !this.state.show ,index:''})
    }

    hendelechange = (id) => {
        let { select } = this.state
        if (select.has(id)) {
            select.delete(id)
        } else select.add(id)
        this.setState({ select })
        if (select.size > 0) {
            this.setState({ active: true })
        } else this.setState({ active: false })
        this.inputArreyFun()
    }

    //delete || censel item modal 

    responsDelete = (bol) => {
        if (bol > 0) {
            this.removeSelect()
        } else this.hendelcansel()
        this.setState({ modal: !this.state.modal,index:'', active: false })
    }

    //open modal

    allModallDelete = () => {
        this.setState({ modal: !this.state.modal ,index:''})
    }

    editItem = (item) => {
        const { inputArrey } = this.state
        let edit = inputArrey.find((el) => el._id === item)
        const { title, description, _id } = edit
        this.handleClose()
        this.setState({ index: _id, title, description })

    }

    render() {
        return (
            <Container className="container center-align truncate">
                <ModalComponnent
                    modal={this.state.modal}
                    responsDelete={this.responsDelete} />
                <>
                    <Row className="justify-content-center">
                        <Col className="col-lg-2">
                            <h3>Todo list</h3>
                        </Col>
                    </Row>
                    <InputTodo
                        {...this.state}
                        hendelSubmit={this.hendelSubmit}
                        hendelChange={this.hendelChange}
                        hendelPress={this.hendelPress}
                        handleClose={this.handleClose}

                    />
                    <TodoList
                        {...this.state}
                        editItem={this.editItem}
                        allModallDelete={this.allModallDelete}
                        removeitems={this.removeitems}
                        responsDelete={this.responsDelete}
                        hendelechange={this.hendelechange}
                        selectAllTasks={this.selectAllTasks}
                        hendelcansel={this.hendelcansel}
                    />
                </>

            </Container>
        )
    }
}



export default TodoFunction