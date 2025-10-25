import Prudact from "./prudact.jsx";
import { PRODUCTS } from "../../data/products.jsx";

const Shop = () => {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="row">
        {PRODUCTS.map((prudactdata) => (
          <Prudact key={prudactdata.id} data={prudactdata} />
        ))}
      </div>
    </div>
  );
};

export default Shop;