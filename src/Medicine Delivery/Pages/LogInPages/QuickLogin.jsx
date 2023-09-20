import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Image,
  Input,
  Stack,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuccess } from "../../Redux/Auth/action";
import { LogOut } from "./LogOut";
import { QuickRegister } from "./QuickRegister";

const initState = {
  email: "",
  password: "",
};

export function LoginIndividualSlider() {
  const auth = localStorage.getItem("isAuth");

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [user, setUser] = useState(initState);

  const { isAuth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // console.log(user);

  const handleLogin = async (e) => {
    e.preventDefault();
    let res = await fetch(`https://upset-dove-zipper.cyclic.app/Users`);
    let res2 = await res.json();
    // console.log(res2);
    let flag = false;
    res2.forEach((elem) => {
      if (elem.email === user.email && elem.password === user.password) {
        flag = true;
      }
    });

    try {
      if (flag) {
        dispatch(getSuccess(true));
        localStorage.setItem("isAuth", true);
        toast({
          title: "User Logged in Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Wrong Credentials! ",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.log(error);
    }
    console.log(isAuth);

    setUser(initState);
    onClose();
  };

  console.log(auth);
  return (
    <>
      {auth ? (
        <Text>
          {" "}
          <LogOut />{" "}
        </Text>
      ) : (
        <Text
          onClick={onOpen}
          color="black"
          cursor="pointer"
          _hover={{ color: "#10847E" }}
        >
          Hello , Log In , Please
        </Text>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        position="relative"
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            position="absolute"
            left={{ lg: "-50px", xl: "-50px" }}
            top="25px"
            bg="#447BBE"
            p="28px"
            borderRadius="0"
            color="white"
            _hover={{ bg: "rgba(214, 226, 241, 0.7)" }}
            _active={{ bg: "rgba(214, 226, 241, 0.7)" }}
            fontSize="14px"
          />
          <DrawerHeader
            borderBottomWidth="1px"
            bg="rgba(214, 226, 241, 0.7)"
            minH="110px"
            align="end"
            py="0"
            px="40px"
          >
            <Flex justify="space-between" h="100%" w="100%">
              <Flex
                h="80%"
                w="50%"
                // border="1px solid red"
                justify="center"
                // py="10px"
                align="end"
              >
                <Image
                  h="62%"
                  src="logo1.png"
                  style={{width:"35rem"}}
                />
              </Flex>
              <Flex
                align="end"
                w="50%"
                h="100%"
                // border="1px solid red"
                justify="end"
              >
                <Image
                  h="75%"
                  src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg"
                />
              </Flex>
            </Flex>
          </DrawerHeader>

          <DrawerBody px="50px">
            <Stack spacing="20px">
              <form onSubmit={handleLogin}>
                <Box>
                  <FormLabel
                    htmlFor="phone"
                    fontWeight="700"
                    py="12px"
                    color="#4f585e"
                  >
                    Quick Login
                  </FormLabel>
                  <Stack spacing="20px">
                    <Input
                      h="2.8rem"
                      ref={firstField}
                      type="email"
                      pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                      letterSpacing=".2px"
                      outline=".1px solid black"
                      focusBorderColor="none"
                      placeholder="Enter your Email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      required
                    />

                    <InputGroup h="2.8rem">
                      <Input
                        h="2.8rem"
                        letterSpacing=".2px"
                        outline=".1px solid black"
                        focusBorderColor="none"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="2rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </Stack>
                </Box>
                <Button
                  w="100%"
                  h="2.8rem"
                  variant="#0f847e"
                  bg="#447BBE"
                  color="#fff"
                  _hover={{ bg: "rgba(214, 226, 241, 0.7)",color:"black" }}
                  type="submit"
                  mt="15px"
                >
                  Login
                </Button>
              </form>
            </Stack>
            <Text fontSize="12px" color="#4f585e" py="20px">
              By clicking continue, you agree with our{" "}
              <span style={{ color: "#447BBE", cursor: "pointer" }}>
                {" "}
                Privacy Policy
              </span>
            </Text>
            <Flex align="center" justify="center">
              <QuickRegister
                color={"#447BBE"}
                font={"13px"}
                onClick={onClose}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
