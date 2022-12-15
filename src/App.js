import React, { useState } from 'react';
import Icon from './components/Icon';
import {toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Row, Col, } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

var itemArray = new Array(9).fill("empty")

function App(){
  const [isCross, setIscross] = useState(false);
  const [winMessage, setwinMessage] = useState("");

  function reload (){
    setIscross(false);
    itemArray.fill("empty", 0, 9);
    setwinMessage("")
  };

  function checkWinner() {
    if (itemArray[0]!== "empty"&& itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2]){
      setwinMessage(`${itemArray[0]} won`)
    }
    else if (itemArray[3]!== "empty"&& itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5]){
      setwinMessage(`${itemArray[3]} won`)
    }
    else if (itemArray[6]!== "empty"&& itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8]){
      setwinMessage(`${itemArray[6]} won`)
    }
    else if (itemArray[0]!== "empty"&& itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6]){
      setwinMessage(`${itemArray[0]} won`)
    }
    else if (itemArray[1] !== "empty"&& itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7]){
      setwinMessage(`${itemArray[1]} won`)
    }
    else if (itemArray[2]!== "empty"&& itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8]){
      setwinMessage(`${itemArray[2]} won`)
    }
    else if (itemArray[0]!== "empty"&& itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8]){
      setwinMessage(`${itemArray[0]} won`)
    }
    else if (itemArray[2]!== "empty"&& itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] ){
      setwinMessage(`${itemArray[2]} won`)
    }
else if(itemArray[0]!== "empty"&& itemArray[1]!== "empty" && itemArray[2]!== "empty" && itemArray[3]!== "empty" && itemArray[4]!== "empty"&& itemArray[5]!== "empty" && itemArray[6]!== "empty"&& itemArray[7]!== "empty"&& itemArray[8]!== "empty"){
  setwinMessage("draw") 
}
  }

  function change(itemNumber){
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]=isCross?"cross":"circle"
      setIscross(!isCross)
    }
    else if(itemArray[itemNumber]!=="empty"){
      return toast("already filled",{type:"error"})
    }
    checkWinner()

    if(winMessage){
      return toast(winMessage,{type:"success"})
    }
   }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-light text-uppercase text-center">{winMessage}</h1>
              <Button block onClick={reload}className="btn reload btn-light text-center ">RESTART GAME </Button>
            </div>
          ) : (
            <h1 className="text-light text-uppercase text-center">{isCross ? "cross" : "circle"} TURNS </h1>
          )
        }
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card key={index} className="card"color="white" onClick={() => change(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
