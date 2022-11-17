import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import { additems, removeitems } from "../Reducers/basketslice";

const Basket = () => {
  const dispatch = useDispatch();
  const [Groupeditems, setGroupeditems] = useState(null);
  const items = useSelector((state) => {
    return state.basket.items;
  });
  const totalprice = useSelector((state) => {
    var totalprice = 0;
    state.basket.items.map(({ product_price }) => {
      totalprice += product_price;
    }); //
    return totalprice;
  });

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
    <div className="Basketcont">
      <Navbar />
      <div className="basket-container">
        <div className="Basket-items-container">
          <div className="item-count">
            <span>{`Quantity`}</span>
          </div>
          <div className="Item-name">Item</div>
          <div className="Item-price">Price</div>
        </div>
        {Groupeditems &&
          Object.entries(Groupeditems)?.map(([key, value], index) => {
            return (
              <div className="Basket-items-container">
                <div className="item-count">
                  <i
                    className="fa fa-plus"
                    onClick={() => {
                      dispatch(additems(value[0]));
                    }}
                  ></i>
                  <span>{`x${value.length}`}</span>
                  <i
                    className="fa fa-minus"
                    onClick={() => {
                      dispatch(removeitems(value[0]));
                    }}
                  ></i>
                </div>
                <div className="Item-name">{value[0]["Product name"]}</div>
                <div className="Item-price">
                  {`₹${value[0].product_price * value.length}`}
                </div>
              </div>
            );
          })}
        <div className="Totalinfo">
          <div className="delivery-address">
            <h2>Delivery Address</h2>
            <form>
              <input type="text" placeholder="Address line 1" />
              <input type="text" placeholder="Address line 3" />
              <input type="text" placeholder="Address line 2" />
              <button>Add & make payment</button>
            </form>
          </div>
          <div className="totalprice-cont">
            <span> {`Total price ₹${totalprice}`}</span>
            <span>{`Delivery fee ₹${totalprice == 0 ? 0 : 200}`}</span>
            <span>{`Discount ₹${totalprice == 0 ? 0 : 2000}`}</span>
            <span> {`Total ₹${totalprice && totalprice + 200 - 2000}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
