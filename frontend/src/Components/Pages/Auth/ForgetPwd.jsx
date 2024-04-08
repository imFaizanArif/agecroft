import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';

import { Btn, H4, P, Image } from '../../../AbstractElements';
import { logoWhite, logoDark } from '../../../assets';

import "../../../assets/scss/pages/LoginForm.css";


const ForgetPwd = ({ logoClassMain }) => {
  const [initialValues, setInitialValues] = useState({
    email: "",
  });

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
  });

  return (
    <Fragment>
      <section>
        <Container className='p-0 login-page' fluid={true}>
          <Row className='m-0'>
            <Col className='p-0'>
              <div className='login-card'>
                <div>
                  <div>
                    <Link className={`logo ${logoClassMain ? logoClassMain : ''}`} to={process.env.PUBLIC_URL}>
                      <img className='w-10 img-fluid for-light' style={{ marginLeft: "auto", marginRight: "auto" }} src={logoWhite} alt='logo' />
                      <img className='w-10 img-fluid for-dark' style={{ marginLeft: "auto", marginRight: "auto" }} src={logoDark} alt='logo' />
                    </Link>
                  </div>
                  <div className='login-main'>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      validateOnMount
                      initialTouched={{ zip: true }}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 400);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
                        <Form className='theme-form login-form' onSubmit={handleSubmit}>
                          <H4 className="text-center">Reset Your Password</H4>
                          <FormGroup>
                            <Label className='col-form-label m-0'>
                              Email Address <span className='text-red'> * </span>
                            </Label>
                            <Input
                              className='form-control'
                              type='email'
                              name="email"
                              required placeholder='test@gmail.com'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.email}
                            />
                            <ErrorMessage name="email" component={`div`} className='text-sm text-red mt-1' />
                          </FormGroup>
                          <FormGroup>
                            <Btn attrBtn={{ color: 'primary', className: 'btn d-block w-100 mt-4', type: 'submit' }}>Done</Btn>
                          </FormGroup>
                          <P attrPara={{ className: 'text-start' }}>
                            Already have an password?
                            <Link className='ms-2' to={`${process.env.PUBLIC_URL}/login`}>
                              Sign in
                            </Link>
                          </P>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ForgetPwd;
