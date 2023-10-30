import "./_app.scss";
import Input from "./components/Input/Input";

function App() {
  const jsCheckBox = document
    .getElementById("js-checkbox")
    .setAttribute("disabled", "");

  return (
    <div className="page">
      <div className="page__boxes">
        <h2>Personal Information</h2>
        <Input type="name" />
        <Input type="email" />
        <Input type="phone" />
      </div>

      <div className="page__boxes">
        <h2>Billing & Shipment Information</h2>
        <Input type="credit-card" />
        <Input type="cvv" />
        <Input type="expiry-date" />
        <Input type="shipment" />
      </div>

      <label>
        Checkbox
        <input
          type="checkbox"
          id="js-checkbox"
        />
      </label>
    </div>
  );
}

export default App;
