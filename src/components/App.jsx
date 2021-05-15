import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import OutputIjector from '../components/Console/OutputInjector';
import InputLine from '../components/Console/InputLine';

import '../css/App.css';

function App() {
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
              <div className="consolePane">
                <OutputIjector output="RAE Network connected..."/>
                <InputLine/>
              </div>
            </Container>
          </Col>




          <Col>
            <h1>2</h1>
          </Col>
        </Row>
    </div>

  );
}

export default App;
