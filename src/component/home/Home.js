import React, { Component } from 'react'

class Home extends Component {
    state={
        url:[]
    }

    componentDidMount (){
       fetch('http://localhost:3001/task')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    render() {
        console.log(this.state.url)
        return (
            <div>
               <h1>hello</h1> 
            </div>
        )
    }
}


export default Home