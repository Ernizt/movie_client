import './watch.scss';
import {IoMdArrowBack} from "react-icons/all";
import {Link, useLocation} from 'react-router-dom';
import IMoviesFind from "../../store/modules/IMoviesFind";
import ReactPlayer from "react-player";



const Watch = () => {
       const location = useLocation();
       const movie =location.state as IMoviesFind;

    return (
        <div className='watch'>
            <Link to='/'>
                <div className='back'>
                    <IoMdArrowBack/>
                    Home
                </div>
            </Link>

                <ReactPlayer
             width='100%'
             height='100%'
                url={movie.video}

                />

        </div>
    )
}

export  default Watch;