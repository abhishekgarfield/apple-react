import { useSelector } from "react-redux";

const Basket=()=>{
    const items=useSelector((state)=> {return state.basket.items})
    console.log(items);
    return(<div className="basket-container">

    </div>);
}
export default Basket;