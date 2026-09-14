import "../Explore/Explore.css";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Explore = () => {
  const { categories } = useContext(AppContext);
  return (
    <div className="explore-container text-light">
      <div className="left-column">
        <div className="first-row">{/* category */}</div>
        <hr className="horizontal-line" />
        <div className="second-row">{/* items */}</div>
      </div>
      <div className="right-column d-flex flex-column">
        <div className="customer-form-container " style={{ height: "15%" }}>
          {/* customer form */}
        </div>
        <hr className="my-3 text-light" />
        <div
          className="cart-items-container "
          style={{ height: "53%", overflowY: "auto" }}
        >
          {/* carts item */}
        </div>
        <div
          className="cart-summary-container "
          style={{ height: "30%" }}
        ></div>
        {/* carts summary */}
       
      </div>
    </div>
  );
};

export default Explore;
