import './App.css';

async function SampleProgram() {
  // let moves = document.getElementById('moves').value
  // console.log("Moves", moves)

  // let speed = document.getElementById('speed').value
  // speed *= 1000
  // console.log("Speed", speed)
  
  let moves = 10
  let speed = 3000
  let level = document.getElementById("level").value
  
  let levels = {
    1: {
      "moves": 10,
      "speed": 3000
    },
    2: {
      "moves": 11,
      "speed": 3000
    },
    3: {
      "moves": 12,
      "speed": 2500
    },
    4: {
      "moves": 13,
      "speed": 2000
    },
    5: {
      "moves": 15,
      "speed": 1000
    },
  }

  async function CheckLevel(level) {
    if (level > 5) {
      alert("Level only goes as high as 5")
    }
    else {
      moves = levels[level].moves
      speed = levels[level].speed 
    }
  }

  CheckLevel(level)

  let gates = {
    0: document.getElementById('Gate-Upper-Left'),
    1: document.getElementById('Gate-Upper-Right'),
    2: document.getElementById('Gate-Middle-Left'),
    3: document.getElementById('Gate-Middle-Right'),
    4: document.getElementById('Gate-Lower-Left'),
    5: document.getElementById('Gate-Lower-Right')
  }
  let sessionMoves = 10
  // for (let i = 0; i < sessionMoves; i++) {
  //   console.log('Start')
  //   let gateNum = Math.floor(Math.random() * 6)
  //   let gatePick = gates[gateNum].classList;
  //   console.log('Gate picked', gatePick);
  //   gatePick.add('Selected')
  //   setTimeout(() => {
  //     console.log('Gate modified', gatePick)
  //     gatePick.remove('Selected')
  //   }, 3000)
  //   console.log('Gate reset', gatePick)
  //   console.log('Program ended')
  // }

  for (let i = 0; i < moves; i++) {
    let gateNum = await Math.floor(Math.random() * 6)
    let gatePick = await gates[gateNum].classList;
    
    gatePick.add('Selected');

    await new Promise((resolve, reject) => setTimeout(resolve, speed))
    gatePick.remove('Selected')
  }

  return
}

function App() {
  return (
    <div className="App">
      {/* <input id="speed" type="number" name="speed" placeholder="speed"></input>
      <input id="moves" type="number" name="moves" placeholder="moves"></input> */}
      <input id="level" type="number" name="level" placeholder="level"></input>
      <button onClick={()=> SampleProgram()}>Run Test</button>
      <div className='Fighter-Box'>
        {/* Upper Gates */}
        <div id='Gate-Upper-Left' className='Gate Gate-Upper-Left'>Upper Left</div>
        <div id='Gate-Upper-Right' className='Gate Gate-Upper-Right'>Upper Right</div>
        {/* Middle Gates */}
        <div id='Gate-Middle-Left' className='Gate Gate-Upper-Left'>Middle Left</div>
        <div id='Gate-Middle-Right' className='Gate Gate-Upper-Left'>Middle Right</div>
        {/* Lower Gates */}
        <div id='Gate-Lower-Left' className='Gate Gate-Upper-Left'>Lower Left</div>
        <div id='Gate-Lower-Right' className='Gate '>Lower Right</div>  
      </div>
      <footer className='App-header'>
      </footer>
    </div>
  );
}

export default App;
