import jwt_decode from "jwt-decode";
import {IUser} from "../store/modules/IUser";
import {userFatchingSuccess} from "../store/reducers/CreateUser";
import { reactLocalStorage } from "reactjs-localstorage";
 const authentication = (user:any) =>  (dispatch:any) => {
    if(user.isAuth === false) {
        let token: any;
        token = reactLocalStorage.get('hesh');;
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

}
export default authentication;

