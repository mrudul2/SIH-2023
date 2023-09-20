import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    Checkbox,
    Divider,
    Grid,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Radio,
    Select,
    Spinner,
    Stack,
    Text
} from '@chakra-ui/react';

import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductContext } from '../../Context/ProductContext';
import { getProducts } from '../../Redux/productsReducer/prodAction';
import { ProductCard } from './ProductCard';


export const Products = () => {

    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((store) => {
        // console.log('store', store.prodReducer);
        return store.prodReducer
    });
    const { state, _ } = useContext(ProductContext)
    const [category, setCategory] = useState('');

    const [storeData, setStoreData] = useState(products)
    // const [sort, setSort] = useState([])
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        if (state === 'toothbrush') setCategory('Personal Care');
        else if (state === 'forMen') setCategory('Fitness Supplements');
        else if (state === "disposalBag") setCategory('Home Care');
        else if (state === "health-care") setCategory('Health Care');
        else if (state === "massageOil") setCategory('Elderly Care');
        else if (state === "acidity") setCategory('Stomach Care');
        else if (state === "babyHealthcare") setCategory('Baby Care');
        else if (state === "covidKits") setCategory('Health Condition');

        if (state) {
            dispatch(getProducts(state))
        }
        else {
            setCategory('Health Care');
            dispatch(getProducts('health-care'))
        }
    }, [state])

    useEffect(() => {
        setStoreData(products)
    }, [update]);


    const handleSortByPrice = (e) => {
        const { value } = e.target;
        setUpdate(!update)
        if (value === "asc") {
            let asc = storeData.sort((a, b) => {
                return a.salePrice - b.salePrice;
            });
           setStoreData(asc)
        }
        else if (value === "des") {
            let des = storeData.sort((a, b) => {
                return b.salePrice - a.salePrice;
            });
            setStoreData(des)
        }
    };

    return (
        <Box w='75%' m={'auto'} mt='6' mb='50px' border={'0px solid red'}>
            <Breadcrumb fontWeight='small' fontSize='sm' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>All Categories</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>{category}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Stack gap={'20px'} direction='row'>
                <Stack w='25%' border={'0px solid'}>
                    <Heading fontSize={'25px'} fontWeight='500' pt={'40px'} pb="40px">
                        Filter
                    </Heading>
                    <Heading fontSize="16px" fontWeight="600" pb="20px" >
                        Category
                    </Heading>
                    <Stack direction={'row'} justifyContent='space-between' pb={'20px'}>
                        <Text>{category}</Text>
                        <Radio type={'radio'} size='lg' colorScheme='teal' isChecked />
                    </Stack>
                    <Divider w='90%' borderColor={'gray.900'} />
                    <Heading fontSize="16px" fontWeight="600" pt={'20px'} pb="20px" >
                        Brand
                    </Heading>

                    <InputGroup>
                        <Input placeholder='Search' />
                        <InputRightElement children={<SearchIcon color={'gray.500'} />} />
                    </InputGroup>

                    <Heading fontSize="16px" fontWeight="600" pt={'20px'} pb="20px" >
                        Price
                    </Heading>
                    <HStack justifyContent={'space-between'}  >
                        <Text >Below 99</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>

                    <HStack justifyContent={'space-between'} pt='10px'>
                        <Text >100 - 199</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>
                    <HStack justifyContent={'space-between'} pt='10px'>
                        <Text >200 - 299</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>
                    <HStack justifyContent={'space-between'} pt='10px'>
                        <Text >300 - 399</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>
                    <HStack justifyContent={'space-between'} pt='10px'>
                        <Text >400 - 499</Text >
                        <Checkbox size='lg' colorScheme={'teal'} />
                    </HStack>
                </Stack>

                {/* Right side */}

                <Stack w='80%' border={'0px solid'} m='auto'>
                    <HStack justifyContent={'space-between'} alignItems='center' mt={'40px'} mr='5'>
                        <Heading fontSize="25px" fontWeight="500" w='300px' pl='4' >
                            {category.toUpperCase()}
                        </Heading>
                        <HStack gap='10px'>
                            <Text w='60px' fontSize={'14px'}>Sort By :</Text>
                            <Select w='180px' h='30px' onChange={handleSortByPrice}>
                                <option value="">Select</option>
                                <option value="asc">Price Low to High</option>
                                <option value="des">Price High to Low</option>
                            </Select>
                        </HStack>
                    </HStack>
                    {isLoading ?
                        <Center >
                            <Spinner
                                mt='2rem'
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </Center>
                        :
                        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                            {products?.map((el) => (
                                <ProductCard key={el.id} alt={el.id}
                                    {...el} />
                            ))}
                        </Grid>
                    }

                </Stack>
            </Stack>
        </Box>
    )
}
