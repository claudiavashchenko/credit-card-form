

const App = () => {

  const handleSubmit = () => {
    console.log("submitted")
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <div className="input-container">
        <label>Name on card
          <input placeholder="name" required />
        </label>
        </div>

        <div className="input-container">
        <label>Card number
          <input placeholder="0000 0000 0000 0000" minLength={16} maxLength={16} required />
        </label>
        </div>

        <div className="supporting-inputs-container">
          <label>Expiration date
            <input type="month" required />
          </label>
          <label>CVV
            <input placeholder="123" minLength={3} maxLength={3} required />
          </label>
          
          
        </div>
         
        <div className="input-container">
          <input type="submit" />
        </div>

      </form>
    </div>
  );
}

export default App;
