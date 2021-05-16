import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
   
    constructor(props){
      super(props)
      this.date = new Date();
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
      this.ampm = this.hours >= 12 ? 'PM' : 'AM';
      this.hours = this.hours % 12;
      this.hours = this.hours ? this.hours : 12;
     
      this.state={
        hour:this.hours,
        minute:this.minutes,
        second:this.seconds,
        amORpm:this.ampm

      }
    }
    render() {

        return(
            <>
               <div id="time">{this.state.hour+":"+this.state.minute+":"+this.state.second+" "+this.state.amORpm}</div>
            </>
        )
    }
  
    componentDidMount(){
       this.myinterVal = setInterval(()=>{
          this.date = new Date();
          this.hours = this.date.getHours();
          this.minutes = this.date.getMinutes();
          this.seconds = this.date.getSeconds();
          this.ampm = this.hours >= 12 ? 'PM' : 'AM';
          this.hours = this.hours % 12;
          this.hours = this.hours ? this.hours : 12;
         this.setState(prev=>({
            hour:this.hours,
            minute:this.minutes,
            second:this.seconds,
            amORpm:this.ampm
         }))
       },1000);
    }

    componentWillUnmount(){
      clearInterval(this.myinterVal);
    }

}


export default App;
