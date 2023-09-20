import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

import Content from "../Components/HomePage/Content";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box bg="radial-gradient(150px 150px at 95% 0%, rgba(253, 186, 43, 0.3) 0%, rgba(253, 186, 43, 0) 100%), radial-gradient(150px 150px at 5% 0%, rgba(120, 213, 242, 0.3) 0%, rgba(253, 186, 43, 0) 100%)">
      <Content />
    </Box>
  );
}

export default Home;
