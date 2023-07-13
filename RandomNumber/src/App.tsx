import './App.css'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import { useEffect,useState } from 'react'
function App() {

const [random, setRandom] = useState(0)

const updateNum((min, max )=>{
  setRandom(Math.random() * (max - min) +min)

})

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center bg-success bg-gradient">
        <div className="central-container container-xl text-center">
          <div className="title-container">
            <h1>Random Number Generator</h1>
          </div>
    
            <div className="container ">
            <button type='button' className='btn btn-outline-primary' onClick={updateNum}>Random Number</button>
            </div>
            <div className="displayhehe">
              
            </div>

        </div>

      </div>

   
  
    </>
  )
}

export default App
