import './App.css'

function App () {
    let gates = [
        {
            name: "Upper-Left"
        },
        {
            name: "Upper-Right"
        },
        {
            name: "Middle-Left"
        },
        {
            name: "Middle-Right"
        },
        {
            name: "Lower-Left"
        },
        {
            name: "Lower-Right"
        }
    ]



    async function CircuitPunching() {
        let moves = document.getElementById('moves').value
        let speed = (document.getElementById('speed').value * 1000)
        // let gatePick = gates[Math.floor(Math.random() * gates.length)]
        // console.log(gatePick)
        // let divPick = document.getElementById(gatePick.name)
        // console.log(divPick)

        // Is this coherent and easy to read?
        let prevPick = undefined

        function gatePick() {
            let divPick = document.getElementById(gates[Math.floor(Math.random() * gates.length)].name)

            if (divPick == prevPick) {
                gatePick()
            }
            else {
                return divPick
            }
        }

        for (let i = 0; i < moves; i++) {

            let divPick = gatePick()
            
            divPick.classList.add('Selected')
    
            await new Promise((resolve, reject) => {
                setTimeout(resolve, speed)
            })
            
            divPick.classList.remove('Selected')
            prevPick = divPick
        }

    }

    return (
        <div className="App">
            <div className="Setup-Box">
                <label for="moves">Moves</label>
                <input type="number" name="moves"></input>
                <label for="speed">Speed</label>
                <input type="number" name="speed"></input>
                <button onClick={CircuitPunching}>Run Program</button>
            </div>
            <div className="Fighter-Box">
                {gates.map((item) => 
                <div key={item.index} id={item.name} className="Gate">{item.name}</div>
                )}
            </div>
        </div>
    )
}

export default App;