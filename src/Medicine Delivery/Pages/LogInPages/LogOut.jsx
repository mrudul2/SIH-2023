import {
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function LogOut() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const navigate = useNavigate();

  const handleLogOut = () => {
    // console.log("LogOut Called");
    localStorage.clear();
    onClose();
  };

  return (
    <>
      <Button
        color="black"
        bg={"transparent"}
        _hover={{ backgroundColor: "transparent", color: "teal" }}
        onClick={onOpen}
      >
        User
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Log Out?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to <span color="#10847e">Log Out</span> ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              bg="#10847e"
              color="white"
              ml={3}
              onClick={() => {
                handleLogOut();
                navigate("/");
              }}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
