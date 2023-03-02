import "../style/CurrentMarket.css";
import Sell from "./Sell";


function Homepage() {
    return (
     <div className="Home-main"> 
     
         

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

          
     </div>
       
         
    )
}
export default Homepage;