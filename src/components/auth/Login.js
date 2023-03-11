import React from "react"
import { Formik } from "formik"
import './Login.css'
import logo from '../../logo.svg'; 

export default function Login() {
    return (
        <div className="page">
            <div className="image">
                <img src={logo} alt="logo"/>
                </div>
            <div className="form">
                <h1 className="login-header">Login</h1>
                <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(values) => {
                    const errors = {}
                    if (!values.email){
                        errors.email='Required'
                    }
                    if (!values.password){
                        errors.password = 'Required'
                    }
                    return errors
                }}
                onSubmit={(values, {setSubmitting}) => {
                    alert(JSON.stringify(values))
                    setTimeout(() => {
                        setSubmitting(false)
                    }, 400)
                }}
                >{({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form className="formik-form" onSubmit={handleSubmit}>
                        
                        <h1>Email</h1>
                        <input
                        className="form-field" 
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}/>
                        {touched.email && errors.email ? <div className="required-field">Email is required</div>: null}
                        
                        <h1>Password</h1>
                        <input
                        className="form-field"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}/>
                        {touched.password && errors.password ? <div className="required-field">Password is required</div>: null}

                        <button className="submit-btn" type="submit" disabled={isSubmitting}>Login</button>
                    </form>
                )}</Formik>
            </div>
        </div>
    )
};