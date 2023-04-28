import '../styles/index.css';


    
export default function TargetChallenge() {
    // Use a hook for this
    let currentMove = 'Now waiting for moves...'
    let fighterMoves = 
    [
        {
            name: "Left Hook",
            x_direction: "left",
            y_direction: "up",
            in_or_out: "out"
        },
        {
            name: "Right Hook",
            x_direction: "right",
            y_direction: "up",
            in_or_out: "out"
        },
        {
            name: "Left Jab",
            x_direction: "left",
            y_direction: "up",
            in_or_out: "out"
        },
        {
            name: "Right Jab",
            x_direction: "left",
            y_direction: "up",
            in_or_out: "out"
        },
        {
            name: "Left Cross",
            x_direction: "left",
            y_direction: "up",
            in_or_out: "in"
        },
        {
            name: "Right Cross",
            x_direction: "right",
            y_direction: "up",
            in_or_out: "in"
        },
        {
            name: "Left Shovel Hook",
            x_direction: "left",
            y_direction: "down",
            in_or_out: "out"
        },
        {
            name: "Right Shovel Hook",
            x_direction: "right",
            y_direction: "down",
            in_or_out: "out"
        },
        {
            name: "Left Lower Jab",
            x_direction: "left",
            y_direction: "down",
            in_or_out: "out"
        },
        {
            name: "Right Lower Jab",
            x_direction: "right",
            y_direction: "down",
            in_or_out: "out"
        },
        {
            name: "Left Lower Cross",
            x_direction: "left",
            y_direction: "down",
            in_or_out: "in"
        },
        {
            name: "Right Lower Cross",
            x_direction: "right",
            y_direction: "down",
            in_or_out: "in"
        }
    ]

    let gates = [
        {
            name: "Upper-Left"
        },
        {
            name: "Upper-Right"
        },
        {
            name: "Lower-Left"
        },
        {
            name: "Lower-Right"
        }
    ]

    function ProcessTarget(target) {
        if (target.x_direction.toLowerCase() == 'left') {
            if (target.y_direction.toLowerCase() == 'up') {
                currentMove == target.name

            }
            else if (target.y_direction.toLowerCase() == 'down') {
                console.log('Lower Left', target.name)
            }
            else {
                console.log('Oops, no left y direction specified', target)
            }
        }
        else if (target.x_direction.toLowerCase() == 'right') {
            if (target.y_direction.toLowerCase() == 'up') {
                console.log('Upper Right', target.name)
            }
            else if (target.y_direction.toLowerCase() == 'down') {
                console.log('Lower Right', target.name)
            }
            else {
                console.log('Oops, no right y direction specified', target)
            }
        }
        else {
            console.log('Oops, no x direction specified', target)
        }
    }

    async function DisplayTarget() {
        // For ten rounds, this program will run
        for (i = 0; i <= 10; i++) {
        // This selects a target to process
            let targetPick = fighterMoves[Math.floor(Math.random() * fighterMoves.length)]
            console.log(targetPick)
            processedTarget = await ProcessTarget(targetPick)
            currentMove = processedTarget
        }
    }

    return (
        <div id="targeted">
            <button onClick={() => DisplayTarget()}>Run Program</button>
            <div>{currentMove}</div>
            <div>
                {gates.map((item) => 
                    <div>{item.name}</div>
                )}
            </div>
        </div>
    )
}