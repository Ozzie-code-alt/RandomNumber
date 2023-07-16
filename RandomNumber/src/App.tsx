import './App.css'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react'
function App() {

const [value, setValue] = useState(0)

let randomBtn = ()=>{
// console.log(Math.random() * (0 - 100) + 100)
let converted = Math.random() * (0 - 100) + 100
  setValue(Math.floor(converted))
}


  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center bg-success bg-gradient">
        <div className="central-container container-xl text-center">
          <div className="title-container">
            <h1>Random Number Generator</h1>
          </div>
    
            <div className="container ">
            <button type='button' className='btn btn-outline-primary' onClick={randomBtn}>Random Number</button>
            </div>
            <div className="displayhehe">
              <span>{value}</span>
            </div>

        </div>

      </div>

   
  
    </>
  )
}

export default App
