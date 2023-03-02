import React from 'react';

function Withdraw() {
    return (
        <div style={{ height: "1000px" }}>



            <><nav className="navbar" style={{ cursor: 'alias', border: '5px solid #01d28e', backgroundColor: 'pink', marginTop: '120px' }}>
                <h3>Balance: 500,000$</h3>
                <div className="links" >
                    <a className='account' href="/Deposit">Deposit</a>
                </div>
            </nav><div className='center' style={{ textAlign: 'center', display: 'block', border: '5px solid #01d28e', backgroundColor: 'pink', marginLeft: 'auto', marginRight: 'auto', width: '600px', marginTop: '20px' }}>
                    <p>Balnace = 0 <br />
                        Withdraw = balance - input</p>
                    <input type="button" className='pointer' style={{ marginTop: '20px', cursor: 'pointer' }} value="Sumbit" />
                </div></>   </div>
    )
}
export default Withdraw;