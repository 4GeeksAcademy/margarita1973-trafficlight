import React, { useState, useEffect } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("red");
    
    const changeColor = (selectedcolor) => {
        setColor(selectedcolor)
    };

    return (
        <div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className= {`light red ${ color == "red" ? "selected" : ""}`}
                    onClick={() => changeColor("red") }>
                </div>
                <div className={`light yellow ${color == "yellow" ? "selected":""}`}
                onClick={() =>  changeColor("yellow")}>
                </div>
                <div className={`light green  ${color == "green" ? "selected":""}`}
                onClick={() => changeColor("green") }>
                </div>
            </div>
        </div >);
}

export default TrafficLight; 