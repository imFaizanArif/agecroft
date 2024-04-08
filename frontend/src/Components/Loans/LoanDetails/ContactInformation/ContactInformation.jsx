import React, { Fragment, useState } from 'react';
import { Col, Card, Form, FormGroup, Label, Row, Container, CardHeader, CardBody } from 'reactstrap';
import Select from 'react-select';

import { Btn, P, H2 } from '../../../../AbstractElements';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


const ContactInformation = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader className='d-fle'>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Contact Information`}</H2>
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
                                                            <P>Enter the borrower contact information for this loan.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Form className='theme-form'>
                                                <Row >
                                                    <Col col="5">
                                                        <FormGroup>
                                                            <Label>First Name</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="John" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col col="5">
                                                        <FormGroup>
                                                            <Label>Last Name</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="Mathew" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label>Email Address</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="jhonmathew@gmail.com" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label>Company Name</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="Microsoft" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label>Country</Label>
                                                            <Select
                                                                defaultValue={selectedOption}
                                                                onChange={setSelectedOption}
                                                                options={options}
                                                                placeholder={"UK"}
                                                                className='filter-section'
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label>Phone Number</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="010 1 718 222 2222" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <Label>Street Address</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="H#12, S#15, CA" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <Label>City</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="Sydney" />
                                                        </FormGroup>
                                                    </Col>

                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <Label>State / Province</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="LA" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <Label>ZIP / Postal code</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="78699" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <br />

                                                <Row>
                                                    <Col>
                                                        <div className='text-end'>
                                                            <Btn attrBtn={{ color: 'success' }}>
                                                                Save Chat
                                                            </Btn>
                                                        </div>
                                                    </Col>
                                                </Row>
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

export default ContactInformation;