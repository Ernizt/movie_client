import {FC, useRef, useState} from 'react';
import "./list.scss"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all";
import ListItem from "../listitem/Listitem";
import {IRandomList} from "../../store/modules/IRandomList";


interface  ListType  {
       list:IRandomList
}

const List:FC<ListType>= ({list}) => {


    
    const [isMoved, setIsMovied] = useState<any> (false);
    const [slidenumber, setSlideNumber] = useState<number>(0);

         const listRef = useRef<any>(null);
    const handleClick = (direction:string) => {
        setIsMovied(true);
        let distance = listRef.current.getBoundingClientRect().x - 60;
        if(direction == 'left' && slidenumber > 0) {
            setSlideNumber(slidenumber-1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction == 'right' && slidenumber  < 5) {
            setSlideNumber(slidenumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }


    }

    return (
        <div className="list">
              <span className='listTitle'>{list.title}</span>
                 <div className="wrapper">
                     <IoIosArrowBack className='sliderArrow left'
                                     onClick={ ()=> handleClick('left')}
                                      style={!isMoved ? {display:'none'}: {}}
                     />
                     <div className='container' ref={listRef}>

                        { list.content.map(( item ,i )=> (

                                <ListItem key = {i} index={i} item={item}/>
                        ))
                        }
                        <ListItem/>
                             </div>
                     <IoIosArrowForward className='sliderArrow right' onClick={ ()=> handleClick('right')}/>
                 </div>
        </div>
    )
}

export default List;