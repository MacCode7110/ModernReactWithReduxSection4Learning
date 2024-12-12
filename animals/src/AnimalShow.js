import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
};    

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        // svgMap[type] access is used to look up a matching animal type key in the svgMap, and the matching key references one of the animal images that is imported above in the series of import statements.
        <div onClick={handleClick}>
            <img alt="animal" src={svgMap[type]} />
            <img alt="heart" src={heart} style={{ width: 10 + 10 * clicks }} />
        </div>
    );
}

export default AnimalShow;