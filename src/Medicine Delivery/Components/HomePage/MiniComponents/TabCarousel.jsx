import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export const tabCards = [
  {
    title: "Medicine",
    path: "/products",
    img: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
  },
  {
    title: "Lab Tests",
    path: "/products",
    img: "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
  },
  {
    title: "Healthcare",
    path: "/products",
    img: "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
  },
  {
    title: "Health Blogs",
    path: "/",
    img: "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
  },
  {
    title: "PLUS",
    path: "/",
    img: "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
  },
  {
    title: "Offers",
    path: "/products",
    img: "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
  },
  {
    title: "Surgeries",
    path: "/",
    img: "https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
  },
  {
    title: "Value Store",
    path: "/",
    img: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
  },
];

function TabCarousal() {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(0);

  function onScrollY() {
    document.getElementById("scrollBar").scrollLeft += 400;
    setScroll((prev) => prev + 400);
  }
  function onScrollX() {
    document.getElementById("scrollBar").scrollLeft -= 400;
    setScroll((prev) => prev - 400);
  }

  console.log(scroll);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);
  return (
    <Box
      width="100%"
      paddingLeft={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
      paddingRight={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
      mt="50px"
    >
      <Box width="100%" position="relative">
        {windowWidth > 1024 && scroll > 0 && (
          <IconButton
            onClick={onScrollX}
            bg={"rgba(0,0,0,0.4)"}
            position="absolute"
            top="50"
            left="-5"
            borderRadius="50%"
            icon={<AiOutlineLeft color="white" />}
          >
            L
          </IconButton>
        )}

        <Flex
          paddingX={"10px"}
          width="100%"
          gap={{ base: "10px", lg: "40px", sm: "30px" }}
          overflowX="scroll"
          overflowY="hidden"
          paddingY={5}
          className="hideScroll"
          id="scrollBar"
          scrollBehavior="smooth"
          textAlign={"center"}
        >
          {tabCards.map((tab) => (
            <Box
              maxWidth="141px"
              minW={{ base: "85px", sm: "110px", lg: "130px" }}
              key={tab.title}
              _hover={{
                lg: {
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  borderRadius: "10px",
                },
              }}
              cursor="pointer"
              paddingX="12px"
              onClick={() => navigate(tab.path)}
            >
              <Image
                mb="10px"
                borderBottom={{
                  base: "transparent",
                  sm: "transparent",
                  lg: "1px solid rgba(0,0,0,0.2)",
                }}
                src={tab.img}
                bg={{
                  base: "#BFEDDD",
                  sm: "#BFEDDD",
                  lg: "transparent",
                }}
                borderRadius={{
                  base: "10px",
                  sm: "10px",
                  lg: "5px 5px 0 0",
                  xl: "5px 5px 0 0",
                }}
              ></Image>

              <Text
                fontSize={{ base: "12px", sm: "15px", lg: "16px" }}
                fontWeight="500"
                mb={2}
              >
                {tab.title}
              </Text>
            </Box>
          ))}
        </Flex>
        {windowWidth > 1024 && scroll < 450 && (
          <IconButton
            onClick={onScrollY}
            bg={"rgba(0,0,0,0.4)"}
            position="absolute"
            top="50"
            right="-15"
            borderRadius="50%"
            icon={<AiOutlineRight color="white" />}
          ></IconButton>
        )}
      </Box>
    </Box>
  );
}

export default TabCarousal;
