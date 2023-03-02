import "../style/a.css";
import React from "react";
import Clock from "react-live-clock";
class CurrentMarket extends React.Component {
  state = {
    date: "",
  };

  componentDidMount() {
    this.getTime();
  }

  getTime = () => {
    var date = new Date(),
      date =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    this.setState({ date });
  };

  render() {
    return (
      <div className="CurrentMarket">
        <div className="title-CurrentMarket">
          <div className="Center">
            <p>CSX Index</p>
          </div>
          <div className="Right">
            <p>Date: <Clock format={"dddd:DD:MMM:yy"} ticking={true}
                timezone={"Bangkok/Pacific"} /></p>
            <p>
              Time:{" "}
              <Clock
                format={"hh:mm:ss A"}
                ticking={true}
                timezone={"Bangkok/Pacific"}
              />
            </p>
          </div>
        </div>
        <table class="blueTable">
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
                <div class="links">
                  <a href="#">&laquo;</a>{" "}
                  <a class="active" href="#">
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
}
export default CurrentMarket;
