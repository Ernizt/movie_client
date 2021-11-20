import React from 'react';
import {useCookies} from "react-cookie";

const Test = () => {


   const [cookies, setCookie] = useCookies(['name']);

     const onChange = () => {
        setCookie('name', 'Hello', { path: '/' });
    }

    return (
        <div>
            <input name={cookies.name} onChange={onChange} />
            {cookies.name && <h1>Hello {cookies.name}!</h1>}
        </div>
    );
}

export  default  Test;