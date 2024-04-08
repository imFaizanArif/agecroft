import React, { Fragment, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { Btn, H4, P, Image } from '../../../AbstractElements';
import { logoWhite, logoDark } from '../../../assets';

import "../../../assets/scss/pages/LoginForm.css";


const RegisterFrom = ({ logoClassMain }) => {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",

  });

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  return (
    <Fragment>
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
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  toast.success("Successfully Sign Up!..");
                  navigate(`${process.env.PUBLIC_URL}/email-verify`);
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
                  <H4 className="text-center mb-4">Create your account</H4>
                  <FormGroup>
                    <Label className='col-form-label m-0 pt-0'>
                      Your Name <span className='text-red'> * </span>
                    </Label>
                    <Input
                      className='form-control'
                      name='name'
                      type='text'
                      required=''
                      placeholder='Joe Mattew'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.name}
                    />
                    <ErrorMessage name="name" component={`div`} className='text-sm text-red mt-1' />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label m-0 pt-0'>
                      Email Address <span className='text-red'> * </span>
                    </Label>
                    <Input
                      className='form-control'
                      type='email'
                      name='email'
                      required=''
                      placeholder='test@gmail.com'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.email}
                    />
                    <ErrorMessage name="email" component={`div`} className='text-sm text-red mt-1' />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label m-0 pt-0'>
                      Company
                    </Label>
                    <Input
                      className='form-control'
                      name='company'
                      type='text'
                      placeholder='Microsoft'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.company}
                    />
                  </FormGroup>
                  <FormGroup className='position-relative'>
                    <Label className='col-form-label m-0 pt-0'>
                      Password <span className='text-red'> * </span>
                    </Label>
                    <div className='position-relative'>
                      <Input
                        className='form-control'
                        type={togglePassword ? 'text' : 'password'} name='password'
                        required
                        placeholder='*********'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.password}
                      />
                      <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                        <span className={togglePassword ? '' : 'show'}></span>
                      </div>
                    </div>
                    <ErrorMessage name="password" component={`div`} className='text-sm text-red mt-1' />
                  </FormGroup>
                  <FormGroup className='position-relative'>
                    <Label className='col-form-label m-0 pt-0'>
                      Confirm Password <span className='text-red'> * </span>
                    </Label>
                    <div className='position-relative'>
                      <Input
                        className='form-control'
                        type={togglePassword2 ? 'text' : 'password'}
                        name='confirmPassword'
                        required
                        placeholder='*********'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.confirmPassword}
                      />
                      <div className='show-hide' onClick={() => setTogglePassword2(!togglePassword2)}>
                        <span className={togglePassword2 ? '' : 'show'}></span>
                      </div>
                    </div>
                    <ErrorMessage name="confirmPassword" component={`div`} className='text-sm text-red mt-1' />
                  </FormGroup>
                  <FormGroup>
                    <Btn attrBtn={{ className: 'd-block w-100', color: 'primary', type: 'submit' }}>Create Account</Btn>
                  </FormGroup>
                  <P attrPara={{ className: 'mb-0 text-center' }}>
                    Already have an account?
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
    </Fragment>
  );
};

export default RegisterFrom;