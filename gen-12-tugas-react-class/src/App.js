import Time from "./Time"
import {useState} from "react"

function App(){
  const [format, setFormat] = useState("12-h")
  return <>
  <div>
    <h1>Hello</h1>
    <div>
      <button className="format-btn" onClick={() => format === "24-h"? setFormat("12-h"): setFormat("24-h")}>Change format</button>
      <Time format={format}></Time>
    </div>
  </div>
  </>
}

export default App