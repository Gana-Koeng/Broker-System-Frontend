import React from "react";
// import "../style/Acc.css";
function Acc() {
    return (
        <div><h2 style={{ marginLeft:'45%',marginTop:"8%" }}>
            User Profile Card</h2>
        <div className="card">
                <img src={"https://cdn-icons-png.flaticon.com/128/2202/2202112.png"} alt="John" style={{ width: "50%" }}/>
                    <h1>John Doe</h1>
                    <p className="title">Broker Normal</p>
                    <p>800,000$</p>
                    <div style={{ margin: "24px 0" }}>

                    </div>
                    <p><button>Contact</button></p>
         </div>
         </div>
    )
};
export default Acc;