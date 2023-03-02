import "../style/ShowData.css";
import axios from "axios";
import React from "react";
//import React, { useEffect, useState } from "react";

function App() {
 
	
	var data = JSON.stringify({
	  "odrId": "1",
	  "accNo": "001003",
	  "qty": 100,
	  "prc": 5500
	});
	
	var config = {
	  method: 'post',
	  url: 'http://localhost:8080/api/buy-order',
	  headers: { 
		'Content-Type': 'application/json'
	  },
	  data : data
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
	
	{/* {
          data.map((Broker,index)=>
          <div key={index}>
            {Broker.id}:
         
          </div>
          )
        }  */}
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
				<td>5900</td>
				<td></td>
			</tr>
			<tr>
				<td>2.</td>
				<td>400</td>
				<td>5800</td>
				<td></td>
			</tr>
			<tr>
				<td>3.</td>
				<td>200</td>
				<td>5700</td>
				<td></td>
			</tr>
			<tr>
				<td>4.</td>
				<td>100</td>
				<td>5600</td>
				<td></td>
			</tr>
			<tr>
				<td>5.</td>
				<td>100</td>
				<td>5500</td>
				<td></td>
			</tr>
			<tr>
				<td>1.</td>
				<td></td>
				<td>5400</td>
				<td>1500</td>
			</tr>
			<tr>
				<td>2.</td>
				<td></td>
				<td>5300</td>
				<td>500</td>
			</tr>
			<tr>
				<td>3.</td>
				<td></td>
				<td>5200</td>
				<td>700</td>
			</tr>
			<tr>
				<td>4.</td>
				<td></td>
				<td>5100</td>
				<td>600</td>
			</tr>
			<tr>
				<td>5.</td>
				<td></td>
				<td>5000</td>
				<td>400</td>
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
