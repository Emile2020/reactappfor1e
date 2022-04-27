import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <undefined   setCount={setCount} count={count}  />
        <whatis     />
        <startjourney     />
      </header>
    </div>
  )
}

export default App

    function navbar({}) {
      return (<div className='navbar'>
          <a href="#What is react?">What is react?</a>
          <a href="#What is vite?">What is vite?</a>
          <a href="#start your journey">How do I start?</a>
        </div>);
    }

    function undefined({setCount, count}) {
      return (<><img src='https://media3.giphy.com/media/iFmw13LV1hHhViPPWz/giphy.gif?cid=790b761119325c966fcf3fa30906fa9248b993ce5bf41708&rid=giphy.gif&ct=s' className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <navbar />
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p></>);
    }

    function startjourney({}) {
      return (<p id='start your journey'>
          <br />
          <h2><em>Want to start your journey in making sites?</em></h2>
          <h3>Below are some good places too start learning!</h3>
          <ul>
            <li><h4>Mimo!</h4>
              <ul>
                <li>
                  Mimo is duolingo but for learning too make sites or code in python!
                </li>
              </ul>
            </li>
            <li>
              <h4>Code academy!</h4>
              <ul>
                <li>Code academy is a paid learning app. we haven't used it but the reviews are good.</li>
              </ul>
            </li>
            <li>
              <h4>Or just learn it yourself and through stackoverflow!</h4>
              <ul>
                <li>
                  This is a hard way but still works!
                </li>
              </ul>
            </li>
          </ul>
        </p>);
    }

    function whatis({}) {
      return (<><p>
          <br id='What is react?' />
          <h1><strong>What is react?</strong></h1>
          <ul><li>React is a free framework that is popular because it's the easiest out there!.</li></ul>

        </p>
        <p>
          <br id='What is vite?' />
          <h1><strong>What is vite?</strong></h1>
          <ul><li>Vite is a framework that is easy and has a function that automatically updates when you are coding!</li></ul>
        </p></>);
    }
        