import React from "react";
import "./../styles/Home.css";
import { Link } from "react-router-dom";
import Card from "./../components/Card";
import _ from "lodash";
import "./../styles/Home.css";
/* display random products onload */
let Manden = [
  {
    image: `${require("./../assets/images/pampermand.jpg")}`,
    title: "pampermand",
    price: "€ 30,00",
    text: "jklfgjmqlksdjg",
  },
  {
    image: `${require("./../assets/images/wijnmand.jpg")}`,
    title: "wijnmand",
    price: "€ 30,00",
    text: "qsgqfzergerg",
  },
  {
    image: `${require("./../assets/images/snack.jpg")}`,
    title: "snackmand",
    price: "€ 30,00",
    text: "eytjtyhgfqfvb",
  },
  {
    image: `${require("./../assets/images/zomermand.jpeg")}`,
    title: "zomermand",
    price: "€ 30,00",
    text: "eytjtyhgfqfvb",
  },
  {
    image: `${require("./../assets/images/zoet.jpg")}`,
    title: "zoete mand",
    price: "€ 30,00",
    text: "arzeheyrnhzerg",
  },
  {
    image: `${require("./../assets/images/giftbasketdummy.jpg")}`,
    title: "dummy",
    price: "€ 30,00",
    text: "zergzergaergaergaergjùghùzlekrjgzlerkjg",
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProducts(Mand, index) {
    let productList = _.partition(Mand, index);
    let result = productList[0].map((Mand) => {
      return <Card image={Mand.image} title={Mand.title} price={Mand.price} />;
    });
    return result;
  }

  render() {
    return (
      <div>
        <div className="RandomSix">{this.renderProducts(Manden)}</div>
      </div>
    );
  }
}

export default Home;
