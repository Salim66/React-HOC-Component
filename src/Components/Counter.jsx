import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import CounterManager from './hoc/CounterManager';

const Counter = (props) => {

  return (
    <Container>
        <Row className='d-flex justify-content-center my-5'>
            <Col md={ 5 }>
                <Card>
                    <Card.Body>
                        <Button onClick={ props.increment } varient='primary'>++</Button>&nbsp; 
                        <Button onClick={ props.decrement } className='btn btn-danger'>--</Button>
                        <h2>{ props.counter }</h2>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default CounterManager(Counter);