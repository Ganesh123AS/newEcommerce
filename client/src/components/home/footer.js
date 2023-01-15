import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "../../assets/css/home/footer.css";

const Footer = () => {
  return (
    <div className='bg-dark'>
      <Container>
        <Row>
            <Col sm={12} lg={4}>
                <h6>First Footer</h6>
            </Col>
            <Col sm={12} lg={4}>
                <h6>Second Footer</h6>
            </Col>
            <Col sm={12} lg={4}>
                <h6>Third Footer</h6>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;