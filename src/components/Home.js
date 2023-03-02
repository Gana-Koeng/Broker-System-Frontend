import "../style/Home.css";
import Sell from "./Sell";

function Homepage() {
    return (
       <div className='Parents'>
            <div className='above-left'>
                 < Sell />
            </div>
            <div className='above-right'>
                 < Sell />
            </div>
            <div className='bottom-left'>
                 < Sell />
            </div>
            <div className='bottom-right'>
                 < Sell />
            </div>
       </div>
    )
}
export default Homepage;