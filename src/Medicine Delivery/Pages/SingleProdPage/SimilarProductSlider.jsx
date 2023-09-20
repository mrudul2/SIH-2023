import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SimilarProduct } from './SimilarProduct';

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: {max: 1024, min: 664   },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 665, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
export const SimilarProductSlider = () => {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://upset-dove-zipper.cyclic.app/health-care')
            .then((res) => {
                // console.log('similar', res);
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            {data &&
                <Box
                    w='100%'
                    h='auto'
                    borderRadius={'lg'}
                    border={'0px solid'}
                   >
                    <Text p='3' fontSize={25} fontWeight={600}>Similar Products</Text>
                    <Carousel responsive={responsive}>
                        {data?.map((el) => (
                            <SimilarProduct key={el.id} {...el} />
                        ))}
                    </Carousel>
                </Box>
            }
        </>
    )
}

