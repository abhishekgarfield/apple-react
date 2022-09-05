import  {Link} from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect } from "react";

const Homepage=()=>{
    useEffect(()=>{
        document.body.classList.toggle("night");
    })
    return(
        <>
            <Navbar/>
            <section class="cashback">
                <div class="cashback_cont">
                    <span>
                        <p>Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit cards on orders over ₹54900</p>
                    </span>
                </div>
            </section>
            <section class="mac_pro_book">
                <div class="mac_pro_cont1">
                    <div class="mac_pro_title">
                        <h1>Macbook Pro 13"</h1>
                    </div>
                    <div class="mac_pro_charge">
                        <p></p>
                    </div>
                    <div  class="buy">
                        <span>Learn more </span>
                        <span>Buy </span>
                    </div>
                </div>
            </section>
            <section class="mac_air">
                <div class="mac_air_cont1">
                    <div class="mac_air_title">
                        <h1>Macbook Air</h1>
                    </div>
                    <div class="mac_air_charge">
                    </div>
                    <div class="mac_available">
                        <p> Available in July</p>
                    </div>
                    <div  class="buy">
                        <span>Learn more </span>
                        <span>View pricing </span>
                    </div>
                </div>
            </section>
            <section class="get_airpods">
                <div class="get_title">
                    <h1><i> Get <span style={{color:"#ca2166"}}>supercharged </span>for university.</i></h1>
                </div>
                <div class="get_save">
                    <p> Save on Mac or iPad. Plus get Airpods on us.</p>
                </div>
                <div class="buy">
                    <span>Get Now </span>
                </div>
            </section>
            <section class="iphone_watch">
                <div class="iphone">
                    <div class="iphone_title">
                        <h1>iPhone 13 pro</h1>
                    </div>
                    <div class="pro">
                        <p>Oh. So. Pro.</p>
                    </div>
                    <div class="buy">
                        <span>Learn more </span>
                        <span>Buy </span>
                    </div>
                </div>
                <div class="watch">
                    <div class="watch_title">
                    </div>
                    <div class="display">
                        <p>It's our largest display yet.</p>
                    </div>
                    <div  class="buy">
                        <span>Learn more </span>
                        <span>Buy </span>
                    </div>
                </div>
            </section>
            <section class="ipad_mac">
                <div class="ipad_cont1">
                    <div class="ipad_cont2">
                        <div class="ipad_title">
                        </div>
                        <div class="light">
                            <p>Light. Bright. Full of might.</p>
                        </div>
                        <div  class="buy">
                            <span>Learn more </span>
                            <span>Buy </span>
                        </div>
                    </div>
                </div>
                <div class="studio_cont2">
                    <div class="studio_title">
                        <h1>Mac Studio</h1>
                    </div>
                    <div class="empower">
                        <p>Empower station</p>
                    </div>
                    <div  class="buy">
                        <span>Learn more </span>
                        <span>Buy </span>
                    </div>
                </div>
            </section>
            <section class="arc_tv">
                <div class="arc_cont1">
                    <div class="arc_cont2">
                        <div class="arc_title">
                        </div>
                        <div class="cook">
                            <p>Cooking Mama: Cuisine!</p>
                        </div>
                        <div  class="buy">
                            <span>Learn more </span>
                            <span>Buy </span>
                        </div>
                    </div>
                </div>
                <div class="tv_cont2">
                    <div class="tv_title">
                    </div>
                    <div class="rose">
                    </div> 
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Homepage;