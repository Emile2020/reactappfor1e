import React from 'react'
import './App.css'
function App() {
  
  var today = new Date()
  var br = "\n"
  var ipbutton = "type something and click submit"
  var time = today.getHours() + ':' + today.getMinutes()
    function Button1(e) {
      console.log('succes')
      ipbutton = "sup"
    };
  return (
    <div className="msg-wrapper">
        <h1><em>welcome to my site, it's currently { time } </em></h1>
        <strong> This is a project made in <a href ="https://reactjs.org">react</a>!</strong>{ br }
        it can update every second { br }
        <h2><strong>All the things that react can do!</strong></h2>
        <div className='w3-round-xlarge'>
         <form onSubmit={Button1}> 
          <input placeholder="type something and click submit"></input>
          <button type='submit'>Submit</button>
         </form>
         { ipbutton }
      </div>
   </div>
  )
}

export default App
