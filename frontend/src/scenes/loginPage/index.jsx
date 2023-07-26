import Navbar from "scenes/navbar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  // const styles = {
  //   backgroundImage: `url(${"https://images.unsplash.com/photo-1678043639793-b4223f338d02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"})`,
  // };

  return (
    <Box width="100%" height="100vh" className="section-login">
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        padding="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialSphere
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        backgroundColor={theme.palette.background.alt}
        padding="2rem"
        margin="2rem auto"
        borderRadius="1.5rem"
      >
        <Typography
          fontWeight="500"
          variant="h3"
          sx={{ mb: "1.5rem" }}
          textAlign="center"
        >
          Welcome to SocialSphere, the Social Media Webiste !
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
