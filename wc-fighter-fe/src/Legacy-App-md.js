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
    0: {
      "moves": 10,
      "speed": 3000
    },
    1: {
      "moves": 20,
      "speed": 3000
    },
    2: {
      "moves": 20,
      "speed": 2700
    },
    3: {
      "moves": 20,
      "speed": 2500
    },
    4: {
      "moves": 30,
      "speed": 2500
    },
    5: {
      "moves": 30,
      "speed": 2300
    },
    6: {
      "moves": 30,
      "speed": 2000
    },
    7: {
      "moves": 40,
      "speed": 2000
    },
    8: {
      "moves": 40,
      "speed": 1500
    },
    9: {
      "moves": 45,
      "speed": 1000
    },
    10: {
      "moves": 50,
      "speed": 500
    },
  }

  async function SetLevel(level) {
    moves = levels[level].moves
    speed = levels[level].speed 
  }

  SetLevel(level)

  let gates = {
    0: document.getElementById('Gate-Upper-Left'),
    1: document.getElementById('Gate-Upper-Right'),
    2: document.getElementById('Gate-Middle-Left'),
    3: document.getElementById('Gate-Middle-Right'),
    4: document.getElementById('Gate-Lower-Left'),
    5: document.getElementById('Gate-Lower-Right')
  }

  // Keeps track of the gate previously picked, generated outside the for loop so it isn't recreated every instance
  let prevPick = undefined

  for (let i = 0; i < moves; i++) {
    console.log('Previous: ', prevPick)
    // Assigns a new number to choose from the list of gates at random
    let gateNum = await Math.floor(Math.random() * 6)
    // Assigns a gate's class list using the gate number
    let gatePick = await gates[gateNum];
    console.log('Gatepick: ', gatePick)

    // is the previous pick defined yet? it should not be for the first round
    if (prevPick == undefined) {
      prevPick = gatePick
    }
    // Is the previous pick the current gate pick? 
    else if (prevPick == gatePick) {
      gateNum = await Math.floor(Math.random() * 6)
      gatePick = await gates[gateNum];
    }


    await gatePick.classList.add('Selected');

    await new Promise((resolve, reject) => setTimeout(resolve, speed))
    
    await gatePick.classList.remove('Selected')
    prevPick = gatePick
  }

  return
}

function App() {
  return (
    <div className="App">
      {/* <input id="speed" type="number" name="speed" placeholder="speed"></input>
      <input id="moves" type="number" name="moves" placeholder="moves"></input> */}
      {/* <label for="level">{document.getElementById("level").value}</label> */}
      <input id="level" type="range" name="level" min="0" max="10"></input>
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
      <footer>

      </footer>
    </div>
  );
}

export default App;
