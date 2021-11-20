import {useState, FC, useEffect} from 'react';
import './listitem.scss'
import {AiFillFolderAdd, AiOutlineDislike, AiOutlineLike, BsPlay} from "react-icons/all";
import {useAppSelector, useAppDispatch} from "../../store/hooks/redux";
import { fetchOneMovies } from '../../store/reducers/ActionCreators';
import {Link} from "react-router-dom";


interface ListitemPropsType {
    index?:number,
    item?:string
}
const ListItem :FC <ListitemPropsType> = ({index = 0, item}) => {

    const dispatch = useAppDispatch();
    const {movie, isLoading, error} = useAppSelector(state => state.movieSlise);

    const [isHovered, setIsHovered] = useState<boolean>(false)
    useEffect(()=> {
        if (item != null) {
            dispatch(fetchOneMovies(item));
        }
    }, [item])
           return (
           <Link to={{pathname:'/watch', state: movie}}>


        <div className='listItem'
             style={isHovered ? {left: index *255-50  - index * 2.5}: {}}
        onMouseEnter = { ()=> setIsHovered(true)}
        onMouseLeave = { ()=> setIsHovered(false)}
        >

            <img
                src={movie.img}
                alt=""
            />
            {isHovered &&
            <>
            <video src={movie.trailer} autoPlay = {true} loop/>

                <div className='itemInfo'>
                <div className='icons'>
                     <BsPlay className='icon'/>
                     <AiFillFolderAdd className='icon'/>
                     <AiOutlineLike className='icon'/>
                     <AiOutlineDislike className='icon'/>
                </div>
                <div className='itemInfoTop'>
                    <span> 1 hour 14 mins</span>
                    <span className='limit'>+ {movie.limit}</span>
                    <span>{movie.year}</span>
                </div>
                <div className='desc'>
                    {movie.desc}
                </div>
                <div className='genre'>{movie.ganre} </div>
            </div>
            </>
            }
        </div> </Link>
    )
}
export  default  ListItem;