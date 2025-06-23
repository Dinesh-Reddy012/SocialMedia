import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Sociopedia, the Social Media for Sociopaths!
        </Typography>
        
        <Form />
        
        {/* Guest Login Information */}
        <Box
          sx={{
            mt: "2rem",
            p: "1rem",
            backgroundColor: theme.palette.neutral.light,
            borderRadius: "0.5rem",
            textAlign: "center",
          }}
        >
          <Typography 
            variant="body2" 
            color={theme.palette.neutral.dark}
            sx={{ mb: "0.5rem" }}
          >
            Want to explore without creating an account?
          </Typography>
          <Typography 
            variant="body2" 
            color={theme.palette.neutral.medium}
            fontSize="0.8rem"
          >
            Use "Login as Guest" for quick access to Dinesh's demo account
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
