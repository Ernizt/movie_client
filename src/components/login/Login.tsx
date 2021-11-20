import "./login.scss";
import {Formik} from "formik";
import {userLogin, userRegister} from "../../store/reducers/ActionCreators";
import {Redirect} from "react-router-dom";
import * as yup from 'yup';
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import authentication from "../../functions/auth";
import {reactLocalStorage} from "reactjs-localstorage";

let schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required(),
});

export default function Login() {
    const {user} = useAppSelector(state => state.userRegisterReduser);
    const initialValues = { email: '', password:''};
    const dispatch = useAppDispatch();


    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />

                </div>
            </div>
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={ async (values) => {

                        const response = await dispatch(userLogin(values));
                        const data = response.meta.arg;
                        console.log(response.payload)
                        console.log(data)
                        data.isAuth = true;
                        reactLocalStorage.set('hesh', response.payload)
                        authentication(user)(dispatch);
                        <Redirect to='/'/>
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
                        <form onSubmit={handleSubmit}>
                       <h1>Sign In</h1>
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className = {errors.email && touched.email && errors.email ? 'activ' : ''}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className = {errors.password && touched.password && errors.password ? 'activ' : ''}
                    />
                    <button className="loginButton" type='submit'>Sign In</button>
                    <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}