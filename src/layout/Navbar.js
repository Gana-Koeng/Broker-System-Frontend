// import logo from '../logo.jpg';
import "../style/Navbar.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar-main">
      <ul className="menu">
        <li>
          <a
            style={{ color: "white", paddingLeft: 13, textDecoration: "none" }}
            href="/"
          >
            Current Market
          </a>
        </li>

        <li>
          Stock
          <ul className="sub-menu">
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/ListOrder"
              >
                List Order
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/ListTrade"
              >
                List Trade
              </a>
            </li>
          </ul>
        </li>
        <li>
          Top
          <ul className="sub-menu">
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/Top"
              >
                Top Sell
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/Top"
              >
                Top Buy
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            style={{ color: "white", paddingLeft: 13, textDecoration: "none" }}
            href="/Order/Sell"
          >
            Make Order
          </a>
        </li>
        <li>
          Balance
          <ul className="sub-menu">
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/Withdraw"
              >
                Withdraw
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/Deposit"
              >
                Deposit
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            style={{ color: "white", paddingLeft: 13, textDecoration: "none" }}
            href="/RecentTrade"
          >
            Recent Trade
          </a>
        </li>

        <li>
          <a
            style={{ color: "white", paddingLeft: 13, textDecoration: "none" }}
            href="/Login"
          >
            Sign In
          </a>
          {/* <ul class="sub-menu">
<li>Apple Music</li>
<li>iTunes</li>
</ul> */}
        </li>

        <li>
          Setting
          <ul className="sub-menu">

            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/Profile"
              >
                Edit Profile
              </a>{" "}
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/logout"
              >
                Sign Out
              </a>{" "}
            </li>
          </ul>
        </li>
      </ul><div>
        <a href="/">
          <img src="https://cdn-icons-png.flaticon.com/128/444/444689.png" alt="logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
