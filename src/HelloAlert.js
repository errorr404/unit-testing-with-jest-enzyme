import React from 'react'

class HelloAlert extends React.Component {
    showAlert = (e) =>{
        e.preventDefault()
        alert('Hello World!!!')
    }
    render(){
        return(
            <div>
                <h1 onClick = {this.showAlert}>Hello world</h1>
            </div>
        )
    }
}
export default HelloAlert