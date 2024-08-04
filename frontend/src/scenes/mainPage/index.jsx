// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const MainPage = () => {
//   const navigate = useNavigate();
//   return (
//     <button
//       onClick={() => {
//         return navigate("/login");
//       }}
//     >
//       login
//     </button>
//   );
// };

// export default MainPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

const MainPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor={theme.palette.background.alt}
    >
      <Typography
        fontWeight="bold"
        fontSize="32px"
        color="primary"
        mb={4}
        textAlign="center"
      >
        Welcome to SocialSphere
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/login")}
        sx={{ padding: "1rem 2rem", fontSize: "16px", borderRadius: "1rem" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default MainPage;

// const MainPage = () => {
//   return (
//     <div className="relative w-full h-[1018px] text-left text-[17px] text-st font-google-sans">
//       <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1922.31px] h-[1018px]" />
//       <div className="absolute top-[0px] left-[0px] w-[1922.31px] h-[1018px]">
//         <img
//           className="absolute top-[-60.84px] left-[-150px] w-[2072.31px] h-[933.42px]"
//           alt=""
//           src="/decore.svg"
//         />
//         <div className="absolute top-[118px] left-[1488px] w-[102px] h-10">
//           <div className="absolute top-[0px] left-[0px] w-[102px] h-10">
//             <div className="absolute top-[9px] left-[22px] font-medium">
//               Sign up
//             </div>
//             <div className="absolute top-[0px] left-[0px] rounded-[5px] box-border w-[102px] h-10 border-[1px] border-solid border-st" />
//           </div>
//         </div>
//         <div className="absolute top-[254px] left-[314px] w-[1454.87px] h-[764px] text-[18px] text-white font-poppins">
//           <div className="absolute top-[62px] left-[0px] w-[630px] h-[423px]">
//             <div className="absolute top-[363px] left-[0px] w-[170px] h-[60px] text-center font-google-sans">
//               <div className="absolute top-[0px] left-[0px] w-[170px] h-[60px]">
//                 <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-yellow shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] w-[170px] h-[60px]" />
//                 <div className="absolute top-[19px] left-[27px] font-medium">
//                   Find out more
//                 </div>
//               </div>
//             </div>
//             <b className="absolute top-[0px] left-[2px] text-[20px] uppercase text-salmon">
//               share ai generated images with friends
//             </b>
//             <div className="absolute top-[249px] left-[0px] text-[16px] leading-[30px] font-medium text-slategray inline-block w-[477px]">
//               Built Wicket longer admire do barton vanity itself do in it.
//               Preferred to sportsmen it engrossed listening. Park gate sell they
//               west hard for the.
//             </div>
//             <img
//               className="absolute top-[123px] left-[245px] w-[385px] h-3"
//               alt=""
//               src="/decore1.svg"
//             />
//             <b className="absolute top-[54px] left-[2px] text-[84px] tracking-[-0.04em] leading-[89px] font-volkhov text-st">
//               <p className="m-0">{`Connect with `}</p>
//               <p className="m-0">new world !</p>
//             </b>
//           </div>
//           <img
//             className="absolute top-[0px] left-[671px] w-[783.87px] h-[764px]"
//             alt=""
//             src="/image.svg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPage;
