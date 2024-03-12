import React, { useState, useEffect } from "react";




const Light=({ selector , ligthClass, ligthId })=>{
    
    return (
    <div
        className={ligthClass}
        onClick={selector} 
        id={ligthId}    
    ></div>)
    
}

export default Light;