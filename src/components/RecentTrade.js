import "../style/RecentTrade.css";
import Clock from "react-live-clock";
import React from "react";
//import React, { useEffect, useState } from "react";

function RecentTrade() {
  return (
    <div className="Recent">
      <h3 style={{textAlign:"center", color:"gold"}}>Last 5 Recent Trade per Stock</h3>
<table className="recentStock">
  <tr>
    <th>Time</th>
    <th>Execution Price</th>
    <th>Change</th>
    <th>%Change</th>
    <th>Trading Volume</th>
    <th>Trading Value (KHR)</th>
  </tr>
  <tr>
    <td>
      <Clock
                format={"hh:mm:ss A"}
                ticking={true}
                timezone={"PhnomPenh/Pacific"}
              /></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


    </div>
  );
}

export default RecentTrade;
