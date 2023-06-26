import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import { useNavigate } from "react-router-dom";

const PostComment = ({ postId, userId, picturePath }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const navigate = useNavigate();

  const [comment, setComment] = useState("");

  const handleComment = async () => {};

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <Box
          onClick={() => navigate(`/profile/${userId}`)}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <UserImage image={picturePath} />
        </Box>
        <InputBase
          placeholder="Write Comment.."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>
      <Button
        disabled={!comment}
        onClick={handleComment}
        sx={{
          color: palette.background.alt,
          backgroundColor: palette.primary.main,
          borderRadius: "3rem",
          marginTop: "1rem",
        }}
      >
        POST
      </Button>
    </WidgetWrapper>
  );
};

export default PostComment;
