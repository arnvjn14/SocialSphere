import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper m="2rem 0">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/clothing.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>SnitchClothing</Typography>
        <Typography color={medium}>snitch.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="1rem 0">
        Discover the latest trends and elevate your style with our curated
        collection of fashion-forward clothing. Shop now for the perfect blend
        of comfort and elegance.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
