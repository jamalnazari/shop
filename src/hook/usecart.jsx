import { useState, useEffect } from "react";
import { PRODUCTS } from "../data/products.jsx";
export const useCart = () => {
  const [cartitem, setcartitem] = useState(() => {
    const data = localStorage.getItem("jimi");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("jimi", JSON.stringify(cartitem));
  }, [cartitem]);

  const addTocart = (itemid) => {
    if (!cartitem.find((item) => item.id === itemid))
      setcartitem([...cartitem, { id: itemid, count: 1 }]);
    else
      setcartitem(
        cartitem.map((item) =>
          item.id === itemid ? { ...item, count: item.count + 1 } : item
        )
      );
  };

  const removeFormcart = (itemid) => {
    setcartitem(
      cartitem.map((i) =>
        i.id === itemid
          ? { ...i, count: i.count === 0 ? 0 : i.count - 1 }
          : i
      )
    );
  };

  const resetitems = () => {
    setcartitem([]);
    localStorage.removeItem("jimi");
  };

  const [int , setint]=useState(0)

      useEffect(() => {
        let total = 0;
        
        cartitem.forEach(cartItem => {
            const product = PRODUCTS.find(prod => prod.id === cartItem.id);
            if (product) {
                total += product.price * cartItem.count;
            }
        });
        
        setint(total);
    }, [cartitem]); 

  return { cartitem, addTocart, removeFormcart, resetitems, int };
};