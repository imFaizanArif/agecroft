import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, FormGroup, Label, Row } from 'reactstrap';
import { Btn, H3, H4, Image, P } from '../../../../AbstractElements';
import { UserProfileDesc1 } from '../../../../Constant';
import UserFooter from './Common/UserFooter';
import UserTitle from './Common/UserTitle';
import { Link } from 'react-router-dom';

const UserDetails = () => {
    return (
        <Fragment>
            <Col sm="12" >
                <Card className="step5" data-intro="This is the your first Post">
                    <div className="profile-img-style">
                        <UserTitle title={`Account Profile`} />
                        <hr />
                        {/* Profile Information */}
                        <Col sm='12'>
                            <Card>
                                <CardBody>
                                    <H4>Profile Information
                                    </H4>
                                    <P>Your current name is Matthew Jones.
                                        Your company name is (not set).
                                        A URL friendly "slug" version will be used for payment links.
                                        This information will be displayed publicly.</P>
                                    <br />
                                    <br />

                                    <Form className='theme-form'>
                                        <Col>
                                            <Row lg={2}>
                                                <FormGroup>
                                                    <Label>First Name</Label>
                                                    <input className="form-control" type="text" name="title" placeholder="First Name *" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Last Name</Label>
                                                    <input className="form-control" type="text" name="title" placeholder="Last Name *" />
                                                </FormGroup>
                                            </Row>
                                            <Row>
                                                <FormGroup>
                                                    <Label>Company</Label>
                                                    <input className="form-control" type="text" name="title" placeholder="Company *" />
                                                </FormGroup>
                                            </Row>
                                        </Col>

                                        <Row>
                                            <Col>
                                                <div className='text-end'>
                                                    <Btn attrBtn={{ color: 'success', className: '' }}> Save Profile Information</Btn>
                                                    {/* <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                                                        <Btn attrBtn={{ color: 'danger' }}>Cancel</Btn>
                                                    </Link> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* <hr /> */}
                        {/* Email Signature*/}
                        <Col sm='12'>
                            <Card>
                                <CardBody>
                                    <H4>Email Signature</H4>
                                    <P>This will be appended to outgoing emails.</P>
                                    <br />
                                    <br />
                                    <Form className='theme-form'>
                                        <FormGroup>
                                            <Label>Email signature</Label>
                                            <textarea className='form-control' name='description' rows='3' placeholder='mathew@gmail.com' />
                                        </FormGroup>

                                        <div className='text-end'>
                                            <Btn attrBtn={{ color: 'success', className: '' }}> Save Signature</Btn>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                </Card>
            </Col>
        </Fragment>
    )
}

export default UserDetails;