import "../style/CurrentQuo.css";
import React from "react";

function CurrentQuo() {
  return (

    <><div>
      <table className="headerqou"style={{border:"none",width:"600px",height:"46px",marginTop:'60px',backgroundColor: "wheat",textAlign:"left"}}>
        <tr>
          <th>Expected Price:</th>
          <th>|</th>
          <th>Expected Quantity:</th>
        </tr>
      </table>
      <h3 style={{textAlign:'center', color:'gold',textTransform:"uppercase"}}>Current Quantations & Remaining Quantity of Orders </h3>

    </div>
    <div className="quo">
      <table className="CurrentQuo">
        <tr>
          <th>Sell Remaing Quantity</th>
          <th>Price </th>
          <th>Buy Remaining Quantity</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div></>
  );
}

export default CurrentQuo;
