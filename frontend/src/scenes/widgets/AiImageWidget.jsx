import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useNavigate } from "react-router-dom";

const AiImageWidget = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper
      onClick={() => {
        navigate("/create-ai-post");
      }}
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {/* <FlexBetween>
        <Typography
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Hello
        </Typography>
        <div className="text-3xl font-bold bg-yellow-500">helo</div>
      </FlexBetween> */}
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Generate AI images
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="ai-image"
        src="http://localhost:3001/assets/ai-image.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography color={medium} m="1rem 0">
        Unleash your imagination with mesmerizing AI-generated images that
        redefine artistic boundaries. Witness a fusion of technology and
        creativity in every pixel.
      </Typography>
    </WidgetWrapper>
  );
};

export default AiImageWidget;
