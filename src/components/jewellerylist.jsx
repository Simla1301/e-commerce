import React from "react";
import { jewellerys } from "../data/jewellerys";
import ButtonsGroup from "./buttonsGroup";


const Jewellerylist = () => {
    return(
        
        <div className="d-flex gap-5 justify-content-center mt-5">
        {
            jewellerys.map((jewellery) => {
                return (
                    <div className="text-center " >
                    <img src={jewellery.img} style={{width: '400px',height:' 400px'}}/>
                    <h3>{jewellery.name}</h3>
                    <p>{jewellery.cost}</p>
                    <div>
                        <ButtonsGroup/>
                        </div>
                    </div>
                )
            })
        }
        </div>
        
    )
}
export default Jewellerylist