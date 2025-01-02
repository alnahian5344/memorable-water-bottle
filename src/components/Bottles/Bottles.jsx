import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    },[])
    const handleAdd=bottle=>{
        const newCart=[...cart,bottle];
        setCart(newCart)
    }
    return (
        <div>
            <h2>Total Bottle : {bottles.length}</h2>
            <h3>Added Bottle: {cart.length}</h3>
            <div className="bottle-tem">
                {bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle={bottle}
                    handleAdd={handleAdd}></Bottle>)}
            </div>
        </div>
    );
};

export default Bottles;