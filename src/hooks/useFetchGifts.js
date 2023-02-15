import { useEffect, useState } from 'react';
import { getGifs } from "../helpers/GetGifs"

export const useFetchGifts = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( ()=>{

        getImages();
        //getGifs(category);

    }, [  ]); 

    return{
        images: images,
        isLoading
    }
}

