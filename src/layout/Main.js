import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            <Row>
                <Col><h2>Side nav</h2></Col>
                <Col>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;