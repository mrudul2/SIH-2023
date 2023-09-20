import { Img } from '@chakra-ui/image';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/layout'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    {/* // for small screen code */}
    <Box bg="#EEF4FF" p="3rem 0">
    <Accordion display={{sm:"block",md:"block",lg:"none"}} defaultIndex={[0]} mb={5} allowMultiple fontFamily="Inter,sans-serif">
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Company</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>About Us</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Careers</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Blog</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Partner with PharmEasy</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Sell at PharmEasy</Text></Link>
            </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Our Services</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Order Medicine</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Healthcare Products</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Lab Tests</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Find Nearest Collection Centre</Text></Link>
            </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Featured Categories</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Covid Essentials</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Personal Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Health Food and Drinks</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Beauty</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Skin Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Home Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Ayurvedic Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Sexual Wellness</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Fitness Supplements</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Mother and Baby Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Healthcare Devices</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Health Condition</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Diabetic Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Elderly Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Accessories And Wearables</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Top Products</Text></Link>
        </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Need Help</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Browse All Medicines</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Browse All Molecules</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Browse All Cities</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Browse All Areas</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Browse All Stores</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>FAQs</Text></Link>
        </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Policy Info</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <hr></hr>
            <AccordionPanel pb={4}>
            <Box>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Editorial Policy</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Privacy Policy</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Vulnerability Disclosure Policy</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Terms and Conditions</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Customer Support Policy</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Return Policy</Text></Link>
        </Box>
            </AccordionPanel>
        </AccordionItem>
        <Box ml="2.5%" mb={10} mt={10}>
            <Heading m="15px 0 15px 0" fontSize="16px" fontWeight="600">Follow us on</Heading>
            <Flex gap={4} flexWrap="wrap">
                <Link><Box h="27px" w="27px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=32x0' w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="27px" w="27px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=32x0' w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="27px" w="27px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=32x0' w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="27px" w="27px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=32x0' w="100%" h="100%" alt=''></Img>
                </Box></Link>
            </Flex>
        </Box>
    </Accordion>
    {/* // for big screen code */}
   <Grid textAlign="start" gridTemplateColumns="repeat(11,1fr)" fontFamily="Inter,sans-serif" w="95%" m="auto" display={{base:"none",md:"none",lg:"grid"}}>
    <GridItem colSpan={3} mr={3}>
        <Box>
            <Box>
                <Heading m="15px 0" fontSize="16px" fontWeight="600">Company</Heading>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>About Us</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Careers</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Blog</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Partner with PharmEasy</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Sell at PharmEasy</Text></Link>
            </Box>
            <Box mt={6}>
                <Heading m="15px 0" fontSize="16px" fontWeight="600">Our Services</Heading>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Order Medicine</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Healthcare Products</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Lab Tests</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Find Nearest Collection Centre</Text></Link>
            </Box>
        </Box>
    </GridItem>
    <GridItem colSpan={3} mr={3}>
        <Box>
            <Heading m="15px 0" fontSize="16px" fontWeight="600">Featured Categories</Heading>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Covid Essentials</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Personal Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Health Food and Drinks</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Beauty</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Skin Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Home Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Ayurvedic Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Sexual Wellness</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Fitness Supplements</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Mother and Baby Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Healthcare Devices</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Health Condition</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Diabetic Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Elderly Care</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Accessories And Wearables</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Top Products</Text></Link>
        </Box>
    </GridItem>
    <GridItem colSpan={3}>
        <Box>
            <Heading m="15px 0" fontSize="16px" fontWeight="600">Need Help</Heading>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Browse All Medicines</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Browse All Molecules</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Browse All Cities</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Browse All Areas</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Browse All Stores</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>FAQs</Text></Link>
        </Box>
        <Box mt={6}>
            <Heading m="15px 0" fontSize="16px" fontWeight="600">Policy Info</Heading>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Editorial Policy</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Privacy Policy</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Vulnerability Disclosure Policy</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Terms and Conditions</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Customer Support Policy</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Return Policy</Text></Link>
        </Box>
    </GridItem>
    <GridItem colSpan={2}>
        <Box>
            <Heading m="15px 0 15px 0" fontSize="16px" fontWeight="600">Follow us on</Heading>
            <Flex justify="space-between" pr="20px" flexWrap="wrap">
                <Link><Box h="30px" w="30px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=32x0' w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="30px" w="30px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=32x0' w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="30px" w="30px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=32x0' w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="30px" w="30px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=32x0' w="100%" h="100%" alt=''></Img>
                </Box></Link>
            </Flex>
        </Box>
    </GridItem>
   </Grid>
   <Box w="95%" m="auto">
    <Heading m="15px 0 20px 0" fontSize="16px" fontWeight="600">Our Payment Partners</Heading>
     <Flex justify="space-between" flexDirection={{base:"column",md:"column",lg:"row"}}>   
        <Box mb={{base:"30px",md:"30px"}}>
            <Flex gap={8} flexWrap="wrap">
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src='https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0' alt='logo' h="100%" w="auto"></Img>
                </Box>
            </Flex>
        </Box>
        <Box>
            <Link><Text color='#30363C' fontSize='14px'>© 2022 PharmEasy. All Rights Reserved</Text></Link>
        </Box>
    </Flex>
   </Box>
   </Box>
   </>
  )
}

export default Footer