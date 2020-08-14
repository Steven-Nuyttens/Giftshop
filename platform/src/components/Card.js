import React from "react";
import "./../styles/Card.css";
import giftbasketdummy from "./../assets/images/giftbasketdummy.jpg";
import giftbasketdummy2 from "./../assets/images/giftbasketdummy2.jpg";

const Card = (props) => {
  return (
    <div className="Row">
      <div className="Col">
        <div className="Card">
          <img src={props.image} />
          <h1>{props.title}</h1>
          <p class="price">{props.price}</p>
          <p>{props.text}</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
