import '../styles/index.css';


    
export default function TargetChallenge() {
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

    return (
        <div id="targeted">
            {gates.map((item) => {
                <div>{item.name}</div>
            })}
        </div>
    )
}