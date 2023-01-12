import { Component } from "react";
import './App.css'

class Time extends Component {
  constructor(props){
    super(props)
    this.newDate = this.milisecondToReadableTime(Date.now(), this.props.format)
    this.state = {
      hour: this.newDate.hour,
      minute: this.newDate.minute,
      second: this.newDate.second,
      color: 'red-bg',
      stop: false
    }
  }
  milisecondToReadableTime(ms, format){
    const second = Math.floor((ms / 1000)) % 60
    const minute = Math.floor((ms / 1000 / 60)) % 60
    let hour = Math.floor((ms / 1000 / 60 / 60))

    if(format === "24-h"){
      hour = (hour + 7) % 24
    }else if(format === "12-h"){
      hour = (hour + 7) % 12
    }

    return {second: second, minute: minute, hour: hour}
  }
  componentDidUpdate(prevProps, prevState){
    if (!this.state.stop){
      setTimeout(()=>{
        this.setState({
          hour: this.milisecondToReadableTime(Date.now(), this.props.format).hour,
          minute: this.milisecondToReadableTime(Date.now(), this.props.format).minute,
          second: this.milisecondToReadableTime(Date.now(), this.props.format).second
        })
      }, 1000)
    }else {
      if(prevState.stop !== this.state.stop){
        setTimeout(()=>{
          this.setState({color: 'red-bg'})
        }, 100)
        // alert('The clock stopped')
      }
      if(prevProps.format !== this.props.format){
        this.setState({hour: this.milisecondToReadableTime(Date.now(), this.props.format).hour})
      }
    }
  }
  render(){
    // const start = ()=>{
    //   console.log('start')
    //   console.log(this.state)
      // this.setState({
      //   hour: this.milisecondToReadableTime(Date.now()).hour, 
      //   minute: this.milisecondToReadableTime(Date.now()).minute, 
      //   second: this.milisecondToReadableTime(Date.now()).second, 
      //   stop: false, 
      //   color: 'blue-bg'})
    // }
    const stop = function(){
      this.setState({stop: true}) 
    }
    return <>
    <div className={"time-bg " + this.state.color}>
      <h2>{this.state.hour < 10 ? `0${this.state.hour}`: this.state.hour}
      :{this.state.minute < 10 ? `0${this.state.minute}`: this.state.minute}
      :{this.state.second < 10 ? `0${this.state.second}`: this.state.second}</h2>
      <button onClick={() => this.setState({
        hour: this.milisecondToReadableTime(Date.now(), this.props.format).hour, 
        minute: this.milisecondToReadableTime(Date.now(), this.props.format).minute, 
        second: this.milisecondToReadableTime(Date.now(), this.props.format).second, 
        stop: false, 
        color: 'blue-bg'})}>Start</button>
      <button onClick={() => stop}>Stop</button>
    </div>
    </>
  }
}

export default Time