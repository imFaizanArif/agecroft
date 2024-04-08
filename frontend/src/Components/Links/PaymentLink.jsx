import React, { Fragment, useState } from 'react';
import { Col, Card, Form, FormGroup, Label, Row, Container, Input } from 'reactstrap';

import { Btn, P, Breadcrumbs, H5 } from '../../AbstractElements';
import { Typeahead } from 'react-bootstrap-typeahead';


const PaymentLink = () => {
    const multiple = false;
    const [options, setOptions] = useState([]);

    return (
        <Fragment>
            <Breadcrumbs mainTitle="Draft Payment Links" parent="Links" title="Payment Links" />
            <Container fluid={true}>
                <div className="user-profile">
                    <Col sm="12" >
                        <Card className="step5" data-intro="This is the your first Post">
                            <div className="profile-img-style">
                                <Row>
                                    <Col>
                                        <div className="media">
                                            <div className="media-body align-self-center">
                                                <H5>Payment Link</H5>
                                                <P>Payment links can be used once. They cannot be used for multiple payments. <br />
                                                    Once used, only the name can be modified. All other details are locked.</P>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                                <Form className='theme-form'>
                                    <Row lg="2">
                                        <Col>
                                            <FormGroup>
                                                <Label>Payment Link Name</Label>
                                                <input className="form-control" type="text" name="email" placeholder="Draft Payment Link 01-Apr-2024" />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label>Payment</Label>
                                                <input className="form-control" type="text" name="text" placeholder="$" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label>Payment Link Slug</Label>
                                                <input className="form-control" type="text" name="email" placeholder="matthew@gmail.com/ Draft Payment Link 01-Apr-2024" />
                                            </FormGroup>
                                        </Col>
                                        <div className='checkbox'>
                                            <Input id='checkbox1' type='checkbox' />
                                            <Label className='text-muted' for='checkbox1'>
                                                Update slug to match name
                                            </Label>
                                        </div>
                                    </Row>
                                    <br />
                                    <Col>
                                        <Row>
                                            <div id="the-basics" className='typeahead'>
                                                <FormGroup>
                                                    <Label>Credit/Debit card processing</Label>
                                                    <div>
                                                        <Typeahead
                                                            id="basic-typeahead"
                                                            labelKey="name"
                                                            multiple={multiple}
                                                            options={options}
                                                            placeholder="Choose a state..."
                                                        />
                                                    </div>
                                                </FormGroup>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div id="the-basics" className='typeahead'>
                                                <FormGroup>
                                                    <Label>ACH/Bank account Processing</Label>
                                                    <div>
                                                        <Typeahead
                                                            id="basic-typeahead"
                                                            labelKey="name"
                                                            multiple={multiple}
                                                            options={options}
                                                            placeholder="Choose a state..."
                                                        />
                                                    </div>
                                                </FormGroup>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div id="the-basics" className='typeahead'>
                                                <FormGroup>
                                                    <Label>Attached Loan</Label>
                                                    <div>
                                                        <Typeahead
                                                            id="basic-typeahead"
                                                            labelKey="name"
                                                            multiple={multiple}
                                                            options={options}
                                                            placeholder="Choose a state..."
                                                        />
                                                    </div>
                                                </FormGroup>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Row>
                                        <Col>
                                            <div className='text-end'>
                                                <Btn attrBtn={{ color: 'success' }}>
                                                    Save Payment Link Details
                                                </Btn>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Card>
                    </Col>
                </div>
            </Container>
        </Fragment>
    )
}

export default PaymentLink;