import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

function NavSearch() {
  return (
    <Box w={{ base: "200px", sm: "400px", lg: "360px", xl: "500px" }}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon mt="2px" color="gray.300" />}
        />
        <Input
          paddingY="20px"
          focusBorderColor="grey"
          boxShadow="rgb(0 0 0 / 8%) 0px 4px 7px"
          borderRadius="20px"
          type="text"
          placeholder="Search for"
        />
        <InputRightElement width="5rem">
          <Button
            backgroundColor="#447BBE"
            color="white"
            borderRadius="20px"
            height="35px"
            mr="3px"
            mt="3px"
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default NavSearch;
