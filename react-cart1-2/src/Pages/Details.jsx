import React, { useContext } from "react";
import { ProdContext } from "../Contexts/ProdContext";

const Details = () => {
  const { details } = useContext(ProdContext);
  return (
    <div>
      <div className="product">
        <div style={{ width: "150px" }}>
          <img src={details.image} alt="" style={{ width: "100%" }} />
        </div>
        <div>
          <h3>Title : {details.name}</h3>
        </div>
        <div>
          <h4>Type : {details.type}</h4>
        </div>
        <div>
          <h4>Cost : {details.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
