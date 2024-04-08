import React, { Fragment, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { toast } from "react-toastify";

import { Btn, H4, Image } from '../../../AbstractElements';
import { logoWhite, logoDark } from '../../../assets';

import "../../../assets/scss/pages/LoginForm.css";
import "../../../assets/scss/pages/EmailVerify.css";


const EmailVerify = ({ logoClassMain }) => {
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        email: "",
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
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    // toast.success("Check you Email!..");
                                    // navigate("/");
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
                                <Form className='theme-form login-form text-center' onSubmit={handleSubmit}>
                                    <H4 className="text-center">Verify Email</H4>
                                    <FormGroup>
                                        <Label className='col-form-label m-0 text-center'>
                                            Please check your email for a verification link.
                                        </Label>
                                    </FormGroup>

                                    <FormGroup>
                                        <Btn attrBtn={{ className: 'd-block w-100 mt-2', color: 'primary', type: 'submit' }}>
                                            Verify Email
                                        </Btn>
                                    </FormGroup>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EmailVerify;
