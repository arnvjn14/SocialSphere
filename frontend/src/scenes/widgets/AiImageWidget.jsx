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
      m="2rem 0"
    >
      <FlexBetween>
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
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AiImageWidget;
