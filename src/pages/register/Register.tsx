import { Formik } from "formik";
import "./register.scss";
import * as yup from 'yup';
import {userRegister} from "../../store/reducers/ActionCreators";
import {IUser} from "../../store/modules/IUser";
import {useAppDispatch} from "../../store/hooks/redux";
import {userFatchingSuccess} from "../../store/reducers/CreateUser";
import {Link, Redirect} from "react-router-dom";
import {reactLocalStorage} from "reactjs-localstorage";


let schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().required(),

});

const Register = () => {
    const initialValues: IUser = { email: '', password:'', username:''};
    const dispatch = useAppDispatch();


    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'> 
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
               <Link to = {'/login'}>
                   <button className='loginButton'>
                       Sing In
                   </button>
               </Link>
            </div>
            <div className='container'>
                <div className="container">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                        Ready to watch? Enter your data to create or restart your membership.
                    </p>
                   
                    <Formik
                        initialValues={initialValues}
                          validationSchema={schema}
                        onSubmit={ async (values) => {
                           const response = await dispatch(userRegister(values));
                        const data = response.meta.arg;
                              data.isAuth = true;
                            reactLocalStorage.set('hesh', response.payload)
                              dispatch(userFatchingSuccess( data));
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
                                             <div className='form'>
                                             <form onSubmit={handleSubmit}>
                                                 <input
                                                 type='text'
                                                 name='username'
                                                 placeholder='Username'
                                                 onChange={handleChange}
                                                 onBlur={handleBlur}
                                                 value={values.username}
                                                 className = {errors.username && touched.username && errors.username ? 'activ' : ''}
                                                 />

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

                                <button type="submit" >
                                    Submit
                                </button>
                            </form>
                                             </div>
                        )}
                    </Formik>

            </div>
        </div>
        </div>
        </div>
    )
}
export  default  Register;