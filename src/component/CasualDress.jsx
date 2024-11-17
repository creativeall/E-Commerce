import React from "react";
import "./CasualDress.css";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ClickCasualDress from "./ClickCasualDress";

const CasualDress = (props) => {
  const [show, setShow] = useState(false);

  const handleClose =()=>{
    setShow(false)
  }

  const handleOpen =()=>{      
    setShow(true)
  }
  return (
    <>
    {show && <ClickCasualDress handleClose={handleClose} imgsrc={props.imgsrc} title={props.title} text={props.text}/>}
      <Card style={{ width: "250px" }}>
        <div onClick={handleOpen}>
          <Card.Img variant="top" src={props.imgsrc} />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CasualDress;
