import React, { useEffect } from "react"
import TimeFormat from "./TimeFormat"

function SplitTime({split}){

  useEffect(() => {
    return () => {
      alert("has been reset")
    }
  }, [])

  return <>
    <div className="split">
      <ul>
        {
          split.map((time) => {
            return <li key={time.id}><TimeFormat key={time.id} {...time}/></li>
          })
        }
      </ul>
    </div>
  </>
}

export default SplitTime