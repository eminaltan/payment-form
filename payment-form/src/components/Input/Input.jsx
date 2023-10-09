import "./_input.scss";

/** This function checks suitability value of  <input> element with pattern attr. */
const checkVal = (props) => {
  let jsClassType = `js-${props.id}__error`;
  let jsClass;

  /** For :after and :before CSS pseudo-class operation */
  const jsContainer = document.getElementById(`${props.jsContainerId}`);

  /** If <input> element values  matches pattern attr. */
  const success = () => {
    jsClass = document.getElementById(`${jsClassType}`);
    jsClass.classList.remove("input-container__error_show");

    jsContainer.style.setProperty("--js-display-b", "block");
    jsContainer.style.setProperty("--js-display-a", "none");

    jsContainer.classList.add("input-container_valid");
    jsContainer.classList.remove("input-container_invalid");
  };

  /** If <input> element values not matches pattern attr. */
  const failure = () => {
    jsClass = document.getElementById(`${jsClassType}`);
    jsClass.classList.add("input-container__error_show");

    jsContainer.style.setProperty("--js-display-a", "block");
    jsContainer.style.setProperty("--js-display-b", "none");

    jsContainer.classList.add("input-container_invalid");
    jsContainer.classList.remove("input-container_valid");
  };

  /** Compare values of <input> element with pattern attr. */
  const comparasion = () => {
    const compare = props.value.match(props.pattern);

    const result = compare ? success() : failure();
    return result;
  };

  props.value == "" ? failure() : comparasion();
};

/** <InputShipment/> child component */
const InputShipment = () => {
  return (
    <div
      className="input-container"
      id="js-shipment"
    >
      <label htmlFor="shipment">Shipment Address:</label>
      <input
        type="text"
        id="shipment"
        placeholder={"670 S Van Ness Ave"}
        pattern="[A-Za-z0-9\s]{1,50}"
        onBlur={(e) =>
          checkVal({
            id: e.target.id,
            value: e.target.value,
            pattern: e.target.pattern,
            jsContainerId: e.target.parentElement.id,
          })
        }
      />
      <p
        className="input-container__error"
        id="js-shipment__error"
      >
        Invalid shipment address
      </p>
    </div>
  );
};

/** <InputExpiry/> child component */
const InputExpiry = () => {
  return (
    <div
      className="input-container input-container_small"
      id="js-expiry"
    >
      <label htmlFor="expiry">Expiry Date:</label>
      <input
        type="text"
        id="expiry"
        placeholder={"MM/YYYY"}
        pattern="^(0[1-9]|1[0-2])\/(20\d{2})$"
        onBlur={(e) =>
          checkVal({
            id: e.target.id,
            value: e.target.value,
            pattern: e.target.pattern,
            jsContainerId: e.target.parentElement.id,
          })
        }
      />
      <p
        className="input-container__error"
        id="js-expiry__error"
      >
        Invalid expiry date
      </p>
    </div>
  );
};

/** <InputCVV/> child component */
const InputCVV = () => {
  return (
    <div
      className="input-container input-container_small"
      id="js-cvv"
    >
      <label htmlFor="cvv">CVV Number:</label>
      <input
        /* TODO: @eminaltan Find a solation use to number instead of tel. */
        type="tel"
        id="cvv"
        placeholder={"523 e.g"}
        pattern="[0-9]{3}"
        maxLength={3}
        onBlur={(e) =>
          checkVal({
            id: e.target.id,
            value: e.target.value,
            pattern: e.target.pattern,
            jsContainerId: e.target.parentElement.id,
          })
        }
      />
      <p
        className="input-container__error"
        id="js-cvv__error"
      >
        Invalid cvv number
      </p>
    </div>
  );
};

/** <InputCredit/> child component */
const InputCredit = () => {
  return (
    <div
      className="input-container"
      id="js-credit"
    >
      <label htmlFor="credit">Credit Card Number:</label>
      <input
        /* TODO: @eminaltan Find a solation use to number instead of tel. */
        type="tel"
        id="credit"
        placeholder={"55024xxxx1637489 e.g"}
        pattern="[0-9]{16}"
        maxLength={16}
        onBlur={(e) =>
          checkVal({
            id: e.target.id,
            value: e.target.value,
            pattern: e.target.pattern,
            jsContainerId: e.target.parentElement.id,
          })
        }
      />
      <p
        className="input-container__error"
        id="js-credit__error"
      >
        Invalid credit card number
      </p>
    </div>
  );
};

/** <InputName/> child component */
const InputName = () => {
  return (
    <div
      className="input-container"
      id="js-name"
    >
      <label htmlFor="name">Name:</label>

      <input
        type="text"
        id="name"
        placeholder={"John Doe"}
        pattern="^[A-z ]*$"
        onBlur={(e) =>
          checkVal({
            id: e.target.id,
            value: e.target.value,
            pattern: e.target.pattern,
            jsContainerId: e.target.parentElement.id,
          })
        }
      />

      <p
        className="input-container__error"
        id="js-name__error"
      >
        Invalid name
      </p>
    </div>
  );
};

/** <InputMail/> child component */
const InputMail = () => {
  return (
    <div
      className="input-container"
      id="js-email"
    >
      <label htmlFor="email">E-Mail:</label>

      <input
        type="email"
        id="email"
        placeholder={"johndoe@reklamfab.com"}
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        onBlur={(e) =>
          checkVal({
            id: e.target.id,
            value: e.target.value,
            pattern: e.target.pattern,
            jsContainerId: e.target.parentElement.id,
          })
        }
      />

      <p
        className="input-container__error"
        id="js-email__error"
      >
        Invalid mail
      </p>
    </div>
  );
};

/** <InputPhone/> child component */
const InputPhone = () => {
  return (
    <div
      className="input-container"
      id="js-phone"
    >
      <label htmlFor="tel">Phone Number:</label>
      <input
        type="tel"
        id="tel"
        placeholder={"555-555-55-55"}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
        maxLength={13}
        onBlur={(e) =>
          checkVal({
            id: e.target.id,
            value: e.target.value,
            pattern: e.target.pattern,
            jsContainerId: e.target.parentElement.id,
          })
        }
      />
      <p
        className="input-container__error"
        id="js-tel__error"
      >
        Invalid telephone number
      </p>
    </div>
  );
};

/** TODO: Continue to CVV Number */

const Input = (props) => {
  const result =
    props.type == "name" ? (
      <InputName />
    ) : props.type == "email" ? (
      <InputMail />
    ) : props.type == "phone" ? (
      <InputPhone />
    ) : props.type == "credit-card" ? (
      <InputCredit />
    ) : props.type == "cvv" ? (
      <InputCVV />
    ) : props.type == "expiry-date" ? (
      <InputExpiry />
    ) : props.type == "shipment" ? (
      <InputShipment />
    ) : null;

  return result;
};

export default Input;
