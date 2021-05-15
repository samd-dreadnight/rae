import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import OutputIjector from '../components/Console/OutputInjector';
import InputLine from '../components/Console/InputLine';

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
    processInput(input);
    setInput("");
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
        setOutputLines(cls(outputLines));
        break;

      default:
        setOutputLines(invalidInput(cleanedInput));
        console.log("Triggered!!!")
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
            <div id="pane" className="consolePane">
            {outputLines.map((line, index) => {
              return (
                <OutputIjector output={line}/>
              );
            })}
              <InputLine 
                change={handleChange} 
                submit={submitInput}
                value={input}
              />
            </div>
          </Container>
        </Col>


          <Col>
          </Col>
        </Row>
    </div>

  );
}

export default App;
