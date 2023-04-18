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
        // let gatePick = gates[Math.floor(Math.random() * gates.length)]
        // console.log(gatePick)
        // let divPick = document.getElementById(gatePick.name)
        // console.log(divPick)

        // Is this coherent and easy to read?

        gates.forEach(item)
        let divPick = document.getElementById(gates[Math.floor(Math.random() * gates.length)].name)

        divPick.classList.add('Selected')

        await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000)
        })
        
        divPick.classList.remove('Selected')
    }

    return (
        <div className="App">
            <button onClick={CircuitPunching}>Run Program</button>
            <div className="Fighter-Box">
                {gates.map((item) => 
                <div key={item.index} id={item.name} className="Gate">{item.name}</div>
                )}
            </div>
        </div>
    )
}

export default App;