import './App.css';

function SampleProgram() {
  let gates = {
    0: document.getElementById('Gate-Upper-Left'),
    1: document.getElementById('Gate-Upper-Right'),
    2: document.getElementById('Gate-Middle-Left'),
    3: document.getElementById('Gate-Middle-Right'),
    4: document.getElementById('Gate-Lower-Left'),
    5: document.getElementById('Gate-Lower-Right')
  }
  let sessionMoves = 10
  let currentMoves = 0
  let gateNum = Math.floor(Math.random() * 6)
  let gatePick = gates[gateNum].classList;
  gatePick.add('Selected')
  gatePick.remove('Selected')
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <button onClick={SampleProgram}>Run Test</button>
      <div className='Fighter-Box'>

        {/* Upper Gates */}
        <div id='Gate-Upper-Left' className='Gate Gate-Upper-Left'>Upper Left</div>
        <div id='Gate-Upper-Right' className='Gate Gate-Upper-Right'>Upper Right</div>
        {/* Middle Gates */}
        <div id='Gate-Middle-Left' className='Gate Gate-Middle-Left'>Middle Left</div>
        <div id='Gate-Middle-Right' className='Gate Gate-Middle-Right'>Middle Right</div>
        {/* Lower Gates */}
        <div id='Gate-Lower-Left' className='Gate Gate-Lower-Left'>Lower Left</div>
        <div id='Gate-Lower-Right' className='Gate Gate-Lower-Right'>Lower Right</div>  
      </div>
      <footer className='App-header'>
      </footer>
    </div>
  );
}

export default App;
