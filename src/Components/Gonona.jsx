import React, { Component } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import CounterManager from './hoc/CounterManager';

class Gonona extends Component {

  render() {
      


    return (
      <Container>
          <Row className='d-flex justify-content-center my-5'>
              <Col md={ 5 }>
                <Card>
                    <Card.Body>
                        <Button onDoubleClick={ this.props.increment } className='btn btn-primary'>++</Button>&nbsp;
                        <Button onDoubleClick={ this.props.decrement } className='btn btn-danger'>--</Button>
                        <h3>{ this.props.counter }</h3>
                    </Card.Body>
                </Card>
              </Col>
          </Row>
      </Container>
    )
  }
}

export default CounterManager(Gonona);