
//Pages 

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import RecentTrade from "./components/RecentTrade";
import Top from "./components/Top";
import ListOrder from "./components/ListOrder";
import ListTrade from "./components/ListTrade";
import Profile from "./components/Profile";
import Select from "./components/Order";
import Login from "./components/Login";
import Register from "./components/Register";
import OrderSell from "./components/OrderSell";
import OrderBuy from "./components/OrderBuy";
import OrderChange from "./components/OrderChange";
import OrderCancel from "./components/OrderCancel";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>

          <Route exact path="/">
            <Home />
            
          </Route>

          <Route exact path="/Order">
            <Select />
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
          <Route exact path="/RecentTrade">
            <RecentTrade />
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
          <Route exact path="/Profile">
            <Profile />
          </Route>               
       </Switch>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
