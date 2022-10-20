import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch=useDispatch();
  const systheme=useSelector((state)=>{return state.dark.theme})
  const navigate=useNavigate();
    const handleClick=(e)=>
    {
        var el=document.getElementsByClassName("nav-cont");
        if(el[0].className==="nav-cont")
        {
            el[0].className+=" responsive";
        }
        else{
            el[0].className="nav-cont"
        }
    }
  return (
    <>
      <div className="nav-cont">
        <ul>
        <li>
            <span id="Phone-nav-bar"  onClick={handleClick}>
              <span className="fa fa-bars"></span>
            </span>
          </li>
          <li>
            <span className="logo" >
              <span className="hde">logo</span>
            </span>
          </li>
          <li>
            <span className="bag1" >
              <span className="hde">bag</span>
            </span>
          </li>
          <li>
            <span className="store" onClick={() => {
              
          navigate(`/listing/all`);
          window.location.reload();
          console.log(systheme);
          
          
        }} >
              <span className="hde" >Store</span>
            </span>
          </li>
          <li>
            <span className="mac" onClick={() => {
          navigate(`/listing/3`);
          window.location.reload();
        }}>
              <span className="hde">Mac</span>
            </span>
          </li>
          <li>
            <span className="iPad" onClick={() => {
          navigate(`/listing/2`);
          window.location.reload();
        }}>
              <span className="hde">iPad</span>
            </span>
          </li>
          <li>
            <span className="iPhone" onClick={() => {
          navigate(`/listing/1`);
          window.location.reload();
        }}>
              <span className="hde">iPhone</span>
            </span>
          </li>
          <li>
            <span className="iwatch" >
              <span className="hde">Watch</span>
            </span>
          </li>
          <li>
            <span className="airpods" onClick={() => {
          navigate(`/listing/5`);
          window.location.reload();
        }} >
              <span className="hde">Airpods</span>
            </span>
          </li>
          <li>
            <span className="tv" >
              <span className="hde">TvanHome</span>
            </span>
          </li>
          <li>
            <span className="only" >
              <span className="hde">OnlyonApple</span>
            </span>
          </li>
          <li>
            <span className="accessories" onClick={() => {
          navigate(`/listing/5`);
          window.location.reload();
        }} >
              <span className="hde">Accesories</span>
            </span>
          </li>
          <li>
            <span className="support" >
              <span className="hde">Support</span>
            </span>
          </li>
          <li>
            <span className="search" >
              <span className="hde">Search</span>
            </span>
          </li>
          <li>
            <span className="bag2" >
              <span className="hde">bag</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
