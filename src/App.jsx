import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://media3.giphy.com/media/iFmw13LV1hHhViPPWz/giphy.gif?cid=790b761119325c966fcf3fa30906fa9248b993ce5bf41708&rid=giphy.gif&ct=s' className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <h1><strong>What is react?</strong></h1>
          <ul><li>React is a free framework that is popular because it's the easiest out there!.</li></ul>
          
        </p>
        <p>
          <h1><strong>What is vite?</strong></h1>
          <ul><li>Vite is a framework that is easy and has a function that automatically updates when you are coding!</li></ul>
        </p>
      </header>
    </div>
  )
}

export default App
