const Navbar = () => {
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
      <div class="nav-cont">
        <ul>
        <li>
            <a id="Phone-nav-bar" href="#" onClick={handleClick}>
              <span class="fa fa-bars"></span>
            </a>
          </li>
          <li>
            <a class="logo" href="#">
              <span class="hde">logo</span>
            </a>
          </li>
          <li>
            <a class="bag1" href="#">
              <span class="hde">bag</span>
            </a>
          </li>
          <li>
            <a class="store" href="#">
              <span class="hde">Store</span>
            </a>
          </li>
          <li>
            <a class="mac" href="#">
              <span class="hde">Mac</span>
            </a>
          </li>
          <li>
            <a class="iPad" href="#">
              <span class="hde">iPad</span>
            </a>
          </li>
          <li>
            <a class="iPhone" href="#">
              <span class="hde">iPhone</span>
            </a>
          </li>
          <li>
            <a class="iwatch" href="#">
              <span class="hde">Watch</span>
            </a>
          </li>
          <li>
            <a class="airpods" href="#">
              <span class="hde">Airpods</span>
            </a>
          </li>
          <li>
            <a class="tv" href="#">
              <span class="hde">TvanHome</span>
            </a>
          </li>
          <li>
            <a class="only" href="#">
              <span class="hde">OnlyonApple</span>
            </a>
          </li>
          <li>
            <a class="accessories" href="#">
              <span class="hde">Accesories</span>
            </a>
          </li>
          <li>
            <a class="support" href="#">
              <span class="hde">Support</span>
            </a>
          </li>
          <li>
            <a class="search" href="#">
              <span class="hde">Search</span>
            </a>
          </li>
          <li>
            <a class="bag2" href="#">
              <span class="hde">bag</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
