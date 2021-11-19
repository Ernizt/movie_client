import Cookies from "cookies-js";
import jwt_decode from "jwt-decode";
import {IUser} from "../store/modules/IUser";
import {userFatchingSuccess} from "../store/reducers/CreateUser";
import {useAppDispatch} from "../store/hooks/redux";

 const authentication = (user:any) =>  {
    const dispatch = useAppDispatch();
    if(user.isAuth === false) {
        const token =  Cookies.get('hesh');
        if(token == undefined || token == ''){
            return false;
        }
        else {
            const data= jwt_decode<IUser>(token);
            const decodedToken:IUser = {email:'', _id:'', isAuth:false, password:'', username:''};
            decodedToken.email = data.email;
            decodedToken.username= data.username;
            decodedToken.password= data.password;
            decodedToken.isAuth = true;
            decodedToken._id = data.id;
            dispatch(userFatchingSuccess(decodedToken))
            return true;
        }
    }
    return  (
        <div>
        0
        </div>
    );
}
export default authentication;

