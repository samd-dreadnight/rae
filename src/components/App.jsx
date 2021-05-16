import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import ConsolePane from '../components/Console/ConsolePane';

import {cleanInput} from '../Objects/CommonFunctions.js';
import {help, scan, cls, invalidInput} from '../Objects/Commands.js';
import '../css/App.css';


function App() {

  const [input, setInput] = useState("");
  const [outputLines, setOutputLines] = useState(["RAE Network connected : Type 'help'"]);


  function handleChange(event) {
    setInput(event.target.value);
}


function submitInput(event) {
    event.preventDefault();
    if (input === "") {
      setInput(" ");
    } else {
      setInput("");
    }
    processInput(input);
  }


function processInput(i) {
  var cleanedInput = cleanInput(i);
  switch (cleanedInput) {
    case "help": 
      setOutputLines(help());
      break;

    case "scan":
      setOutputLines(scan());
      break;

    case "cls":
      setOutputLines(cls());
      break;

    default:
      setOutputLines(invalidInput(cleanedInput));
  }
  
}

  return (
    <div>

      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">RAE.net</Nav.Link>
        </Nav.Item>
      </Nav>

      <Row>
        <Col xs={8}>
          <Container fluid>
          <ConsolePane
            outputLines={outputLines}
            handleChange={handleChange}
            submitInput={submitInput}
            value={input}
          />
          </Container>
        </Col>

          <Col>
          </Col>
        </Row>
    </div>

  );
}

export default App;
