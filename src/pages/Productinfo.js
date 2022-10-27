import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  FlashOn,
} from "@material-ui/icons";
import Navbar from "../components/navbar";
import { useDispatch } from "react-redux";
import { additems } from "../Reducers/basketslice";

const Productinfo = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
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
            <div className="buy-now" onClick={()=>{
              dispatch(additems(product));
              navigate("/cart");
              
            }}>
              <FlashOn style={{ fontSize: 20, marginRight: 5 }}  />
              Buy
            </div>
            <div className="add-to-cart" onClick={()=>{
              dispatch(additems(product));

            }}>
              <ShoppingCart style={{ fontSize: 20, marginRight: 5 }} /> Add to
              cart
            </div>
          </div>
        </div>
        <div className="product-right-container">
          <div className="product-title">
            {product ? product["Product name"] : "hello"}
          </div>
          <div className="product-reviews">
            <div className="product-rating">
                <div className="rating-tab">
                {product?.product_rating}
                <Star style={{fontSize:15,marginLeft:3}}/>
                
                </div>
                <div className="random-ratings">
                {`${Math.floor(Math.random()*100000)+20000} Ratings & ${Math.floor(Math.random()*100000)+20000} Reviews`}
                </div>
            </div>
          </div>
          <div className="discount">
            {`Extra ₹${2000} off`}
          </div>
          <div className="Product-price">
            {`₹${product?.product_price}`}
            <del>{`₹${product?.product_price+2000}`}</del>
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
