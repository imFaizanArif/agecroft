import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';

import { Btn, H4, P, Image } from '../../../AbstractElements';
import { logoWhite, logoDark } from '../../../assets';
import CustomizerContext from "../../../_helper/Customizer";

import "../../../assets/scss/pages/LoginForm.css";


const LoginForm = ({ logoClassMain }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const [value, setValue] = useState(localStorage.getItem("profileURL" || "man"));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", "man");
    localStorage.setItem("Name", "Emay Walter");
  }, [value, name]);


  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",

  });

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required'),
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
              validateOnMount
              initialTouched={{ zip: true }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  setValue("man");
                  setName("Emay Walter");
                  if (email === "test@gmail.com" && password === "test123") {
                    localStorage.setItem("login", JSON.stringify(true));
                    navigate("/");
                    toast.success("Successfully logged in!..");
                  } else {
                    toast.error("You enter wrong password or username!..");
                  }
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
                  <H4 className="text-center">Sign In</H4>
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
                    <ErrorMessage name="email" component={`div`} className='text-sm text-red mt-4' />
                  </FormGroup>

                  <FormGroup className='position-relative'>
                    <Label className='col-form-label m-0'>
                      Password <span className='text-red'> * </span>
                    </Label>
                    <div className='position-relative'>
                      <Input
                        className='form-control'
                        type={togglePassword ? 'text' : 'password'}
                        name='password'
                        required placeholder='*********'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.password} />
                      <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                        <span className={togglePassword ? '' : 'show'}></span>
                      </div>
                    </div>
                    <span className='text-sm text-red my-4'>
                      {errors?.password && touched?.password && errors?.password}
                    </span>
                  </FormGroup>

                  <FormGroup className='position-relative'>
                    <div className='checkbox'>
                      <Input id='checkbox1' type='checkbox' />
                      <Label className='text-muted' for='checkbox1'>
                        Remember password
                      </Label>
                    </div>
                    <Link className='link' to={`${process.env.PUBLIC_URL}/forget-password`}>
                      Forgot password?
                    </Link>
                  </FormGroup>
                  <FormGroup>
                    <Btn attrBtn={{ className: 'd-block w-100 mt-2', color: 'primary', type: 'submit' }}>
                      Sign in
                    </Btn>
                  </FormGroup>

                  <P attrPara={{ className: 'text-center mb-0 ' }}>
                    Don't have account?
                    <Link className='ms-2' to={`${process.env.PUBLIC_URL}/register`}>
                      Create Account
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

export default LoginForm;
