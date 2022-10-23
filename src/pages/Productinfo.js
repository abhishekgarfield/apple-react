import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Apps,
  HelpOutline,
  Search,
  Settings,
  Tune,
  ShoppingCart,
  FlashOn,
} from "@material-ui/icons";
import Navbar from "../components/navbar";

const Productinfo = () => {
  var { product_id } = useParams();
  const [product, setproduct] = useState(null);
  const loadProducts = () => {
    const url = `https://applegarfield.herokuapp.com/product/${product_id}`;

    console.log(url);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setproduct(data);
      });
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="Product-info">
        <div className="product-left-container">
          <div className="product-image">
            <img src={product?.product_url} />
          </div>
          <div className="buy-options">
            <div className="buy-now">
              <FlashOn style={{ fontSize: 20, marginRight: 5 }} />
              Buy
            </div>
            <div className="add-to-cart">
              <ShoppingCart style={{ fontSize: 20, marginRight: 5 }} /> add to
              cart
            </div>
          </div>
        </div>
        <div className="product-right-container">
          <div className="product-title">
            {product ? product["Product name"] : "hello"}
          </div>
          <div className="product-reviews">
            <div className="product-rating"></div>
          </div>
          <div className="Product-spexifications">
            <div className="title-for-specs">
                Specifications
            </div>
            {product &&
              Object.entries(product.specifications).map(([index, value]) => {
                return (
                  <div className="product-specs">
                    <div className="specs-header">
                        
                    {index}
                    </div>
                    {Object.entries(value).map(([index, value]) => {
                      return (
                        <div className="specs-container2">
                          <div className="specs-name">{index}</div>
                          <div className="specs-value">{value}</div>
                        </div>
                      );
                    })}
                   
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Productinfo;
