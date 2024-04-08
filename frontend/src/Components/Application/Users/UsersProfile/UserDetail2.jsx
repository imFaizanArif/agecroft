import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, FormGroup, Label, Row } from 'reactstrap';
import { Btn, H3, H4, Image, P } from '../../../../AbstractElements';
import { UserProfileDesc1 } from '../../../../Constant';
import UserFooter from './Common/UserFooter';
import UserTitle from './Common/UserTitle';

const UserDetails2 = () => {
    return (
        <Fragment>
            <Col sm="12" >
                <Card className="step5" data-intro="This is the your first Post">
                    <div className="profile-img-style">
                        <UserTitle title={`Account Setting`} />
                        <hr />
                        {/* Account Setting */}
                        <Col sm='12'>
                            <Card>
                                <CardBody>
                                    <H4>Change Email</H4>
                                    <P>Your current email address is jonesmatr@gmail.com.
                                        To change your email address, please also confirm your current password. After click on Save Email Address button please verify your email address to change take effect.</P>
                                    <br />
                                    <br />

                                    <Form className='theme-form'>
                                        <Col>
                                            <Row>
                                                <FormGroup>
                                                    <Label>Email Address</Label>
                                                    <input className="form-control" type="text" name="email" placeholder="mathew@gmail.com" />
                                                </FormGroup>
                                            </Row>
                                            <Row>
                                                <FormGroup>
                                                    <Label>Current Password</Label>
                                                    <input className="form-control" type="text" name="password" placeholder="*********" />
                                                </FormGroup>
                                            </Row>
                                        </Col>

                                        <Row>
                                            <Col>
                                                <div className='text-end'>
                                                    <Btn attrBtn={{ color: 'success' }}> Save Email Address</Btn>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* <hr /> */}
                        {/* Reset Password*/}
                        <Col sm='12'>
                            <Card>
                                <CardBody>
                                    <H4>Reset Password</H4>
                                    <P>For security, you must confirm your current email address.</P>
                                    <br />
                                    <br />
                                    <Form className='theme-form'>
                                        <FormGroup>
                                            <Label>Changing your password</Label>
                                            <P>
                                                A message with a link will be sent to your email address <strong className='text-underline'>jonesmatr@gmail.com</strong>.
                                                To reset your password, please visit the link, or copy the URL into a web browser.</P>
                                        </FormGroup>
                                        <div className='text-end'>
                                            <Btn attrBtn={{ color: 'success' }}>
                                                Send Password Reset
                                            </Btn>
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

export default UserDetails2;