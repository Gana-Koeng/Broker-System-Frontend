import "../style/TradeInfo.css";
import Clock from "react-live-clock";
import React from "react";
//import React, { useEffect, useState } from "react";

function TradeInfo() {
  return (
    <div className="trade">
    <table className="TradeInfo">
    <tr>
    <th><Clock format={"DD:MMM:yy"} ticking={true}
                timezone={"PhnomPenh/Pacific"} /></th>
    <td> </td>
    </tr>
    <tr>
    <th colSpan={2} style={{textAlign:'center' ,color:"gold", backgroundColor:'#027b9a'}}>Price Information</th>
        </tr>
    <tr>
    <th>Current Price</th>
    <td>5000</td>
    </tr>
    <tr>
    <th>P/E Ratio</th>
    <td>5000</td>
    </tr>
    <tr>
    <th>Base Price/IPO Price</th>
    <td>5000</td>
    </tr>
    <tr>
    <th>Upper Price Limit</th>
    <td>5000</td>
    </tr>
    <tr>
    <th>Lower Price Limit</th>
    <td>5000</td>
    </tr>
    <tr>
    <th>Opening Price</th>
    <td>5000</td>
    </tr>
    <tr>
    <th>Low Price</th>
    <td>5000</td>
    </tr>
    <tr>
    <th colSpan={2} style={{textAlign:'center' ,color:"gold", backgroundColor:'#027b9a'}}>Trade Information</th>
        </tr>
    <tr>
    <th>Time</th>
    <td></td>
    </tr>
    <tr>
    <th>Trade Price</th>
    <td></td>
    </tr>
    <tr>
    <th>Change</th>
    <td></td>
    </tr>
    <tr>
    <th>%Change</th>
    <td></td>
    </tr>
    <tr>
    <th>Acc. Volume</th>
    <td></td>
    </tr>
    <tr>
    <th>Acc. Value (KHR)</th>
    <td></td>
    </tr>
    <tr>
    <th>Market Cap.(MI.KHR) <sup>(1)</sup>
    </th>
    <td>4,929,395</td>
    </tr>
    <tr>
    <th>Full Market Cap. (M.KHR) <sup>(1)</sup></th>
    <td>0</td>
    </tr>
    </table>

    </div>
  );
}

export default TradeInfo;
