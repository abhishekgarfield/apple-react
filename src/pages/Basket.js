import { useMemo } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";

const Basket = () => {
  const items = useSelector((state) => {
    return state.basket.items;
  });

 const GroupItems=()=>{
    const temp={};
    items.forEach((product) => {
        if(!temp[product.id])
        {
            temp[product.id]=[]
        }
        temp[product.id].push(product)
    });
 }
 useMemo(()=>{
 GroupItems();
 },[items])
  console.log(items);
  return (
    <div className="basket-container">
      <Navbar />
    </div>
  );
};
export default Basket;
