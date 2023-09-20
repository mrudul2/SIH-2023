import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  return (
    <Box
      maxW={{ base: "300px", sm: "600px", lg: "800px" }}
      margin="auto"
      pt="30px"
      pr="10px"
      pl="10px"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon mt="8px" color="gray.300" />}
        />
        <Input
          paddingY="23px"
          focusBorderColor="grey"
          boxShadow="rgb(0 0 0 / 8%) 0px 4px 7px"
          borderRadius="20px"
          type="text"
          placeholder="Search for"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputRightElement width="5rem">
          <Button
            bg="#447BBE"
            color="white"
            borderRadius="20px"
            height="40px"
            mr="3px"
            mt="7px"
            onClick={() => navigate(`/search/${name}`)}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default SearchBar;
