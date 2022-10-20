import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

const Listing = () => {

  const systheme=useSelector((state)=>{return state.dark.theme})
  var { category_id } = useParams();
  console.log(systheme);
  console.log(category_id);
  const [Products, setProducts] = useState(null);
  const loadProducts = () => {
    var url = "";
    if (category_id == "all") {
      url = `https://applegarfield.herokuapp.com/?category_id`;
    } else {
      url = `https://applegarfield.herokuapp.com/?category_id=${category_id}`;
    }
    console.log(url);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };
  function showfilter(e) {
    var el = document.getElementById("show_filters");
    console.log("fired");
    if (el.className === "show_filters") {
      el.className += " sho";
    } else {
      el.className = "show_filters";
    }
    document.getElementById("default").click();
  }
  function show(e, labelname) {
    var label_output = document.getElementsByClassName("label_output");
    for (var i = 0; i < label_output.length; i++) {
      label_output[i].style.display = "none";
    }
    document.getElementById(labelname).style.display = "block";
    var label = document.getElementsByClassName("label");
    for (i = 0; i < label.length; i++) {
      label[i].className = label[i].className.replace(" active", "");
    }
    e.currentTarget.className += " active";
  }
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
    <Navbar/>
      <div id="filters">

        <div id="find_head_cont4">
          <div className="fiter_buttons" onClick={(e) => showfilter(e)}>
            <span>
              <i className="fa fa-filter"></i>Filters
            </span>
          </div>
        </div>
      </div>
      <div className="show_filters" id="show_filters">
        <div className="show_filters_2">
          <h1>Filters</h1>
          <i className="fa fa-remove" onClick={(e) => showfilter(e)}></i>
          <div className="tabs">
            <div className="labels">
              <div
                className="label"
                id="default"
                onClick={(e) => show(e, "sort_by")}
              >
                <h1>Sort by</h1>
              </div>
              <div className="label" onClick={(e) => show(e, "Cusines")}>
                <h1>Cusines</h1>
              </div>
              <div className="label" onClick={(e) => show(e, "Rating")}>
                <h1>Rating</h1>
              </div>
              <div
                className="label"
                onClick={(e) => show(e, "Cost_per_person")}
              >
                <h1>Cost per person</h1>
              </div>
            </div>
            <div className="label_output" id="sort_by">
              <form>
                <div className="radios">
                  <input type="radio" name="sort_by" id="Popularity" />
                  <label htmlFor="Popularity">Popularity</label>
                </div>
                <div className="radios">
                  <input type="radio" name="sort_by" id="Ratings" />
                  <label htmlFor="Ratings">Rating: High to Low</label>
                </div>
                <div className="radios">
                  <input type="radio" id="Delivery_Time" name="sort_by" />
                  <label htmlFor="Delivery_Time">Delivery Time</label>
                </div>
                <div className="radios">
                  <input type="radio" name="sort_by" id="Cost_Low_to_High" />
                  <label htmlFor="Cost_Low_to_High">Cost: Low to High</label>
                </div>
                <div className="radios">
                  <input type="radio" name="sort_by" id="Cost_Hight_to_Low" />
                  <label htmlFor="Cost_Hight_to_Low">Cost: Hight to Low</label>
                </div>
              </form>
            </div>
            <div className="label_output" id="Cusines">
              <form id="rad">
                <div className="checks">
                  <input type="checkbox" name="Cousines" id="American" />
                  <label htmlFor="American">American</label>
                </div>
                <div className="checks">
                  <input type="checkbox" name="Cousines" id="andhra" />
                  <label htmlFor="andhra">andhra</label>
                </div>
              </form>
            </div>
            <div className="label_output" id="Rating">
              <h1 style={{ color: "red", margin: "1rem" }}>
                {" "}
                <span id="demo"></span>
              </h1>
            </div>
            <div className="label_output" id="Cost_per_person">
              <h1 style={{ color: "red", margin: "1rem" }}>
                Value: <span id="demo1"></span>
              </h1>
            </div>
          </div>

          <div className="bottom_buttons">
            <button id="apply">Apply</button>
          </div>
        </div>
      </div>
      <div id="food_loading_area">
        <div className="food_loading_area_2">
          {Products?.map((data, index) => {
            return (
              <div className="food_item_card" key={index}>
                <div className="food_img">
                  <img src={data.product_url} />
                </div>
                <div className="food_item_info">
                  <div className="food_item_info_cont1">
                    <div className="food_name">
                      <p> {data["Product name"]}</p>
                    </div>
                    <div className="food_rating">
                      <p>
                        {data.product_rating} <i className="fa fa-star"></i>
                      </p>
                    </div>
                  </div>
                  <div className="food_item_info_cont2">
                    <div className="food_cousine">
                      <p>{data.specifications.General["Model Number"]}</p>
                    </div>
                    <div className="food_price">
                      <p>{data.product_price}</p>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    backgroundColor: "lightgrey",
                    border: "1px solid lightgray",
                  }}
                />
                <div className="food_stats">
                  <p>
                    <i
                      className="fa fa-line-chart"
                      style={{
                        color: "white",
                        backgroundColor: "rgb(135, 158, 235)",
                        borderRadius: "50%",
                        padding: "6px",
                        marginRight: "4px",
                      }}
                    ></i>
                    {` ${
                      Math.floor(Math.random() * 10000) + 20000
                    } orders plced recently`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Listing;
