import React, {useEffect, useState} from "react";
import './home.scss';

import Featured from "../../components/featired/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import {useAppSelector, useAppDispatch} from "../../store/hooks/redux";
import {fetchList} from "../../store/reducers/ActionCreators";


interface  HomeType {
 type?:string
}
const Home:React.FC<HomeType> =  ({type = ''}) => {

    const dispatch = useAppDispatch();
    const {lists, isLoading, error} = useAppSelector(state => state.rundomSlise)
    useEffect(()=> {
             dispatch(fetchList());
    }, [type])
         return (
        <div className='home'>
                    <Navbar/>
            <Featured TypeFilm={type}/>
            {
                lists.map((list)=>(
                    <List key={list._id} list= {list}/>
                ))
            }


                    </div>
    )
}
export default Home;