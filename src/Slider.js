import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import images from './pictures';

const Slider = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <div className='test2' id='projects'> 
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    {images.map(singleImage => {
                        const {id, image } = singleImage;
                        return (
                            <motion.div className='item' key={id}>
                                <img src={image} alt='title' />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Slider;