import React, {useState} from 'react';
import './navbar.scss';
import {BsSearch, IoMdArrowDropdownCircle, IoMdNotifications} from "react-icons/all";
import {Link, Redirect, useHistory} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../store/hooks/redux";
import {userFatchingSuccess, userLogoOut, userRegisterReduser} from "../../store/reducers/CreateUser";
import {reactLocalStorage} from "reactjs-localstorage";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const {user, isLoading, error} = useAppSelector(state => state.userRegisterReduser);
    let history = useHistory();
    const dispatch = useAppDispatch();

   window.onscroll = () => {
        setIsScrolled(window.pageYOffset == 0 ? false : true);
        return () => (window.onscroll = null);
    }
    const logoOut = () => {
        reactLocalStorage.set('hesh', '');
           dispatch(userLogoOut(false))
           history.push("/register")
          console.log('rederect')
    }


    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
           <div className='container'>
               <div className='left'>
                   <img
                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                       alt=""
                   />
                   <Link to='/' className='link'>
                       <span>Homepage</span>
                   </Link>
                   <Link to='/series' className='link'>
                       <span>Series</span>
                   </Link>
                   <Link to='/movies' className='link'>
                       <span>Movies</span>
                   </Link>


                   <span>New and Popular</span>
                   <span>My List</span>

               </div>
               <div className='right'>
                   <BsSearch   className='icon'/>
                   <span>{user.username}</span>
                   <IoMdNotifications className='icon'/>
                   <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                       alt=""
                   />
                   <div className='profile'>
                       <IoMdArrowDropdownCircle className='icon'/>
                       <div className='options'>
                           <span>Settings</span>
                           <span onClick={logoOut}>Logo out</span>
                       </div>
                   </div>

               </div>
           </div>
        </div>
    )
}
export default Navbar;