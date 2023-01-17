import React from "react"

function TimeFormat({hour, minute, second, millisecond}){
  return <>
    <div>{hour < 10 ? `0${hour}` : hour}
    :{minute < 10 ? `0${minute}`: minute}
    :{second < 10 ? `0${second}`: second}
    :{millisecond < 10 ? `00${millisecond}` : millisecond < 100 ? `0${millisecond}` : millisecond}</div>
  </>
}

export default TimeFormat