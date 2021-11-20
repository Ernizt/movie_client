import React from 'react';
import './App.scss';
import Home from "./pages/Home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./components/login/Login";
import {BrowserRouter as Router, Switch , Route, Redirect} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from './store/hooks/redux';
import authentication from "./functions/auth";




const App = () =>  {
    const dispatch = useAppDispatch();
    const {user, isLoading, error} = useAppSelector(state => state.userRegisterReduser);
     let auth;


    authentication(user)(dispatch);
    auth = user.isAuth;


  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              {auth ? <Home /> : <Redirect to='/register'/>}
               </Route>
            <Route exact path="/register">
              {!auth ? <Register /> : <Redirect to='/'/> }
            </Route>
            <Route exact path="/login">
              {!auth ? <Login /> : <Redirect to='/'/> }
               </Route>
            {auth && ( <>
                <Route path="/movies">
              <Home type='movies'/>
            </Route>
              <Route path="/series">
              <Home type='series'/>
              </Route>
              <Route path="/watch">
              <Watch/>
              </Route>
             </> )
            }

          </Switch>
        </div>
      </Router>
      );
}

export default App;
