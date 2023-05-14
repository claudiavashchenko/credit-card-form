const CreditCard = () => {
   return (
    <div className="credit-card">
        <div className="visa-front-side">
            <div className="card-details-container">
                <div className="detail-container">
                <p>Expiration:</p>
                <h2>XXX</h2>
                </div>

                <div className="detail-container">
                <p>Cardholder:</p>
                <h2>XXXXX</h2>
                </div>

                <div className="number-display">
                    <h3>XXXXXXXXXXXXXXXX</h3>
                </div>
            </div>
        </div>

        <div className="visa-back-side">
            <div id="ccv-display">
                <p>XXX</p>
            </div>
        </div>
    </div>
   )
}

export default CreditCard