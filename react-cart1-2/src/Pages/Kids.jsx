import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../Styles/ProductStyles.css";
import { ProdContext } from "../Contexts/ProdContext";

const Kids = () => {

  const {handleOnClick} = useContext(ProdContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:8080/children",
      method: "GET",
    }).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>Kids Page</h1>
      <div className="products">
        {data.map((el) => (
          <div className="product" onClick={() => handleOnClick(el)}>
            <div style={{width: "150px"}}>
              <img src={el.image} alt="" style={{width: "100%"}}/>
            </div>
            <div><h3>Title : {el.name}</h3></div>
            <div><h4>Type : {el.type}</h4></div>
            <div><h4>Cost : {el.price}</h4></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kids;
