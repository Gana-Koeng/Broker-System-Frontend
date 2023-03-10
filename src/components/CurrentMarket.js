import "../style/CurrentMarket.css";
import logo from "../logo.jpg";
import React from "react";
import Clock from "react-live-clock";
function CurrentMarket () {
    return (
      <div className="CurrentMarket">
        <div className="title-CurrentMarket">
         
          <div className="Center">
            <p>CSX Index</p>
          </div>
           
          <div className="Right">
            <p>Date: <Clock format={"dddd:DD:MMM:yy"} ticking={true}
                timezone={"PhnomPenh/Pacific"} /></p>
            <p>
              Time:{" "}
              <Clock
                format={"hh:mm:ss A"}
                ticking={true}
                timezone={"PhnomPenh/Pacific"}
              />
            </p>
          </div>
          <div className="Left">
            <img src={logo} alt="logo"  height={100} width={100} />
          </div>
        </div>
        <table className="blueTable">
          <thead>
            <th className="title-CurrentMarket" colSpan={6}>
              Real Time Quotation
            </th>
            <tr>
              <th rowSpan={2}>Stock Symbol</th>
              <th>Bid</th>
              <th>Ask</th>
              <th>Last</th>
              <th>High</th>
              <th>Trading Vol</th>
            </tr>
            <tr>
              <th>Vol</th>
              <th>Vol</th>
              <th>Chg</th>
              <th>Low</th>
              <th>Trading Val</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={6}>
                <div className="links">
                  <a href="#">&laquo;</a>{" "}
                  <a className="active" href="#">
                    1
                  </a>{" "}
                  <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{" "}
                  <a href="#">&raquo;</a>
                </div>
              </td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td rowSpan={2}>ABC</td>
              <td id="top">1</td>
              <td id="top">2</td>
              <td id="top">3</td>
              <td id="top">4</td>
              <td id="top">5</td>
            </tr>
            <tr>
              <td id="bottom">1</td>
              <td id="bottom">2</td>
              <td id="bottom">3</td>
              <td id="bottom">4</td>
              <td id="bottom">5</td>
            </tr>
            <tr>
              <td rowSpan={2}>BIT</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td rowSpan={2}>QAS</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td rowSpan={2}>KAK</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

export default CurrentMarket;
