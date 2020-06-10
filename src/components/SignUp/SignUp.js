import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import YupSchema from './YupSchema';
import './SignUp.scss';
import enLang from '../../assets/language/en.json';
import uaLang from '../../assets/language/ua.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function SignUp(props) {
    let lang = props.lang ? uaLang : enLang;
    const { title, firstName, lastName, email, phone, location, button } = lang.signUp;
    return (
        <section id="signUp" className="SignUp">
            <svg className="waveTop" xmlns="http://www.w3.org/2000/svg" viewBox="0  170 1440 150"><path fill="#4512AB" fill-opacity="1" d="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,213.3C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="container">
                <div className="d-flex">
                    <div className="left-content col-6">
                        <div className="airplane col-12">
                        </div>
                        <div className="air-icon">
                            <div className="centered-icon">
                                <div><a className="circle" href="https://m.facebook.com/itclusteracademy/" target="blank">
                                    <FontAwesomeIcon
                                        className="icon-edit"
                                        icon={faFacebookF}
                                    /></a></div>
                                <div className="mt-4"><a className="circle" href="https://www.instagram.com/itcluster_academy/?igshid=pcmue6cyzyu2" target="blank">
                                    <FontAwesomeIcon
                                        className="icon-edit"
                                        icon={faInstagram}
                                    /></a></div>
                                <div><a className="circle" href="https://www.linkedin.com/company/it-cluster-academy" target="blank">
                                    <FontAwesomeIcon
                                        className="icon-edit"
                                        icon={faLinkedinIn}
                                    /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper col-12 col-md-6">
                        <h2 className="title">{title}</h2>
                        <div className="registration">
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    phone: '',
                                    email: '',
                                    location: ''
                                }}
                                validationSchema={YupSchema}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    setTimeout(() => {
                                        resetForm();
                                        console.log(values);
                                    }, 400);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="form"
                                    >
                                        <div className="inputWrapper">
                                            <Field
                                                className="form__firstName"
                                                style={errors.firstName && touched.firstName ? { border: "1px solid red" } : null}
                                                name="firstName"
                                                placeholder={firstName}
                                            />
                                            {errors.firstName && touched.firstName ? <div className="error__message">
                                                <ErrorMessage name="firstName" />
                                            </div> : null}
                                        </div>
                                        <div className="inputWrapper">
                                            <Field
                                                className="form__lastName"
                                                style={errors.lastName && touched.lastName ? { border: "1px solid red" } : null}
                                                name="lastName"
                                                placeholder={lastName}
                                            />
                                            {errors.lastName && touched.lastName ? <div className="error__message">
                                                <ErrorMessage name="lastName" />
                                            </div> : null}
                                        </div>
                                        <div className="inputWrapper">
                                            <Field
                                                className="form__email"
                                                style={errors.email && touched.email ? { border: "1px solid red" } : null}
                                                name="email"
                                                placeholder={email}
                                            />
                                            {errors.email && touched.email ? <div className="error__message">
                                                <ErrorMessage name="email" />
                                            </div> : null}
                                        </div>
                                        <div className="inputWrapper">
                                            <Field
                                                className="form__phone"
                                                style={errors.phone && touched.phone ? { border: "1px solid red" } : null}
                                                name="phone"
                                                placeholder={phone}
                                            />
                                            {errors.phone && touched.phone ? <div className="error__message">
                                                <ErrorMessage name="phone" />
                                            </div> : null}
                                        </div>
                                        <div className="inputWrapper">
                                            <Field
                                                className="form__location"
                                                style={errors.location && touched.location ? { border: "1px solid red" } : null}
                                                name="location"
                                                placeholder={location}
                                            >
                                            </Field>
                                            {errors.location && touched.location ? <div className="error__message">
                                                <ErrorMessage name="location" />
                                            </div> : null}
                                        </div>
                                        <div className="air-icon">
                                            <input
                                                className="form__button"
                                                type="submit"
                                                value={button}
                                            />
                                            <div className="centered-icon">
                                                <div><a href="https://m.facebook.com/itclusteracademy/" target="_blank">
                                                    <FontAwesomeIcon
                                                        className="icon-edit"
                                                        icon={faFacebookF}
                                                    />
                                                </a></div>
                                                <div><a href="https://www.instagram.com/itcluster_academy/?igshid=pcmue6cyzyu2" target="_blank">
                                                    <FontAwesomeIcon
                                                        className="icon-edit"
                                                        icon={faInstagram}
                                                    />
                                                </a></div>
                                                <div><a href="https://www.linkedin.com/company/it-cluster-academy" target="_blank">
                                                    <FontAwesomeIcon
                                                        className="icon-edit"
                                                        icon={faLinkedinIn}
                                                    />
                                                </a></div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="waveBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 210 1440 110"><path fill="#4512AB" fill-opacity="1" d="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,213.3C1120,213,1280,267,1360,293.3L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </section >
    )
}

export default SignUp;
