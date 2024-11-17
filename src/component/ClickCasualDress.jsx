import React, { useState } from "react";
import casual1 from "../images/casual1.jpg";
import casual2 from "../images/casual2.jpg";
import casual3 from "../images/casual3.jpg";
import casual4 from "../images/casual4.png";
import casual5 from "../images/casual5.jpg";
import casual6 from "../images/casual6.jpg";
import casual7 from "../images/casual7.jpg";
import casual8 from "../images/casual8.jpg";
import casual9 from "../images/casual9.jpg";
import casual10 from "../images/casual10.jpg";
import "./ClickCard.css";

const Cdress = [
  { id: 1, image: casual1 },
  { id: 2, image: casual2 },
  { id: 3, image: casual3 },
  { id: 4, image: casual4 },
  { id: 5, image: casual5 },
  { id: 6, image: casual6 },
  { id: 7, image: casual7 },
  { id: 8, image: casual8 },
  { id: 9, image: casual9 },
  { id: 10, image: casual10 },
];

const ClickCasualDress = ({ handleclose,imgsrc,title, text }) => {
  const [number, setNumber] = useState(0);

  return (
    <>
      {Cdress.map((image) => (
        <div key={image.id} className="section" onClick={() => handleclose(image)}>
          <div className="container1">
            <div className="image-section">
              <img src={imgsrc} alt="Casual Dress" />
            </div>
            <div className="content-section">
              <div className="content">
                <h5>{title}</h5>
                <p>{text}</p>
                <p>
                  Category: <b>Evening dress</b>
                </p>
                <div className="boxes">
                  <div className="box">XS</div>
                  <div className="box">S</div>
                  <div className="box">M</div>
                  <div className="box">L</div>
                  <div className="box">XL</div>
                </div>

                <div className="increament">
                  <button className="incre" onClick={() => setNumber(number > 0 ? number - 1 : 0)}>
                    -
                  </button>
                  <div className="incre">{number}</div>
                  <button className="incre" onClick={() => setNumber(number + 1)}>
                    +
                  </button>
                </div>
                <div className="buttons">
                  <button className="button">Add to Cart</button>
                  <button className="button">Buy Now</button>
                </div>
              </div>
              <div className="product-des">
                <h4>Product Details</h4>
                <p>
                  Name: STYLISH TOP WITH HIGH NECK <br />
                  Fabric: Polyester <br />
                  Net Quantity (N): 1 <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClickCasualDress;
