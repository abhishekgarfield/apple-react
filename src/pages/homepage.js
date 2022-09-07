import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useLayoutEffect, useState } from "react";
import Code from "../images/apple-offers1.jpeg";

const Homepage = () => {
  const [error, setError] = useState("");
  const [weatherData, setWeather] = useState("");
  const [systemTheme, setsys] = useState(false);

  // Initialize color scheme
  
  const InitialiseColorscheme = () => {
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    setsys(systemTheme);
    if (systemTheme === true) {
      document.body.classList.toggle("night");
    }
  };

  //Change color scheme (theme)

  const changeTheme = () => {
    var el = document.getElementById("dark");
    el.addEventListener("click", () => {
      document.body.classList.toggle("night");
      if (el.className === "fa fa-moon-o") {
        el.className = "fa fa-sun-o";
      } else {
        el.className = "fa fa-moon-o";
      }
    });
  };
  // Show coupon

  const showCoupon = () => {
    var el = document.querySelector(".coupon");
    el.style.top = "0vw";
  };

  //  Show weather
  const getWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((posittion) => {
        var lat = posittion.coords.latitude;
        var long = posittion.coords.longitude;

        var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
        fetch(url, { method: "GET" })
          .then((Response) => Response.json())
          .then((data) => {
            setWeather(data);
          })
          .catch((err) => {
            setError(err);
            console.log(err);
          });
      });
    } else {
      console.log("geo ot supported");
      setError("Geo Not supported");
    }
  };

  useEffect(() => {
    changeTheme();
    showCoupon();
    getWeather();
  }, []);
  
  useLayoutEffect(() => {
    InitialiseColorscheme();
  }, []);
  return (
    <>
      <div className="coupon">
        <div className="coupon-frame">
          <i
            onClick={(e) => {
              var el = document.querySelector(".coupon");
              el.style.top = "-100vh";
            }}
            id="cls"
            className="fa fa-remove"
          ></i>
          <p>
            Websites <span style={{fontWeight:"bold",color:"red"}}>color scheme </span>is based on <span style={{fontWeight:"bold",color:"red"}}>system prefrences</span> but you can
            change color scheme using{" "}
            <i className={systemTheme ? "fa fa-sun-o" : "fa fa-moon-o"}></i>{" "}
            button
          </p>
          <p style={{margin:"0rem",marginBottom:"5px"}}>Includes your current <span style={{fontWeight:"bold",color:"red"}}>Weather and location</span></p>

          <img src={Code} />
        </div>
      </div>
      <Navbar />
      <section className="cashback">
        <div className="cashback_cont">
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="weather">
              {weatherData && (
                <>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <span style={{paddingRight:"10px",fontWeight:"500"}}>{`${weatherData.city.name } `}</span>
                    <span style={{paddingRight:"5px"}} className="fa fa-cloud"> </span>
                    <span>
                      {weatherData.list[0].temp.day}
                      <sup>°C</sup>
                    </span>
                  </span>
                </>
              )}
              {error && (
                <span className="">
                </span>
              )}
            </div>
            <p>
              Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank
              credit cards on orders over ₹54900
            </p>
            <i
              className={systemTheme ? "fa fa-sun-o" : "fa fa-moon-o"}
              id="dark"
            ></i>
          </span>
        </div>
      </section>

      <section className="mac_air">
        <div className="mac_air_cont1">
          <div className="mac_air_title">
            <h1>Macbook Air</h1>
          </div>
          <div className="mac_air_charge"></div>
          <div className="mac_available">
            <p> Available in July</p>
          </div>
          <div className="buy">
            <span>Learn more {">"} </span>
            <span>View pricing {">"} </span>
          </div>
        </div>
      </section>
      <section className="mac_pro_book">
        <div className="mac_pro_cont1">
          <div className="mac_pro_title">
            <h1>Macbook Pro 13"</h1>
          </div>
          <div className="mac_pro_charge">
            <p></p>
          </div>
          <div className="buy">
            <span>Learn more {">"} </span>
            <span>Buy {">"}</span>
          </div>
        </div>
      </section>
      <section className="get_airpods">
        <div className="get_title">
          <h1>
            <i>
              {" "}
              Get <span style={{ color: "#ca2166" }}>supercharged </span>for
              university.
            </i>
          </h1>
        </div>
        <div className="get_save">
          <p> Save on Mac or iPad. Plus get Airpods on us.</p>
        </div>
        <div className="buy">
          <span>Get Now </span>
        </div>
      </section>

      <section className="iphone_watch">
        <div className="iphone">
          <div className="iphone_title">
            <h1>iPhone 13 pro</h1>
          </div>
          <div className="pro">
            <p>Oh. So. Pro.</p>
          </div>
          <div className="buy">
            <span>Learn more {">"} </span>
            <span>Buy {">"}</span>
          </div>
        </div>
        <div className="watch">
          <div className="watch_title"></div>
          <div className="display">
            <p>It's our largest display yet.</p>
          </div>
          <div className="buy">
            <span>Learn more {">"} </span>
            <span>Buy {">"}</span>
          </div>
        </div>
      </section>
      <section className="ipad_mac">
        <div className="ipad_cont1">
          <div className="ipad_cont2">
            <div className="ipad_title"></div>
            <div className="light">
              <p>Light. Bright. Full of might.</p>
            </div>
            <div className="buy">
              <span>Learn more {">"} </span>
              <span>Buy {">"}</span>
            </div>
          </div>
        </div>
        <div className="studio_cont2">
          <div className="studio_title">
            <h1>Mac Studio</h1>
          </div>
          <div className="empower">
            <p>Empower station</p>
          </div>
          <div className="buy">
            <span>Learn more {">"} </span>
            <span>Buy {">"}</span>
          </div>
        </div>
      </section>
      <section className="arc_tv">
        <div className="arc_cont1">
          <div className="arc_cont2">
            <div className="arc_title"></div>
            <div className="cook">
              <p>Cooking Mama: Cuisine!</p>
            </div>
            <div className="buy">
              <span>Learn more {">"} </span>
              <span>Buy {">"}</span>
            </div>
          </div>
        </div>
        <div className="tv_cont2">
          <div className="tv_title"></div>
          <div className="rose"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
