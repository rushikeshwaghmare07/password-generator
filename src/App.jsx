import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='title'>ahjsnke3$</div>
          <button className='copyBtn' onClick={() => {}}>Copy</button>
        </div>
        <div className='charLength'>
          <span>
          <label>Character Length</label>
          <label>4</label>
          </span>
          <input type="range" min="4" max="20"/>
        </div>
        
      </div>
    </>
  )
}

export default App
