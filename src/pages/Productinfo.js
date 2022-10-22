import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Productinfo = () => {
  var { product_id } = useParams();
  const loadProducts = () => {
    const url = `https://applegarfield.herokuapp.com/product/${product_id}`;

    console.log(url);
    fetch(url)
      .then((res) => {
        return res.json();//hi
      })
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    loadProducts();
  });
  return <div className="Product-info"></div>;
};
export default Productinfo;
