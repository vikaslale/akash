import React, {Component} from 'react'

export default class Student extends Component{
    render(){
        return(
            <div>
                <h1>hello {this.props.name}</h1>
                </div>
        )
    }
}