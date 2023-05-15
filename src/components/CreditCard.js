const CreditCard = () => {
    const side = "front"
   return (
    <div className="credit-card">
        {side === "front" && <div className="visa-front-side card">
            <div className="card-details-container">
                <div className="detail-container">
                <p>Expiration:</p>
                <h2>XXX</h2>
                </div>

                <div className="detail-container">
                <p>Cardholder:</p>
                <h2>XXXXX</h2>
                </div>

                
            </div>
            <div className="number-display">
                    <h3>XXXXXXXXXXXXXXXX</h3>
                </div>
        </div>}

        {side === "back" && <div className="visa-back-side card">
            <div id="cvv-display">
                <p>XXX</p>
            </div>
        </div>}
    </div>
   )
}

export default CreditCard