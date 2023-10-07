import React from 'react';
import pointingRight from "../../images/pointing-right.png"

const List = ({ text }) => {
  return (

    <div style={{ display: "flex", flexDirection: "row" , alignItems:'center',marginTop:"-15px"}}>
      <img src={pointingRight} style={{ width: "30px", height: "30px",marginRight:"8px" }} alt="pointingRight" />
      <p style={{ fontSize: "17px",marginLeft:"8px" }}>{text}</p>
    </div>
  );
};

export default List;
