//Pages
import "./style/App.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import CurrentMarket from "./components/CurrentMarket";
import CurrentStock from "./components/CurrentStock";
import Top from "./components/Top";
import ListOrder from "./components/ListOrder";
import ListTrade from "./components/ListTrade";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import OrderSell from "./components/OrderSell";
import OrderBuy from "./components/OrderBuy";
import OrderChange from "./components/OrderChange";
import OrderCancel from "./components/OrderCancel";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";
import Policy from "./components/Policy";
import Term from "./components/Term";
import FAQ from "./components/FAQ";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div id="root">
    <Router className="Main-Page">
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <CurrentMarket />
          </Route>
          <Route exact path="/Withdraw">
            <Withdraw />
          </Route>
          <Route exact path="/Deposit">
            <Deposit />
          </Route>
          <Route exact path="/Login">
            <div id="root"></div>
            <Login />
          </Route>
          <Route exact path="/Register">
            <div id="root"></div>
            <Register />
          </Route>
          <Route exact path="/Order/Sell">
            <OrderSell />
          </Route>
          <Route exact path="/Order/Buy">
            <OrderBuy />
          </Route>
          <Route exact path="/Order/Change">
            <OrderChange />
          </Route>
          <Route exact path="/Order/Cancel">
            <OrderCancel />
          </Route>
          <Route exact path="/CurrentStock">
            <CurrentStock />
          </Route>
          <Route exact path="/Top">
            <Top />
          </Route>
          <Route exact path="/ListOrder">
            <ListOrder />
          </Route>
          <Route exact path="/ListTrade">
            <ListTrade />
          </Route>
        </Switch>
        <Route exact path="/Policy">
            <Policy />
          </Route>
        <Route exact path="/Term">
            <Term />
          </Route>
          <Route exact path="/FAQ">
            <FAQ />
          </Route>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
