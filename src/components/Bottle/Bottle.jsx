import './bottle.css'

const Bottle = ({bottle,handleAdd}) => {
    console.log(bottle);
    const {id,name,img,price,quantity}=bottle;
    return (
        <div className="bottle-contianer">
            <h4>Bottle : {id}</h4>
            <img src={img} alt="" />
            <h5>Price : {price}</h5>
            <h4>Qty : {quantity}</h4>
            <button onClick={()=>handleAdd(bottle)}>Add</button>
        </div>
    );
};

export default Bottle;