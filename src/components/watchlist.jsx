import React from "react";
import { watches } from "../data/watches";
import ButtonsGroup from "./buttonsGroup";


const Watchlist = () => {
    return (
        <div className="d-flex gap-5 justify-content-center mt-5">
            {
                watches.map((watch) => {
                    return(
                        <div className="text-center">
                            <img src={watch.img} style={{width: '400px' ,height: '400px'}}/>
                            <h3>{watch.name}</h3>
                            <p>{watch.cost}</p>
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
export default Watchlist