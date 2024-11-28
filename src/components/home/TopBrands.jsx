import React from "react";
import trek from "../../../public/images/trek.jpg";
import cannondale from "../../../public/images/cannondale.png";
import Duronto from "../../../public/images/Duronto.png";
import giant from "../../../public/images/giant.jpg";
import kona from "../../../public/images/kona.jpg";
import scott from "../../../public/images/scott.png";
import cervelo from "../../../public/images/cervelo.jpg";
import santa from "../../../public/images/santa.jpg";
import Marquee from "react-fast-marquee";
const TopBrands = () => {
  return (
    <Marquee className="brands_list">
      <div style={{ padding: "0 30px" }}>
        <img height={600} width={220} src={trek} alt="trek" />
      </div>
      <div style={{ padding: "0 30px" }}>
        <img height={150} width={220} src={cannondale} alt="cannondale" />
      </div>
      <div style={{ padding: "0 30px" }}>
        <img height={200} width={220} src={Duronto} alt="duronto" />
      </div>
      <div style={{ padding: "0 30px" }}>
        <img height={300} width={280} src={giant} alt="giant" />
      </div>
      <div style={{ padding: "0 30px" }}>
        <img height={200} width={220} src={kona} alt="kona" />
      </div>
      <div style={{ padding: "0 30px" }}>
        <img height={220} width={220} src={scott} alt="scott" />
      </div>
      <div style={{ padding: "0 30px" }}>
        <img height={160} width={220} src={cervelo} alt="cervelo" />
      </div>
      <div style={{ padding: "0 30px" }}>
        <img height={180} width={220} src={santa} alt="santa" />
      </div>
    </Marquee>
  );
};

export default TopBrands;
