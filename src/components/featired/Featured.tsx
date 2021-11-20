
import './featured.scss';
import {
    FaPlay,
    GrCircleInformation,
 } from "react-icons/all";
import {useState} from "react";

interface  FeaturedPropsType {
    TypeFilm?:string;
}

const Featured:React.FC <FeaturedPropsType> = ({TypeFilm}) => {

    const [content , setContent] = useState({});



    return (
        <div className='featured'>
            {TypeFilm && (
                <div className='category'>
                    <span>{TypeFilm === 'movies' ? 'Movies' : 'Series'}</span>
                    <select name='genre'  id = 'genere'>
                        <option>Genre</option>
                        <option value="dventure">Adventure</option>
                        <option value="commedy">Commedy</option>
                        <option value='crime'>Crime</option>
                        <option value = 'fantasy'>Fantasy</option>
                        <option value= 'historical'>Historical</option>
                        <option value = 'horror'>Horror</option>
                        <option value='romance'>Romance</option>
                    </select>
                </div>
            )}

            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className='info'>
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt=""
                />
                <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
                <div className='buttons'>
                    <button className='play'>
                        <FaPlay/>
                        <span>Play</span>
                    </button>
                    <button className='more'>
                       <GrCircleInformation/>
                       <span>Info</span>
                    </button>
                </div>
            </div>
               </div>
    )
}
export default Featured;