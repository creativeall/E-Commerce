import React, { useState } from "react";
import dress1 from "../images/dress1.jpg";
import dress2 from "../images/dress2.jpg";
import dress3 from "../images/dress3.jpg";
import dress4 from "../images/dress4.jpg";
import dress5 from "../images/dress5.jpg";
import dress6 from "../images/dress6.jpg";
import dress7 from "../images/dress7.jpg";
import dress8 from "../images/dress8.jpg";
import dress9 from "../images/dress9.jpg";
import dress10 from "../images/dress10.jpg";
import "./ClickCard.css";

const dressImages = [
  { id: 1, title: "Card 1", image: dress1, description: "Description 1" },
  { id: 2, title: "Card 2", image: dress2, description: "Description 2" },
  { id: 3, title: "Card 3", image: dress3, description: "Description 3" },
  { id: 4, title: "Card 4", image: dress4, description: "Description 4" },
  { id: 5, title: "Card 5", image: dress5, description: "Description 5" },
  { id: 6, title: "Card 6", image: dress6, description: "Description 6" },
  { id: 7, title: "Card 7", image: dress7, description: "Description 7" },
  { id: 8, title: "Card 8", image: dress8, description: "Description 8" },
  { id: 9, title: "Card 9", image: dress9, description: "Description 9" },
  { id: 10, title: "Card 10", image: dress10, description: "Description 10" },
];

const ClickCard = ({ handleClose, imgsrc, title, text }) => {
  const [number, setNumber] = useState(0);
  return (
    <>
      {dressImages.map((image) => (
        <div
          key={image.id}
          className="section"
          onClick={() => handleClose(image)}
        >
          <div className="container1">
            <div className="image-section">
              <img src={imgsrc} alt="photo" />
            </div>
            <div className="content-section">
              <div className="content">
                <h5>{title}</h5>
                <p>{text}</p>
                <p>
                  Category:<b>Evening dress</b>
                </p>
                <div className="boxes">
                  <div className="box">xs</div>
                  <div className="box">s</div>
                  <div className="box">m</div>
                  <div className="box">l</div>
                  <div className="box">xl</div>
                </div>

                <div className="increament">
                  <button
                    className="incre"
                    onClick={() => setNumber(number > 0 ? number - 1 : 0)}
                  >
                    -
                  </button>
                  <div className="incre">{number}</div>
                  <button
                    className="incre"
                    onClick={() => setNumber(number + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="buttons">
                  <button className="button">Add to Cart</button>
                  <button className="button">Buy Now</button>
                </div>
              </div>
              <div className="product-des">
                <h4>product details</h4>
                <p>
                  Name : STYLISH TOP WITH HIGH NECK <br />
                  Fabric : Polyester <br />
                  Net Quantity (N) : 1 <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClickCard;
