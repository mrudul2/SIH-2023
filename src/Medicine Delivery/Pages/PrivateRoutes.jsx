import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  CloseButton,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
const PrivateRoutes = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth");
  console.log(isAuth);
  const toast = useToast();
  //   const {
  //     isOpen: isVisible,
  //     onClose,
  //     onOpen,
  //   } = useDisclosure({ defaultIsOpen: true });
  //   return isAuth ? (
  //     children
  //   ) : isVisible ? (
  //     <Alert status="success">
  //       <AlertIcon />
  //       <Box>
  //         <AlertTitle>Alert</AlertTitle>
  //         <AlertDescription>Please Login First</AlertDescription>
  //       </Box>
  //       <CloseButton
  //         alignSelf="center"
  //         position="relative"
  //         right={-1}
  //         top={-1}
  //         onClick={onClose}
  //       />
  //     </Alert>
  //   ) : (
  //     <Button onClick={onOpen}>
  //       <Navigate to="/" />
  //     </Button>
  //   );

  return isAuth ? (
    children
  ) : (
    <>
      {toast({
        title: "Please login first",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      })}
      <Navigate to="/" />
    </>
  );
};

export default PrivateRoutes;
