import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import ConsolePane from '../components/Console/ConsolePane';
import {cleanInput} from '../Objects/CommonFunctions.js';
import {help, scan, cls, invalidInput} from '../Objects/Commands.js';
import '../css/App.css';


function App() {

  const [reRender, setReRender] = useState(true);
  const [input, setInput] = useState(null);
  const [outputLines, setOutputLines] = useState(["RAE Network connected : Type 'help'"]);


  function handleChange(event) {
    setInput(event.target.value);
  }


  function processInput(event) {
    event.preventDefault();
    var cleanedInput = cleanInput(input);
    setInput("");
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
    setReRender(!reRender);
  }


  return (
    <div>
      <Navbar>
        <Navbar.Brand className="brand" href="#home">RAE.net</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">BlueDawn</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>


      <Row>
        <Col xs={8}>
          <Container fluid>
          <ConsolePane
            outputLines={outputLines}
            handleChange={handleChange}
            processInput={processInput}
            value={input}
          />
          </Container>
        </Col>

          <Col>
          <div>
            <h1>Inventory</h1>
            <div className="inventory"></div>
          </div>

          <div>
            <h1>Scratch Pad</h1>
              <textarea className="scratchInput"></textarea>
          </div>
          </Col>
        </Row>
    </div>

  );
}

export default App;