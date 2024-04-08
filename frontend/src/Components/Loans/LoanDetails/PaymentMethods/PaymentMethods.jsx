import React, { Fragment } from 'react';
import { Col, Card, Row, Container, CardHeader, CardBody } from 'reactstrap';

import { Btn, P, H2, H6 } from '../../../../AbstractElements';


const PaymentMethods = () => {

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader className='d-fle'>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Payment Methods`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='text-center'>
                        <Row>
                            <i className="icofont icofont-bank-alt m-t-30 m-b-35" style={{
                                fontSize: "xxx-large",
                                color: "#898989",
                            }}></i>
                            <H6>No Payment Methods yet</H6>
                            <P>Please select the payment method you are interested in</P>
                        </Row>
                        <Row className='m-t-25 m-b-50'>
                            <Col className='d-flex justify-content-center'>
                                <div className='text-center m-r-15'>
                                    <Btn attrBtn={{ color: 'white', className: "btn-outline-primary" }} >
                                        Add Bank Account
                                    </Btn>
                                </div>
                                <div className='text-center'>
                                    <Btn attrBtn={{ color: 'white', className: "btn-outline-primary" }} >
                                        Add Credit Card
                                    </Btn>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
}

export default PaymentMethods;