import React from "react";
import PropTypes from "prop-types";

const style = {
  width: "80px",
  height: "100px",
  padding: "5px",
  fontSize: "35px",
};

const Card = (props) => {
  return (
    <div className="card bg-secondary text-white" style={style}>
      <div className="card-body">
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string,
};

Card.defaultProp = {
  text: "0",
};

export default Card;
