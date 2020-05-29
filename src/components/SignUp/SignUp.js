import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import YupSchema from './YupSchema';
import './SignUp.scss';

function SignUp() {
    return (
        <section id="signUp" className="SignUp">
            <div className="container">
                <div className="wrapper">
                    <div className="title">Зареєструйся на безкоштовне навчання від ITCA вже сьогодні!</div>
                    <div className="registration">
                        {/* <div className="items">
                            <div className="item">First name</div>
                            <div className="item">Last name</div>
                            <div className="item">E-mail</div>
                            <div className="item">Phone number</div>
                            <div className="item">City</div>
                        </div> */}



                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                phone: '',
                                email: '',
                                location: ''

                            }}
                            validationSchema={YupSchema}

                            // handleChange={props.handleChange}

                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setTimeout(() => {
                                    // alert(JSON.stringify(values, null, 2));
                                    // props.closeFormikModal(values);
                                    resetForm();
                                    console.log(values);
                                    // setSubmitting(false);
                                }, 400);
                            }}
                        >


                            <Form className="form"
                            >


                                <Field
                                    className="form__firstName"
                                    name="firstName"
                                    placeholder="ім'я"
                                />


                                <div className="error__message">
                                    <ErrorMessage className="error__message" name="firstName" />
                                </div>
                                <Field
                                    className="form__lastName"
                                    name="lastName"
                                    placeholder="прізвище"
                                />
                                <div className="error__message">
                                    <ErrorMessage className="error__message" name="lastName" />
                                </div>
                                <Field
                                    className="form__email"
                                    name="email"
                                    placeholder="електронна пошта"
                                />

                                <div className="error__message">
                                    <ErrorMessage className="error__message" name="email" />
                                </div>

                                <Field
                                    className="form__phone"
                                    name="phone"
                                    placeholder="контактний телефон"
                                />
                                <div className="error__message">
                                    {/* <div>&nbsp;</div> */}
                                    <ErrorMessage name="phone" />
                                </div>
                                <Field
                                    className="form__location"
                                    name="location"
                                    placeholder="місто"
                                />
                                <div className="error__message">
                                    <ErrorMessage name="location" />
                                </div>


                                <input
                                    className="form__button"
                                    type="submit"
                                    value="Надіслати"
                                />

                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SignUp;
