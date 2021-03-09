import React from "react";

const Alert = ({ status, text }) => {
  return (
    <div
      style={
        status === "success"
          ? {
              color: "#265824",
              backgroundColor: "#D4EDDA",
              padding: "15px 20px",
              border: "1px solid #C3E6CB",
            }
          : {
              color: "#731E24",
              backgroundColor: "#F8D7DA",
              padding: "15px 20px",
              border: "1px solid #F5C6CB",
            }
      }
    >
      {text}
    </div>
  );
};

export default Alert;
