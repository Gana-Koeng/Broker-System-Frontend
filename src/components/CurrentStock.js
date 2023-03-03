import React from "react";
import "../style/CurrentStock.css";
import RecentTrade from "./RecentTrade";
import TradeInfo from "./TradeInfo";
import CurrentQuo from "./CurrentQuo";
function CurrentStock() {
    return (
     <div className="Home-main"> 
     
          <div className='Parents'>
            <div className='above-left'>
             <TradeInfo />   
            </div>
            <div className='above-right'>
            < CurrentQuo />
            </div>
            <div className='bottom'>
                 < RecentTrade />
            </div>
          </div>

          
     </div>
       
         
    )
}
export default CurrentStock;