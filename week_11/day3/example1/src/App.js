import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Forms React</h1>
      <div className="shipping-form-container">
        <form action="" className="shipping-form">
          <input
            className="shipping-input-text"
            type="text"
            placeholder="First Name"
          />
          <input
            className="shipping-input-text"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="shipping-input-text-street"
            type="text"
            placeholder="Street Address"
          />
          <input
            className="shipping-input-text-apt"
            type="text"
            placeholder="Apt, Suite"
          />
          <input
            className="shipping-input-text"
            type="text"
            placeholder="Postal Code"
          />
          <input
            className="shipping-input-text"
            type="text"
            placeholder="City"
          />
          <input
            className="shipping-input-text"
            type="text"
            placeholder="State"
          />
          <input
            className="shipping-input-text"
            type="text"
            placeholder="Country"
          />
          <input
            className="shipping-input-text"
            type="text"
            placeholder="Phone"
          />
          <input
            className="shipping-input-button"
            type="submit"
            placeholder="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default App;