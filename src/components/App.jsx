import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col><Button>Button</Button></Col>
        <Col><Button>Button</Button></Col>
        <Col><Button>Button</Button></Col>
      </Row>
    </Container>
  );
}

export default App;
