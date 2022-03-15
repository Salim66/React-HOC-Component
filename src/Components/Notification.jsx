import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CounterManager from './hoc/CounterManager';

const Notification = (props) => {
  return (
    <Container>
        <Row className='d-flex justify-content-center my-5'>
            <Col md={ 5 }>
                <Card>
                    <Card.Body>
                        <p onMouseEnter={ props.increment }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ratione iusto culpa et veritatis fugit voluptate numquam officia neque, provident saepe vel possimus itaque cupiditate, perspiciatis debitis. Tempora a culpa blanditiis reprehenderit repudiandae vitae necessitatibus, iure unde totam asperiores libero veniam, esse ut voluptatem quae temporibus. Id eveniet fuga omnis?</p>
                        View: { props.counter }
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default CounterManager(Notification);