import React, { useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link, NavLink } from 'react-router-dom';

const Login = ()=>{
    const navigate = useNavigate()
    const loginUser = async(values, resetForm)=>{
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/login', requestOptions);
        const data = await response.json()

        if(data.msg === 'login success'){
          alert('login success')
        }
    }
    const SignupSchema = Yup.object().shape({
		password: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
	});


    useEffect(() => {
        let token = localStorage.getItem("token");
        let user = JSON.parse(localStorage.getItem("user"));
        if (token){
            navigate("/")
        }
    }, [])
    
    return(
        <section>
            <div className='container'>
                <div className='form'>
                    <h1>Login</h1>

                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, { resetForm })=>{
                            loginUser(values)
                            resetForm()
                        }}
                    >

                        {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Field name="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                                <Field name="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}

                                <button className="mx-3 my-3" type="reset">
                                  <i className="fa fa-trash"></i>Cancel</button>
                                  <NavLink to="/admin">
                                  <button><i className="fa fa-trash"></i>Login</button>
                                  </NavLink>
                            </Form>
                        )}
                    </Formik>
                    <p style={{ marginTop: '10px' }}>Dont have an account? <Link to="/register">Signup</Link> here</p>
                </div>
            </div>
        </section>
    )
}
export default Login;