import "./App.css"
import { useState } from 'react'

function App() { 

// states
const [firstNum, setFirstNum] = useState(0)
const [operator, setOperator] = useState('+')
const [secondNum, setSecondNum] = useState(0)
const [result, setResult] = useState(0)

// num one

const numOneInput = (event) =>{
  if (firstNum === 0){
    setFirstNum(event.target.innerText)
  }
  else {
  setFirstNum(firstNum + event.target.innerText)
  }
}
const clearFirst = () => {
  setFirstNum(0)
}
//num two

const numTwoInput = (event) =>{
  if (secondNum === 0){
    setSecondNum(event.target.innerText)
  }
  else {
  setSecondNum(secondNum + event.target.innerText)
  }
}
const clearSecond = () => {
  setSecondNum(0)
}
// operators

const setAdd = (event)=>{
  setOperator(event.target.innerText)
}
const setSubtract = (event)=>{
  setOperator(event.target.innerText)
}
const setMultiply = (event)=>{
  setOperator(event.target.innerText)
}
const setDivide = (event)=>{
  setOperator(event.target.innerText)
}
// result
const calculate = ()=>{
  if (operator === '+'){
    setResult(parseInt(firstNum) + parseInt(secondNum))
  }
  if (operator === '-'){
    setResult(parseInt(firstNum) - parseInt(secondNum))
  }
  if (operator === '*'){
    setResult(parseInt(firstNum) * parseInt(secondNum))
  }
  if (operator === '÷'){
    setResult(parseInt(firstNum) / parseInt(secondNum))
  }
}

  return (
    <div className="calculator">
        <div className="panel">
          <p>{firstNum}</p>
          <div className="numbers">
            <button onClick={numOneInput}>1</button>
            <button onClick={numOneInput}>2</button>
            <button onClick={numOneInput}>3</button>
            <button onClick={numOneInput}>4</button>
            <button onClick={numOneInput}>5</button>
            <button onClick={numOneInput}>6</button>
            <button onClick={numOneInput}>7</button>
            <button onClick={numOneInput}>8</button>
            <button onClick={numOneInput}>9</button>
            <button onClick={numOneInput}>0</button>
            <button onClick={clearFirst}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick={setAdd}>+</button>
            <button onClick={setSubtract}>-</button>
            <button onClick={setMultiply}>*</button>
            <button onClick={setDivide}>÷</button>
          </div>
        </div>

        <div className="panel">
        <p>{secondNum}</p>
          <div className="numbers">
            <button onClick={numTwoInput}>1</button>
            <button onClick={numTwoInput}>2</button>
            <button onClick={numTwoInput}>3</button>
            <button onClick={numTwoInput}>4</button>
            <button onClick={numTwoInput}>5</button>
            <button onClick={numTwoInput}>6</button>
            <button onClick={numTwoInput}>7</button>
            <button onClick={numTwoInput}>8</button>
            <button onClick={numTwoInput}>9</button>
            <button onClick={numTwoInput}>0</button>
            <button onClick={clearSecond}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={calculate}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
