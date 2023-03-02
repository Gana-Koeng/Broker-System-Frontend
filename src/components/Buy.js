import "../style/buy.css";
import axios from "axios";
import React from "react";
//import React, { useEffect, useState } from "react";

function App() {
 
  var data = "";

  var config = {
    method: "get",
    url: "http://localhost:8080/api/broker-info",
    headers: {},
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

	
	


  return (
    <div className="Buy">
      <table>
        <tr>
          <th>ID</th>
          <th>Remain</th>
          <th>Price</th>
          <th>Remain</th>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
		
      </table>
	  
    </div>
  );

}

export default App;
