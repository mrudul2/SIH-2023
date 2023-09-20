import { Box, Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RLink } from 'react-router-dom'

export const ProductCard = ({ image_src, alt, productName, salePrice, MRP, discountPercent, id }) => {
    return (
        <Box
            w={'250px'}
            border='0px solid'
            p='4'

        >
            <RLink to={`/products/${id}`}>
            <Box
                w='98%'
                m='auto'
                p='4'
                h={'280px'}
                _hover={{ border: '1px solid teal', cursor:'pointer' }}
                boxShadow='base'
                borderRadius={'6px'}
            >
                <Center>
                    <Image src={image_src} alt={alt}
                        h='150px'
                    />
                </Center>

                <Heading
                    mt={'20px'}
                    fontSize={'20px'}
                    whiteSpace="nowrap"
                    overflow='hidden'
                    textOverflow=' ellipsis'
                >{productName}</Heading>
                <Flex>
                    <Stack mt='10px'>
                        <Text mb='-10px' fontSize={'12px'}>MRP {MRP}</Text>
                        <Text>{`₹${salePrice}`}</Text>
                    </Stack>
                    <Stack
                        m='2'
                        justify={'center'}
                        textAlign={'center'}
                        color="white"
                        fontSize="10px"
                        fontWeight="400"
                        height="15px"
                        w="25%"
                        bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                    >
                        <Text fontSize={'8px'}> {discountPercent}</Text>
                    </Stack>
                </Flex>
            </Box>
            </RLink>

        </Box>
    )
}


// MRP
// discountPercent
// id
// image_src
// productName
// salePrice