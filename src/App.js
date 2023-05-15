import { useState } from "react";

import CreditCard from "./components/CreditCard";

const App = () => {

  const currentMonth = new Date().getMonth() + 1
  const formatting = String(currentMonth).length <= 1 ? "0" : null
  const formattedCurrentMonth = formatting + currentMonth
  const currentYear = new Date().getFullYear()

  const [ formData, setFormData ] = useState({
    name: "",
    number: "1974 5624 3091 6428",
    date: currentYear + "-" + formattedCurrentMonth,
    cvv: "179"
  })


  const handleSubmit = () => {
    console.log("submitted")
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value =  e.target.value

    setFormData({...formData, [name] : value})
  }

  return (
    <div className="form-container">
      <CreditCard formData={formData} />
      <form onSubmit={handleSubmit}>

        <div className="input-container">
        <label>Name on card
          <input name="name" value={formData.name} placeholder="name" required onChange={handleChange}/>
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
            <input id="cvv" placeholder="123" minLength={3} maxLength={3} required />
          </label>
          
          
        </div>
         
        <div className="input-container">
          <input type="submit" />
        </div>

        <p className="info-message"></p>

      </form>
    </div>
  );
}

export default App;
