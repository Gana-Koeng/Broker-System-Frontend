import "../style/Order.css";


//import React, { useEffect, useState } from "react";

function App() {
  return (

    <div className="sub-buy">
      <div className="broker">
        <form action="/action_page.php">
          <input
            type="text"
            id="No"
            name="No"
            placeholder="Issue No"
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Acc Name"
          />
        </form>
      </div>
      <div className="quality">
        <form action="/action_page.php">
          <input
            type="text"
            id="quality"
            name="quality"
            placeholder="Input quality..."
          />
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Input price..."
          />
        </form>
      </div>



   <div className="title-balance">
    Balance
   </div>

      <table id="customers">
        <tr>
          <th>Acc No.</th>
          <th >Name</th>
          <th>Quality</th>
        </tr>
        <tr>
          <td>00000001</td>
          <td>ABC</td>
          <td>1000000</td>
        </tr>
        <tr>
          <td>00000002</td>
          <td>ABC</td>
          <td>1000000</td>
        </tr>
        <tr>
          <td>00000003</td>
          <td>ABC</td>
          <td>1000000</td>
        </tr>


      </table>
      <div className="submit">
        <button className="button">Make Order</button>
      </div>
    </div>


  )

}

export default App;
