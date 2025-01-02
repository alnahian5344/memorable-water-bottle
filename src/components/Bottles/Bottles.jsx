import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    })
    return (
        <div>
            <h2>Total Bottle : {bottles.length}</h2>
            <div className="bottle-tem">
                {bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle={bottle}></Bottle>)}
            </div>
        </div>
    );
};

export default Bottles;