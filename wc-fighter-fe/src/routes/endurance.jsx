import '../styles/endurance.css'

function Endurance () {
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
        // How many moves per program run
        let moves = 0
        if (document.getElementById('moves').value == '') {
            moves = 10
        }
        else {
            moves = document.getElementById('moves').value
        }

        // Speed in whole numbers, will be multiplied by 1000ms
        let speed = 0
        if (document.getElementById('speed').value == '') {
            speed = 3
        }
        else {
            speed = document.getElementById('speed').value
        } 

        console.log(moves)
        console.log(speed)

        let prevPick = undefined
        
        // Is this coherent and easy to read?
        function gateReRoll(divPick) {
            if (prevPick == undefined) {
                console.log('Continuing')
                return
            }
            else if (divPick == prevPick) {
                console.log('Match!')
                console.log('Previous: ', prevPick)
                console.log('Current: ', divPick)
                let divPick = document.getElementById(gates[Math.floor(Math.random() * gates.length)].name)
                console.log('Updated: ', divPick)
                return divPick
            }
        }

        for (let i = 0; i <= moves; i++) {
            let divPick = document.getElementById(gates[Math.floor(Math.random() * gates.length)].name)
            
            gateReRoll(divPick)
            divPick.classList.add('Selected')
    
            await new Promise((resolve, reject) => {
                setTimeout(resolve, (speed * 1000))
            })
            
            divPick.classList.remove('Selected')
            // prevPick = divPick
        }

        // let gatePick = gates[Math.floor(Math.random() * gates.length)]

        // let divPick = document.getElementById(gatePick.name)
        // console.log(divPick)
        // divPick.classList.add('Selected')

        // await new Promise((resolve, reject) => {
        //     setTimeout(resolve, (speed*1000))
        // })

        // divPick.classList.remove('Selected')

    }

    return (
        <div className="App">
            <div className="Setup-Box">
                <label htmlFor="moves">Moves</label>
                <input id="moves" type="number" name="moves"></input>
                <label htmlFor="speed">Speed</label>
                <input id="speed" type="number" name="speed"></input>
                <button onClick={()=>CircuitPunching()}>Run Program</button>
            </div>
            <div className="Fighter-Box">
                {gates.map((item) => 
                <div key={item.name} id={item.name} className="Gate">{item.name}</div>
                )}
            </div>
        </div>
    )
}

export default Endurance;