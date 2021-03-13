import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import ModalComponnent from '../modal/ModalComponnent'
import PropTypes from 'prop-types';

class TodoFunction extends Component {
    state = {
        inputValue: '',
        inputArrey: [],
        select: new Set(),
        active: false,
        show:false,
        modal:false,
        index:'',
        text:''
    }
    hendelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // add inputArrey 

    hendelSubmit = (data) => {
        const {index,inputArrey} =this.state
        if (( data.inputItem !== "") && ( data.text !== '')) {
            if(index !== ''){
                 let input =inputArrey.map(el => (
                        el.id === index ? el = data : el))
                  this.setState({inputArrey:input , index:''})    
            } else {
            const test = [...inputArrey, data]
            this.setState({ inputArrey: test })
            }
            this.setState({  inputValue: '',text:'', active: false,show:false })
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
        let {select} = this.state
         let selectId = select.add(id)
         this.setState({select:selectId})
         this.allModallDelete()

    }
     // cheking all inputcheck
    inputArreyFun = () => {
        let { select, inputArrey } = this.state
        let chengeActive = inputArrey.map((item) => select.has(item.id) ? { ...item, active: true } : { ...item, active: false })
        this.setState({ inputArrey: chengeActive })
    }
   // delete all items
    removeSelect = () => {       
        let removeAllSelect = this.state.inputArrey.filter((item) => !this.state.select.has(item.id))
        this.setState({ inputArrey: removeAllSelect, active: false })
    }
    
    // add all id in select

    selectAllTasks = () => {
        let { select, inputArrey } = this.state
        for (let key of inputArrey) {
            if (select.has(key.id)) {
                select.delete(key.id)
            } else select.add(key.id)
        }
        this.inputArreyFun()
        this.setState({ active: !this.state.active })
    }
    
    //cansel one inputcheced

    hendelcansel = () => {
        let { select } = this.state
        select.clear()
        this.inputArreyFun()
        this.setState({ active: !this.state.active })
    }

    //open modal input

    handleClose =()=>{
        this.setState({show:!this.state.show})
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

    responsDelete =( bol)=>{
        if(bol === true) {
         this.removeSelect()
        }else this.hendelcansel()
        this.setState({modal:!this.state.modal,active: false })
    }
   
   //open modal

    allModallDelete = ()=>{
        this.setState({modal:!this.state.modal }) 
    }

    editItem = (item)=>{
     const {inputArrey}=this.state
     let edit = inputArrey.find((el)=>el.id === item)
     const {inputItem,text,id}=edit
     this.handleClose()
   this.setState({index:id,inputValue:inputItem,text})
   
    }

    render() {

        return (
            <Container className="container center-align truncate">
              <ModalComponnent 
              modal = {this.state.modal}
              responsDelete={this.responsDelete}/>:
              <>
                <Row className="justify-content-center">
                    <Col className="col-lg-6">
                        <h3>Todo list</h3>
                    </Col>
                </Row>
                <InputTodo
                    {...this.state}
                    hendelSubmit={this.hendelSubmit}
                    hendelChange={this.hendelChange}
                    hendelPress={this.hendelPress}
                    handleClose = {this.handleClose}
                    
                />
                <TodoList
                    {...this.state}
                    editItem = {this.editItem}
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

TodoFunction.prototype={
    inputValue: PropTypes.string,
    inputArrey:PropTypes.array ,
    select: PropTypes.object,
    active: PropTypes.bool,
    show:PropTypes.bool,
    modal:PropTypes.bool,
    index:PropTypes.string,
    text:PropTypes.string,
    editItem :PropTypes.func,
    allModallDelete:PropTypes.func,
    removeitems:PropTypes.func,
    responsDelete:PropTypes.func,
    hendelechange:PropTypes.func,
    selectAllTasks:PropTypes.func,
    hendelcansel:PropTypes.func,
    hendelSubmit:PropTypes.func,
    hendelChange:PropTypes.func,
    hendelPress:PropTypes.func,
    handleClose :PropTypes.func,             
}

export default TodoFunction