import {
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  useDisclosure,
  Center,
  Divider,
  Text,
  Avatar,
  VStack,
  HStack,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { HiOutlineDeviceMobile, HiOutlineHome } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RiHandSanitizerLine, RiMenuFoldFill } from "react-icons/ri";
import { IoBagOutline, IoFlaskOutline, IoWalletOutline } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import NavSearch from "./NavSearch";
import Tabs from "./Tabs";
// import { LoginIndividualSlider } from "";
import { useDispatch, useSelector } from "react-redux";
import { LoginIndividualSlider } from "../../Pages/LogInPages/QuickLogin";
import { NavContents } from "./NavContents";

// import { getCartTotal } from "../../Redux/Cart/action";

function Navbar() {
  //   const { cartItems, totalCount } = useSelector((state) => state.cart);

  //   useEffect(() => {
  //     dispatch(getCartTotal());
  //   }, [cartItems]);
  const isAuth = localStorage.getItem("isAuth") || false;
  const tabs = [
    {
      title: "Home",
      path: "/",
      logo: <HiOutlineHome />,
    },
    {
      title: "Order Medicine",
      path: "/medicines",
      logo: <GiMedicines />,
    },
    {
      title: "HealthCare Products",
      path: "/healthcare",
      logo: <RiHandSanitizerLine />,
    },
    {
      title: "Lab Tests",
      path: "/labTests",
      logo: <IoFlaskOutline />,
    },
    {
      title: "Offers",
      path: "/offers",
      logo: <TbDiscount2 />,
    },
    {
      title: "My Account",
      path: "/user",
      logo: <AiOutlineUser />,
    },
    {
      title: "Orders",
      path: "/cart",
      logo: <IoBagOutline />,
    },
    {
      title: "Wallet",
      path: "/wallet",
      logo: <IoWalletOutline />,
    },
    {
      title: "Need Help?",
      path: "/help",
      logo: <AiOutlineQuestionCircle />,
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box position={"relative"}>
      {scrollPosition > 200 && <Tabs />}
      <Box
        p="12px 40px 10px 40px"
        position="fixed"
        zIndex="4"
        bg="white"
        top="0"
        left="0"
        width="100%"
        boxShadow="rgb(0 0 0 / 12%) 0px -1px 0px inset"
        display="flex"
        justifyContent="space-between"
        height="65px"
      >
        <Flex>
          {windowWidth < 1024 && (
            <Box w="30px" display="flex" alignItems="center">
              <RiMenuFoldFill
                fontSize="20px"
                className="menuHover"
                onClick={onOpen}
              />
            </Box>
          )}
          {windowWidth < 1024 && scrollPosition < 101 && (
            <Box margin="auto">
              <Image
                _hover={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
                src="logo1.png"
                style={{width:"12rem"}}
              ></Image>
            </Box>
          )}
          {windowWidth > 1024 && (
            <Box>
              <Image
                _hover={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
                src="logo1.png"
                style={{width:"12rem"}}
              ></Image>
            </Box>
          )}
          {windowWidth > 1024 && (
            <Center pl="30px" pr="30px">
              <Divider orientation="vertical" />
            </Center>
          )}

          {windowWidth > 1024 && (
            <Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0" />
                </Box>
                <Box>
                  <Text fontSize="13px"> Express delivery to</Text>
                </Box>
              </Box>

              <Text fontSize="14px" fontWeight="600">
                400001 Mumbai <b>⌵</b>
              </Text>
            </Box>
          )}
        </Flex>

        <Flex align="center" justifyContent="end" gap="20px">
          {scrollPosition > 100 && <NavSearch />}
          {windowWidth > 1024 && scrollPosition < 101 && (
            <Box>
              <Button
                leftIcon={<HiOutlineDeviceMobile fontSize="25px" />}
                colorScheme="gray"
                variant="solid"
                fontWeight="500"
                borderRadius="10px"
                fontSize="15px"
              >
                Download App
              </Button>
            </Box>
          )}
          {windowWidth > 1024 && (
            <Link className="hover_green">
              <Box display="flex" fontSize="14px">
                <Box display="flex" alignItems="center" mr="10px">
                  <AiOutlineUser fontSize="20px" />
                </Box>
                {windowWidth > 1104 && (
                  <Box mt="2px" fontWeight="600">
                    <LoginIndividualSlider />
                  </Box>
                )}
              </Box>
            </Link>
          )}
          <Link className="hover_green">
            <Box display="flex" fontSize="14px">
              <Box display="flex" alignItems="center" mr="5px">
                <TbDiscount2 fontSize="20px" />
              </Box>
              {windowWidth > 1104 && (
                <Box mt="2px" fontWeight="600">
                  Offers
                </Box>
              )}
              {windowWidth < 1024 && windowWidth > 650 && (
                <Box mt="2px" fontWeight="600">
                  Offers
                </Box>
              )}
            </Box>
          </Link>
          <Link className="hover_green" to={"/cart"}>
            <Box display="flex" fontSize="14px" pos={"relative"}>
              <Box display="flex" alignItems="center" mr="8px">
                <FiShoppingCart fontSize="20px" />
                <Center
                  border={"1px solid black"}
                  color="white"
                  fontSize={"10px"}
                  borderRadius="50%"
                  borderColor={"teal"}
                  bg="teal"
                  height={"16px"}
                  top={"-10px"}
                  left="10px"
                  pos={"absolute"}
                  paddingX="5px"
                >
                  {/* {isAuth ? totalCount : 0} */}
                </Center>
              </Box>
              {windowWidth > 1104 && (
                <Box mt="2px" fontWeight="600">
                  Cart
                </Box>
              )}
              {windowWidth < 1024 && windowWidth > 650 && (
                <Box fontWeight="600" mt="2px">
                  Cart
                </Box>
              )}
            </Box>
          </Link>
        </Flex>

        {/* left side menu DrawerContent */}

        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              bg="linear-gradient(106.34deg, rgb(112, 179, 171) 0%, rgb(54, 119, 114) 96.21%)"
            >
              <Box display="flex">
                <Box display="flex" alignItems="center">
                  <Avatar
                    bg="white"
                    icon={<AiOutlineUser color="#10847E" fontSize="1.5rem" />}
                  />
                </Box>
                <Box
                  fontSize="13px"
                  ml="15px"
                  display="flex"
                  flexDir="column"
                  justifyContent="space-between"
                  color="white"
                >
                  <Box fontSize="15px">Hi, there !</Box>
                  <Box>{<LoginIndividualSlider />}</Box>
                </Box>
              </Box>
            </DrawerHeader>
            <DrawerBody padding="0">
              <VStack align="left">
                {tabs.map((tab) => (
                  <Link
                    onClick={onClose}
                    className="link"
                    key={tab.path}
                    to={tab.path}
                  >
                    <HStack
                      padding="12px 24px"
                      cursor="pointer"
                      _hover={{ color: "#10847E" }}
                      spacing="20px"
                    >
                      {tab.logo}
                      <Text>{tab.title}</Text>
                    </HStack>
                    <Divider />
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box height="65px" width="100%">
        {" "}
        <NavContents />
      </Box>
    </Box>
  );
}

export default Navbar;
