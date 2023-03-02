import "../style/ShowData.css";
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
 <div>
	
 
      <table class="demTable">
      <thead>
			<tr>
				<th>ID. </th>
				<th>Remain</th>
				<th>Price</th>
				<th>Remain</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1.</td>
				<td>500</td>
				<td>5000</td>
				<td></td>
			</tr>
			<tr>
				<td>2.</td>
				<td>500</td>
				<td>5000</td>
				<td></td>
			</tr>
			<tr>
				<td>3.</td>
				<td>500</td>
				<td>5000</td>
				<td></td>
			</tr>
			<tr>
				<td>4.</td>
				<td>500</td>
				<td>5000</td>
				<td></td>
			</tr>
			<tr>
				<td>5.</td>
				<td>500</td>
				<td>5000</td>
				<td></td>
			</tr>
			<tr>
				<td>1.</td>
				<td></td>
				<td>5000</td>
				<td>500</td>
			</tr>
			<tr>
				<td>2.</td>
				<td></td>
				<td>5000</td>
				<td>500</td>
			</tr>
			<tr>
				<td>3.</td>
				<td></td>
				<td>5000</td>
				<td>500</td>
			</tr>
			<tr>
				<td>4.</td>
				<td></td>
				<td>5000</td>
				<td>500</td>
			</tr>
			<tr>
				<td>5.</td>
				<td></td>
				<td>5000</td>
				<td>500</td>
			</tr>
		
		
			
		
		</tbody>
		
      </table>
	  
	  
	  <div className="total-order">
		<p>Number Sell: 1000000</p>
		<p>Number Buy:1000000</p>
	  </div>
	  
	  
 </div>
  );

}

export default App;
