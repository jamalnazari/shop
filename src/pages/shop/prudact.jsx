import { useContext } from "react";
import { shopcontext } from "../../context/shopcontext";

const Prudact = ({ data }) => {          
  const { cartitem, addTocart, removeFormcart } = useContext(shopcontext);

  const item = cartitem.find((row) => row.id === data.id);
  const count = item ? item.count : 0;

  return (
    <div className="col-3 text-center">
      <img src={data.productimg} alt={data.name} width="150" />
      <h5>{data.name}</h5>
      <p>{data.price.toLocaleString()} تومان</p>

      <button className="btn btn-info btn-sm" onClick={() => addTocart(data.id)}>+</button>

      <span className="mx-1">{count}</span>
      {count > 0 && (<button className="btn btn-danger btn-sm"onClick={() => removeFormcart(data.id)} >-</button>)}
    </div>
  );
};

export default Prudact;