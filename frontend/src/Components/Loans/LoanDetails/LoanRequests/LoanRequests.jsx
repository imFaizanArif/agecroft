import React, { Fragment } from 'react';
import { Col, Card, Form, FormGroup, Label, Row, Container, Input, CardHeader, CardBody } from 'reactstrap';

import { P, H5, H2 } from '../../../../AbstractElements';


const LoanRequests = () => {

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader className='d-fle'>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Loan Requests`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        <Row>
                            <div className="user-profile">
                                <Col sm="12" >
                                    <Card className="step5" data-intro="This is the your first Post">
                                        <div className="profile-img-style">
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Request Assistance</H5>
                                                            <P>Send a support request to your lender.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Form className='theme-form'>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <Label>Brief summary</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="e.g, I need to update my mailing address" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <Label>Request Details</Label>
                                                            <Input type="textarea" className="form-control" rows="5" placeholder='e.g, My new mailing address is...' />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <br />
                                            </Form>
                                        </div>
                                    </Card>
                                </Col>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
}

export default LoanRequests;