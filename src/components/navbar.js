import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const systheme = useSelector((state) => {
    return state.dark.theme;
  });
  const navigate = useNavigate();
  const handleClick = (e) => {
    var el = document.getElementsByClassName("nav-cont");
    if (el[0].className === "nav-cont") {
      el[0].className += " responsive";
    } else {
      el[0].className = "nav-cont";
    }
  };
  return (
    <>
      <div className="nav-cont">
        <ul>
          <li>
            <span id="Phone-nav-bar" onClick={handleClick}>
              <span className="fa fa-bars"></span>
            </span>
          </li>
          <li>
            <span
              className="logo"
              onClick={() => {
                navigate(`/`);
              }}
            >
              <span className="hde">logo</span>
            </span>
          </li>
          <li>
            <span className="bag1">
              <span className="hde">bag</span>
            </span>
          </li>
          <li>
            <Link to={`/listing/all`}>
              <span className="store">
                <span className="hde">Store</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to={`/listing/3`}>
              <span className="mac">
                <span className="hde">Mac</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to={`/listing/2`}>
              <span className="iPad">
                <span className="hde">iPad</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to={`/listing/1`}>
              {" "}
              <span className="iPhone">
                <span className="hde">iPhone</span>
              </span>
            </Link>
          </li>
          <li>
            <span className="iwatch">
              <span className="hde">Watch</span>
            </span>
          </li>
          <li>
            <Link to={`/listing/5`}>
              <span className="airpods">
                <span className="hde">Airpods</span>
              </span>
            </Link>
          </li>
          <li>
            <span className="tv">
              <span className="hde">TvanHome</span>
            </span>
          </li>
          <li>
            <span className="only">
              <span className="hde">OnlyonApple</span>
            </span>
          </li>
          <li>
            <Link to={`/listing/5`}>
              <span className="accessories">
                <span className="hde">Accesories</span>
              </span>
            </Link>
          </li>
          <li>
            <span className="support">
              <span className="hde">Support</span>
            </span>
          </li>
          <li>
            <span className="search">
              <span className="hde">Search</span>
            </span>
          </li>
          <li>
            <span className="bag2">
              <span className="hde">bag</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
