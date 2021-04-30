import React, { Component } from 'react'
import Student from'./student';
export default class App extends Component {
   constructor(props){
     super(props);
     console.log("app - Constructor called");
     console.log(props);
     this.state ={
       roll: '101'
     };
   }
   static getDerivedStateFromProps(props,state){
     console.log("aApp-get Derived state from Props");
     console.log(props, state);
     return null;
   }
  render() {
    return (
      <div>
          <Student name="Rahul"/>
      </div>
    )
  }
}
