import React from "react";
import { rings } from "../data/rings";
import ButtonsGroup from "./buttonsGroup";

const Ringslist = () => {
    return(
        <div className="d-flex gap-5 justify-content-center mt-5">
            {
                rings.map((ring) => {
                    return(
                        <div className="text-center">
                            <img src={ring.img} style={{width:'400px', height: '400px'}}/>
                            <h3>{ring.name}</h3>
                            <p>{ring.cost}</p>
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

export default Ringslist