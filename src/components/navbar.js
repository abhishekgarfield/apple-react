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
            <span id="Phone-nav-bar"  onClick={handleClick}>
              <span class="fa fa-bars"></span>
            </span>
          </li>
          <li>
            <span class="logo" >
              <span class="hde">logo</span>
            </span>
          </li>
          <li>
            <span class="bag1" >
              <span class="hde">bag</span>
            </span>
          </li>
          <li>
            <span class="store" >
              <span class="hde">Store</span>
            </span>
          </li>
          <li>
            <span class="mac" >
              <span class="hde">Mac</span>
            </span>
          </li>
          <li>
            <span class="iPad" >
              <span class="hde">iPad</span>
            </span>
          </li>
          <li>
            <span class="iPhone" >
              <span class="hde">iPhone</span>
            </span>
          </li>
          <li>
            <span class="iwatch" >
              <span class="hde">Watch</span>
            </span>
          </li>
          <li>
            <span class="airpods" >
              <span class="hde">Airpods</span>
            </span>
          </li>
          <li>
            <span class="tv" >
              <span class="hde">TvanHome</span>
            </span>
          </li>
          <li>
            <span class="only" >
              <span class="hde">OnlyonApple</span>
            </span>
          </li>
          <li>
            <span class="accessories" >
              <span class="hde">Accesories</span>
            </span>
          </li>
          <li>
            <span class="support" >
              <span class="hde">Support</span>
            </span>
          </li>
          <li>
            <span class="search" >
              <span class="hde">Search</span>
            </span>
          </li>
          <li>
            <span class="bag2" >
              <span class="hde">bag</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
