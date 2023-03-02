import React from "react"
import "../style/FAQ.css"
function FAQ() {
    return (
        <div style={{ marginTop:"5%",marginBottom:"5%", marginLeft:"auto", marginRight:"auto" , width: "1120px" }}>
<div className="faq-header">Frequently Asked Questions</div>

<div className="faq-content">
  <div className="faq-question">
    <input id="q1" type="checkbox" className="panel"/>
    <div className="plus">+</div>
    <label htmlFor="q1" className="panel-title">What is broker?</label>
    <div className="panel-content">A broker is a person or firm who arranges transactions between a buyer and a seller for a commission when the deal is executed. A broker who also acts as a seller or as a buyer becomes a principal party to the deal.</div>
  </div>
  
  <div className="faq-question">
    <input id="q2" type="checkbox" className="panel"/>
    <div className="plus">+</div>
    <label htmlFor="q2" className="panel-title">Why is broker better?</label>
    <div className="panel-content">The first thing a broker will do is meet you and get a better understanding of what it is you want. Brokers are, after all, your finance professionals, so the better they get to know you, your financial circumstances and long-term goals, the better they can match you with a product that is right for you. </div>
  </div>
  
  <div className="faq-question">
    <input id="q3" type="checkbox" className="panel"/>
    <div className="plus">+</div>
    <label htmlFor="q3" className="panel-title">What is a Matching Engine?</label>
    <div className="panel-content">Electronic exchanges use a matching engine to facilitate price discovery and match buy and sell orders. The matching engine sits at the core of the exchange, maintaining order books for the assets traded on the exchange.</div>
  </div>
    </div>

        </div>

    )
}
export default FAQ;
