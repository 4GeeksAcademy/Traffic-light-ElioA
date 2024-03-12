import React, { useState, useEffect } from "react";

const Button=({selector,name,color})=>{

    return (
        <div style={{ marginTop: "10px"}}>
          <button type="button" className={color} onClick={selector}>
           {name}
          </button>
        </div>
    )


}
export default Button