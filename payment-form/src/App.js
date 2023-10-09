import "./_app.scss";
import Input from "./components/Input/Input";

function App() {
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
    </div>
  );
}

export default App;
