import { useState } from 'react'
/* welcome to my site! */
import './App.css'
import axios from 'axios'
const getnewesturl = "https://jsons.emile2021coding.repl.co/test.json"
function button() {
  window.location.href="https://github.com/Emile2020/reactappfor1e"
}
const isMobile = window.matchMedia("only screen and (max-width: 500px)").matches;
if(isMobile){
  window.location.href = "/error.html"
}
async function getnewest() {
   return axios.get(getnewesturl).then(response => {
    let text = response.data.daily
    console.log(text)
    let image = response.data.message
    console.log(image)
    document.getElementById("daily").innerHTML = text
    document.getElementById("img").src = image
  })
}
function App() {
  const [count, setCount] = useState(0)
  getnewest()
  if(isMobile){
    window.location.href = "https://google.com/notavaible"
  }
  return (
    <div className="App">
      <header className="App-header">
      <img src='https://media3.giphy.com/media/iFmw13LV1hHhViPPWz/giphy.gif?cid=790b761119325c966fcf3fa30906fa9248b993ce5bf41708&rid=giphy.gif&ct=s' className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <button className='button-24' onClick={button}>Want to see how it is made? Click here then!</button>
        <div className='navbar'>
          <a href="#What is react?">What is react?</a>
          <a href="#What is vite?">What is vite?</a>
          <a href="#start your journey">How do I start?</a>
        </div>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <br id='What is react?' />
          <h1><strong>What is react?</strong></h1>
          <ul><li>React is a free framework that is popular because it's the easiest out there!.</li></ul>

        </p>
        <p>
          <br id='What is vite?' />
          <h1><strong>What is vite?</strong></h1>
          <ul><li>Vite is a framework that is easy and has a function that automatically updates when you are coding!</li></ul>
        </p><p id='start your journey'>
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
          
        </p> <p><h1>Newest text from me!</h1>
        <ul><li>Here you can see something from a json file.</li></ul>
        <div id='daily'></div>
        <img src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" id="img" />
        </p>
      <footer>Made by <a href="https://twitter.com/Emidblol">@emidblol</a>. </footer>
      </header>
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "d557e2d8498247659b974fc366da0269"}'></script>
    </div>
  )
}
    export default App
