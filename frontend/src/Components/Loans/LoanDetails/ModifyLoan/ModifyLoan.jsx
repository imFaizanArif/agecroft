import React, { Fragment, useState } from 'react';
import { Col, Card, Form, FormGroup, Label, Row, Container, Input, CardHeader, CardBody, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import { Btn, P, H5, H2, H6 } from '../../../../AbstractElements';

const options1 = [
    { value: '(Disable Credit/Debit card payments)', label: '(Disable Credit/Debit card payments)' },
];
const options2 = [
    { value: '(Disable ACH/Bank payments)', label: '(Disable ACH/Bank payments)' },
];
const options3 = [
    { value: '', label: '' },
];


const ModifyLoan = () => {
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Modify Loan`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Loan Terms</H5>
                                                            <P>Enter the following details to set up your loan.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row >
                                                <Col>
                                                    <FormGroup>
                                                        <Label>Loan Name</Label>
                                                        <input className="form-control" type="text" name="text" placeholder="Testing" />
                                                    </FormGroup>
                                                    <Row>
                                                        <Col lg="4">
                                                            <p className='text-dark'>Financed amount</p>
                                                            <P>$1,500.00</P>
                                                        </Col>
                                                        <Col lg="4">
                                                            <p className='text-dark'># of monthly payments</p>
                                                            <P>150</P>
                                                        </Col>
                                                        <Col lg="4">
                                                            <p className='text-dark'>Payment start date</p>
                                                            <P>12-04-2024</P>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg="4">
                                                            <p className='text-dark'>Interest rate</p>
                                                            <P>0.00%</P>
                                                        </Col>
                                                        <Col lg="4">
                                                            <p className='text-dark'>Interest start date</p>
                                                            <P>12-05-2024</P>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Penalties</H5>
                                                            <P>Additional fees may apply after a loan is past due.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row >
                                                <Col lg="4">
                                                    <FormGroup>
                                                        <Label>Late Fee Amount</Label>
                                                        <input className="form-control" type="text" name="text" placeholder="$25.00 USD" />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="4">
                                                    <FormGroup>
                                                        <Label>Late Fee Grace Period</Label>
                                                        <input className="form-control" type="text" name="text" placeholder="5 Days" />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="4">
                                                    <FormGroup>
                                                        <Label>Days Before Default</Label>
                                                        <input className="form-control" type="text" name="text" placeholder="25 Days" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Monthly Fees</H5>
                                                            <P>Monthly fees are added for each statement that is due. Any changes apply towards future scheduled payments.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row >
                                                <Col lg="5">
                                                    <FormGroup>
                                                        <Btn attrBtn={{ color: 'success' }}>
                                                            Add Monthly Fees
                                                        </Btn>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Transaction Fees</H5>
                                                            <P>A transaction fee may apply for each manually submitted or automatically scheduled payment. Any fees apply towards future transactions.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row >
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <Btn attrBtn={{ color: 'success' }}>
                                                            Add Credit/Debit Card Fees
                                                        </Btn>
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <Btn attrBtn={{ color: 'success' }}>
                                                            Add ACH/Bank Account Fees
                                                        </Btn>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Payment Processors</H5>
                                                            <P>Enable collecting funds by selecting the processor for each form of payment.</P>
                                                            <p className='text-danger'>There are no active processors at this time. Add processors via → <Link to={``}> Account Settings.</Link></p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Col>
                                                <Row>
                                                    <FormGroup>
                                                        <Select
                                                            defaultValue={selectedOption1}
                                                            onChange={setSelectedOption1}
                                                            options={options1}
                                                            placeholder={"(Disable Credit/Debit card payments)"}
                                                            className='filter-section'
                                                        />
                                                    </FormGroup>
                                                </Row>
                                                <Row>
                                                    <FormGroup>
                                                        <Select
                                                            defaultValue={selectedOption2}
                                                            onChange={setSelectedOption2}
                                                            options={options2}
                                                            placeholder={"(Disable ACH/Bank payments)"}
                                                            className='filter-section'
                                                        />
                                                    </FormGroup>
                                                </Row>
                                            </Col>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Tags</H5>
                                                            <P>Use tag labels to identify and organize loans.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row >
                                                <Col>
                                                    <FormGroup>
                                                        <CreatableSelect
                                                            isMulti
                                                            defaultValue={selectedOption3}
                                                            onChange={setSelectedOption3}
                                                            options={options3}
                                                            placeholder={"Add tag"}
                                                            className='filter-section'
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Status</H5>
                                                            <P>An active loan will scheduled payments due. Payments are automatically submitted on the due date when a payment method exists.</P>
                                                            <P>An inactive loan will not schedule payments, nor automatically submit any future payments.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row>
                                                <Row>
                                                    <Card>
                                                        <Media className='p-20'>
                                                            <Media body>
                                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>
                                                                    Manual
                                                                </H6>
                                                                <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                                                                    The loan should be active and in good standing. <br />
                                                                    Payments are scheduled, and should be submitted manually on the due date. <br />
                                                                    No outstanding late fees. <br />
                                                                    No outstanding past due balance. </p>
                                                            </Media>
                                                        </Media>
                                                    </Card>
                                                </Row>
                                                <Row>
                                                    <Card>
                                                        <Media className='p-20'>
                                                            <Media body>
                                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>
                                                                    Grace period
                                                                </H6>
                                                                <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                                                                    The loan should be active and in the grace period. <br />
                                                                    Full payment of any past due balance should enable the loan to be in good standing. <br />
                                                                    Payments are scheduled, and should be submitted manually on the due date. <br />
                                                                    Late fees may apply. </p>
                                                            </Media>
                                                        </Media>
                                                    </Card>
                                                </Row>
                                                <Row>
                                                    <Card>
                                                        <Media className='p-20'>
                                                            <Media body>
                                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>
                                                                    Late
                                                                </H6>
                                                                <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                                                                    The loan should be active and marked as late. <br />
                                                                    Full payment of any past due balance should enable the loan to be in good standing. <br />
                                                                    Payments are scheduled, and should be submitted manually on the due date. </p>
                                                            </Media>
                                                        </Media>
                                                    </Card>
                                                </Row>
                                                <Row>
                                                    <Card>
                                                        <Media className='p-20'>
                                                            <div className='radio radio-primary me-3'>
                                                                <Input id='radio14' type='radio' name='radio1' value='option1' />
                                                                <Label for='radio14'></Label>
                                                            </div>
                                                            <Media body>
                                                                <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>
                                                                    Default
                                                                </H6>
                                                                <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                                                                    The loan should be inactive and in default. <br />
                                                                    Full payment of any past due balance should enable reactivation automatically. <br />
                                                                    No payments will be scheduled. </p>
                                                            </Media>
                                                        </Media>
                                                    </Card>
                                                </Row>
                                                <Row>
                                                    <Card>
                                                        <Media className='p-20'>
                                                            <div className='radio radio-success me-3'>
                                                                <Input id='radio13' type='radio' name='radio1' value='option1' />
                                                                <Label for='radio13'></Label>
                                                            </div>
                                                            <Media body>
                                                                <H6 className='mt-0 mega-title-badge'>
                                                                    Fully paid
                                                                </H6>
                                                                <p style={{ fontSize: "12px", lineHeight: "20px" }}>The loan should be inactive and marked as fully paid. <br />
                                                                    No further payments will be scheduled.</p>
                                                            </Media>
                                                        </Media>
                                                    </Card>
                                                </Row>
                                                <Row>
                                                    <Card>
                                                        <Media className='p-20'>
                                                            <div className='radio radio-secondary me-3'>
                                                                <Input id='radio13' type='radio' name='radio1' value='option1' />
                                                                <Label for='radio13'></Label>
                                                            </div>
                                                            <Media body>
                                                                <H6 className='mt-0 mega-title-badge'>
                                                                    Stopped
                                                                </H6>
                                                                <p style={{ fontSize: "12px", lineHeight: "20px" }}>The loan should be inactive. <br />
                                                                    No payments should be scheduled.</p>
                                                            </Media>
                                                        </Media>
                                                    </Card>
                                                </Row>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col>
                                                    <div className="media text-danger">
                                                        <div className="media-body align-self-center">
                                                            <H5>Delete Loan</H5>
                                                            <P>Please type the loan ID # 31667 to confirm.</P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row >
                                                <div className='d-flex align-items-end justify-content-between'>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label>Confirm Loan ID</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="#31667" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className='ml-15'>

                                                            <FormGroup>
                                                                <Btn attrBtn={{ color: 'danger' }}>
                                                                    Delete Loan
                                                                </Btn>
                                                            </FormGroup>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Row>
                                        <Col>
                                            <div className='text-end'>
                                                <Btn attrBtn={{ color: 'success' }}>
                                                    Save Chat
                                                </Btn>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
}

export default ModifyLoan;