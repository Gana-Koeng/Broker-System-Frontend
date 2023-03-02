import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./App.css";

function Trade() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:8000/api/broker-info")
      .then((result) => {
        console.log(result.Broker);
        setPosts(result.Broker);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{marginTop:"20%"}}>
      {posts.map((broker) => {
        return (
          <div key={broker.ID}>
            <h4>{broker.Price}</h4>
            <p>{broker.buy}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Trade;