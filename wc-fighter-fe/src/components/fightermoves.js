


let fighterMoves = [
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

function ProcessTarget(target) {
    if (target.x_direction.toLowerCase() == 'left') {
        if (target.y_direction.toLowerCase() == 'up') {
            console.log('Upper Left', target.name)
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

    }
}

DisplayTarget()