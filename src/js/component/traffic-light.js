import React, { useState, } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [active, setActive]=useState(false)
    const [extraLight,setExtraLight] = useState("desactived")

    const changeColor = (selectedcolor) => {
        setColor(selectedcolor)
    };
    const clickChange = () => {
        if (color == "red") { return setColor("yellow") }
        else if (color == "yellow") { return setColor("green") }
        else if (color == "green") {if (extraLight==="actived") return setColor("purple"); return setColor("red") }
        else if (color == "purple"){return setColor("red")}
        else { return setColor ("red")}
    }
        
    const clickPurpleChange=()=> {
            if (active===false){
           setExtraLight ("actived")
            }
        else{
            setExtraLight ("desactived")
        }
        return (setActive(!active));
    }

    return (
        <div>
            <div className="d-flex m-auto">
               
            </div>
            <div id="trafficTop"></div>
            <div id={extraLight === "desactived" ? "container" : "purplecontainer"} >
                <div className={`light red ${color == "red" ? "selected" : ""}`}
                    onClick={() => changeColor("red")}>
                </div>
                <div className={`light yellow ${color == "yellow" ? "selected" : ""}`}
                    onClick={() => changeColor("yellow")}>
                </div>
                <div className={`light green  ${color == "green" ? "selected" : ""}`}
                    onClick={() => changeColor("green")}>
                </div>
                <div className={`${extraLight==="actived"? "light purple":""} ${color === "purple" ? "selected" : ""}`} 
                onClick={() => changeColor("purple")}>
                                    </div>
            </div>
            <div className="d-flex m-auto justify-content-center">
            <button type="button" className="btn btn-dark  m-2" onClick = {() => clickPurpleChange()} >{active? "Desactivar luz extra" : "Activar luz extra"}</button>
                <button type="button" className="btn btn-dark  m-2" onClick={() => clickChange()}>Click para cambiar</button>
            </div>
        </div >);
}

export default TrafficLight; 