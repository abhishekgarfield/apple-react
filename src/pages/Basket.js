import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";

const Basket = () => {
  const [Groupeditems, setGroupeditems] = useState(null);
  const items = useSelector((state) => {
    return state.basket.items;
  });
  console.log(items);

  const GroupItems = () => {
    const temp = {};
    items.forEach((product) => {
      if (!temp[product.Product_id]) {
        temp[product.Product_id] = [];
      }
      temp[product.Product_id].push(product);
    });
    console.log(temp);
    setGroupeditems(temp);
  };
  useMemo(() => {
    GroupItems();
  }, [items]);
  console.log(Groupeditems);
  return (
    <div className="basket-container">
      <Navbar />
    </div>
  );
};
export default Basket;
