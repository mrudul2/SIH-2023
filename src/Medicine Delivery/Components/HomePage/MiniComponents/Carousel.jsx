// import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// // const images = [
// //   {
// //     url: "https://cdn01.pharmeasy.in/dam/banner/banner/833b0458766-HP.jpg",
// //   },
// //   {
// //     url: "https://cdn01.pharmeasy.in/dam/banner/banner/093f30fa096-revisedgrand1000.jpg",
// //   },
// //   {
// //     url: "https://cdn01.pharmeasy.in/dam/banner/banner/c0034c14fe6-634X274.jpg",
// //   },
// //   {
// //     url: "https://cdn01.pharmeasy.in/dam/banner/banner/2faeb574eaa-slipper.jpg",
// //   },
// //   {
// //     url: "https://cdn01.pharmeasy.in/dam/banner/banner/067980fe26a-Centrum_634X274-min.jpg",
// //   },
// // ];

function Carousal() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [scroll, setScroll] = useState(0);

//   function onScrollY() {
//     document.getElementById("imageScroll").scrollLeft += 400;
//     setScroll((prev) => prev + 400);
//   }
//   function onScrollX() {
//     document.getElementById("imageScroll").scrollLeft -= 400;
//     setScroll((prev) => prev - 400);
//   }

//   // console.log(scroll);
//   useEffect(() => {
//     window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
//     return () => {
//       window.removeEventListener("resize", () =>
//         setWindowWidth(window.innerWidth)
//       );
//     };
//   }, []);
//   useEffect(() => {
//     const id = setInterval(() => {
//       if (scroll > 1800) {
//         document.getElementById("imageScroll").scrollLeft = 0;
//         setScroll(0);
//       } else {
//         onScrollY();
//       }
//     }, 3000);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);
//   return (
//     <Box
//       width="100%"
//       // paddingLeft={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
//       // paddingRight={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
//       mt="30px"
//     >
//       <Box width="100%" position="relative">
//         {windowWidth > 1024 && scroll > 0 && (
//           <IconButton
//             onClick={onScrollX}
//             bg={"rgba(0,0,0,0.4)"}
//             position="absolute"
//             top="110"
//             left="-5"
//             borderRadius="50%"
//             icon={<AiOutlineLeft color="white" />}
//           >
//             L
//           </IconButton>
//         )}

//         <Flex
//           width="100%"
//           gap={{ base: "10px", lg: "20px", sm: "20px" }}
//           overflowX="scroll"
//           overflowY="hidden"
//           paddingY={5}
//           className="hideScroll"
//           id="imageScroll"
//           scrollBehavior="smooth"
//         >
//           {/* {images.map((tab) => (
//             <Box
//               // maxWidth="141px"
//               minW={{ base: "250px", sm: "300px", lg: "500px" }}
//               key={tab.url}
//               // _hover={{lg:{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",borderRadius: "10px"}}}
//               cursor="pointer"
//               // paddingX="12px"
//             >
//               <Image borderRadius="10px" src={tab.url}></Image>
//             </Box>
//           ))} */}
//         </Flex>
//         {windowWidth > 1024 && scroll < 1800 && (
//           <IconButton
//             onClick={onScrollY}
//             bg={"rgba(0,0,0,0.4)"}
//             position="absolute"
//             top="110"
//             right="-15"
//             borderRadius="50%"
//             icon={<AiOutlineRight color="white" />}
//           ></IconButton>
//         )}
//       </Box>
//     </Box>
//   );
}

export default Carousal;
