import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const SimilarProduct = ({ image_src, alt, productName, salePrice, MRP, discountPercent }) => {
  return (
    <Box
      w='99%'
      display="flex"
      justify="center"
      align="center"
      height={"400px"}
      position="relative"
      marginTop="20px"
      color="#4f585e"
      border={'0px solid green'}
    >
      <Box
        margin="0.5"
        w="99%"
        height={"95%"}
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        p="5px"
        textAlign="left"
        transition="all 0.5s ease"
        border={'0px solid red'}
      >
        <Center
          h="50%"
          p="20px"
          mb='6px'
          borderRadius="lg"
          border="1.5px solid #e7e6e6"
          
        >
          <Image h="100px" src={image_src} alt={alt} />
        </Center>

        <Text
          istruncated="true"
          fontSize="22px"
          fontWeight="500"
          // noOfLines={1}
          whiteSpace="nowrap"
          overflow='hidden'
          textOverflow=' ellipsis'
        >
          {productName}
        </Text>
        <Flex
          h="3rem"
          align="center"
          w="90%"
          justify="space-between"
        >
          <Text fontSize="16px" fontWeight="400" color="#8e9ca7">
            MRP{" "}
            <span style={{ textDecoration: "line-through" }}>
              {MRP}
            </span>{" "}
          </Text>
          <Flex
            align="center"
            justify="start"
            px="6px"
            color="white"
            fontSize="12px"
            fontWeight="400"
            height="65%"
            w="43%"
            bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
          >
            {discountPercent}
          </Flex>
        </Flex>
        <Text fontSize="20px" fontWeight="500" >
          ₹{salePrice}
        </Text>
        <Button
          my="10px"
          w="5rem"
          h="2rem"
          borderRadius="0.4rem"
          variant="white"
          border="1px solid #0f847e"
          color="#0f847e"
          transition="all 0.4s ease"
          fontSize={'16px'}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};


