import React from "react";
import anim from "../modals/loading.gif"
const  Modal= props =>
{  
    if (!props.shower)
    {
        return null
    }
    return(
        <div className="absolute min-h-full w-full items-center justify-center flex flex-col ">
        <img src={anim}></img>
        </div>
    )

}
export default Modal;