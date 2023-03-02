import "../style/SignUp.css";

import BuyForm from "./BuyForm";
import ShowData from "./ShowData";

function MyForm() {
  return (
    <div className="App">
      <div className="container">
        <div className="right">
          <div className="title">List All Data</div>
          <ShowData />
        </div>
        <div className="left">
          <div className="title">Choose Your Option</div>
          <div className="sub-container">
            <div id="myDIV">
              <button class="btn">
                <a
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingLeft: 13,
                    textDecoration: "none",
                  }}
                  href="/Order/Sell"
                >
                  Sell
                </a>
              </button>
              <button class="btn active">
                <a
                  style={{
                    color: "white",
                    paddingLeft: 13,
                    textDecoration: "none",
                  }}
                  href="/Order/Buy"
                >
                  Buy
                </a>
              </button>

              <button class="btn">
                <a
                  style={{
                    color: "white",
                    paddingLeft: 13,
                    textDecoration: "none",
                  }}
                  href="/Order/Change"
                >
                  Change
                </a>
              </button>
              <button class="btn">
                <a
                  style={{
                    color: "white",
                    paddingLeft: 13,
                    textDecoration: "none",
                  }}
                  href="/Order/Cancel"
                >
                  Cancel
                </a>
              </button>
              <BuyForm />
            </div>
          </div>
        </div>
        <div className="right-v2">
          <div class="title">Base Price</div>
          <div className="sub-title">You can choose price between: </div>

          <div className="Max-min">
            <p>Max Price: 5500</p>
            <p>Base Price: 5000</p>
            <p>Min Price: 4500</p>
          </div>


        </div>
      </div>

    </div>
  );
}

export default MyForm;
