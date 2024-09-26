import { useEffect, useState } from "react";
import "./colorSwitch.css"

const ColorSwitch = () => {

    const [switchColor, setSwitchColor] = useState("white-mode")

    function colorFunction() {
            if(switchColor === "white-mode"){
                
                return setSwitchColor("dark-mode")
            }else{
                return setSwitchColor("white-mode")
            }
    }

    useEffect(() => {
        document.body.className = switchColor;
      }, [switchColor]);


    return(
        <>
        <button className={switchColor} onClick={() => colorFunction()}>{switchColor === "white-mode" ? "Dark Mode" : "White Mode"}</button>
        </>
    )
}


export default ColorSwitch;