import React, { useEffect, useState } from "react"
import SplitTime from "./SplitTime"
import TimeFormat from "./TimeFormat"
import { BsFillPlayFill, GrPowerReset, BsStopFill, BsFillPenFill } from "react-icons/all"

function Stopwatch(){
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [millisecond, setMillisecond] = useState(0)
  const [stop, setStop] = useState(true)
  const [reset, setReset] = useState(false)
  const [split, setSplit] = useState([])

  useEffect(() => {
    if(!stop){
      setTimeout(() => {
        setMillisecond(millisecond + 1)
        setSecond(Math.floor(millisecond / 1000) % 60)
        setMinute(Math.floor(millisecond / 1000 / 60) % 60)
        setHour(Math.floor(millisecond / 1000 / 60 / 60))
      }, 1)
    }
  }, [millisecond])

  const onStartClickHandler = () => {
    if(reset){
      setMillisecond(1)
      setReset(false)
    }else {
      setMillisecond(millisecond+1)
    }
    setStop(false)
  }

  const onStopClickHandler = () => {
    setStop(true)
  }

  const onResetClickHandler = () => {
    setReset(true)
    setMillisecond(0)
    setSecond(0)
    setMinute(0)
    setHour(0)
    setSplit([])
  }

  const onSplitClickHandler = (time) => {
    setSplit([...split, {id: new Date().getTime(),...time}])
  }

  const renderedMs = millisecond %  1000
  return <>
    <div className="stopwatch">
      <div className="time">
        <TimeFormat hour={hour} minute={minute} second={second} millisecond={renderedMs}/>
        {
          stop ? 
          <div>
            <button onClick={onStartClickHandler}>
              <BsFillPlayFill/>
            </button>
            <button onClick={onResetClickHandler}>
              <GrPowerReset/>
            </button>
          </div> :
          <div>
            <button onClick={onStopClickHandler}>
              <BsStopFill/>
            </button>
            <button onClick={() => onSplitClickHandler({hour, minute, second, millisecond: renderedMs})}>
              <BsFillPenFill/>
            </button>
          </div> 
        }
      </div>
      {split.length !== 0 ? <SplitTime split={split}/> : <p>Empty</p>}
    </div>
  </>
}

export default Stopwatch