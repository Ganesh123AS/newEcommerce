import React from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import { User } from "./mockData";

const MockTest = () => {
    let data = User.result
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Table bordered hover responsive size="sm">
              <thead className="table-dark">
                <tr>
                  <th>S.N.</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {
                    data && data.map( (item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phoneNumber}</td>
                        </tr>
                     ) )
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MockTest;