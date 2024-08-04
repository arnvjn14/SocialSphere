import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setPosts } from "state";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import FormField from "./FormField";
import Loader from "components/Loader";
import React, { useState } from "react";
import { getRandomPrompt } from "utils";

const Form = () => {
  const theme = useTheme();
  const token = useSelector((state) => state.token);
  const userId = useSelector((state) => state.user._id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
    userId: userId,
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch(`http://localhost:3001/posts/Ai-post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        });
        const posts = await response.json();
        dispatch(setPosts({ posts }));
        navigate("/home");
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and name and generate an image");
    }
  };

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm((prevForm) => ({
      ...prevForm,
      prompt: randomPrompt,
    }));
  };

  // const generateImage = async () => {
  //   if (form.prompt) {
  //     try {
  //       setGeneratingImg(true);
  //       const response = await fetch("http://localhost:3001/api/v1/api", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ prompt: form.prompt }),
  //       });

  //       const data = await response.json();
  //       setForm((prevForm) => ({
  //         ...prevForm,
  //         photo: `data:image/jpeg;base64,${data.photo}`,
  //       }));
  //     } catch (error) {
  //       alert(error);
  //     } finally {
  //       setGeneratingImg(false);
  //     }
  //   } else {
  //     alert("Please enter a prompt");
  //   }
  // };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:3001/api/v1/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        if (!response.ok) {
          throw new Error("Failed to generate image");
        }

        const data = await response.json();
        setForm((prevForm) => ({
          ...prevForm,
          photo: `data:image/jpeg;base64,${data.photo}`,
        }));
      } catch (error) {
        alert(error.message);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  return (
    <Box
      component="section"
      maxWidth="lg"
      margin="0 auto"
      padding={theme.spacing(3)}
      textAlign="center"
    >
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
        Create
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Generate an imaginative image through DALL-E AI and share it with the
        community
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        maxWidth="sm"
        margin="2rem auto"
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <FormField
          labelName="Your Name"
          type="text"
          name="name"
          placeholder="Ex., arnv jain"
          value={form.name}
          handleChange={handleChange}
        />

        <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="16rem"
          position="relative"
          border={`1px solid ${theme.palette.divider}`}
          borderRadius={theme.shape.borderRadius}
          overflow="hidden"
        >
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            <img
              src="http://localhost:3001/assets/info4.jpeg"
              alt="preview"
              style={{
                width: "75%",
                height: "75%",
                objectFit: "contain",
                opacity: 0.4,
              }}
            />
          )}

          {generatingImg && (
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="rgba(0,0,0,0.5)"
            >
              <Loader />
            </Box>
          )}
        </Box>

        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={generateImage}
            disabled={generatingImg}
            fullWidth
          >
            {generatingImg ? <CircularProgress size={24} /> : "Generate"}
          </Button>
        </Box>

        <Box marginTop={theme.spacing(3)} textAlign="left">
          <Typography variant="body2" color="textSecondary" gutterBottom>
            ** Once you have created the image you want, you can share it with
            others in the community **
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} />
            ) : (
              "Share with the Community"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;

// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setLogin } from "state";
// import FlexBetween from "components/FlexBetween";

// import React from "react";
// import { useState, useEffect } from "react";
// import { getRandomPrompt } from "utils";
// import FormField from "./FormField";
// import Loader from "components/Loader";
// import { useSelector } from "react-redux";
// import { setPosts } from "state";

// const Form = () => {
//   const token = useSelector((state) => state.token);
//   const userId = useSelector((state) => state.user._id);
//   const navigate = useNavigate();
//   const [form, setform] = useState({
//     name: "",
//     prompt: "",
//     photo: "",
//     userId: userId,
//   });
//   const [generatingImg, setGeneratingImg] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.prompt && form.photo) {
//       setLoading(true);

//       try {
//         // const response = await fetch("http://localhost:3001/api/v1/post", {
//         //   method: "POST",
//         //   headers: {
//         //     "Content-Type": "application/json",
//         //   },
//         //   body: JSON.stringify(form),
//         // });

//         // await response.json();
//         // navigate("/");
//         const response = await fetch(`http://localhost:3001/posts/Ai-post`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(form),
//         });
//         const posts = await response.json();
//         dispatch(setPosts({ posts }));
//         navigate("/home");
//       } catch (error) {
//         alert(error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       alert("Please enter a prompt and name and generate image");
//     }
//   };

//   const handleChange = (e) => {
//     setform((prevForm) => {
//       return {
//         ...prevForm,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   const handleSurpriseMe = () => {
//     const randomPrompt = getRandomPrompt(form.prompt);
//     setform((prevForm) => {
//       return {
//         ...prevForm,
//         prompt: randomPrompt,
//       };
//     });
//   };

//   const generateImage = async () => {
//     if (form.prompt) {
//       try {
//         setGeneratingImg(true);
//         const response = await fetch("http://localhost:3001/api/v1/api", {
//           method: "POST",
//           headers: {
//             // Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ prompt: form.prompt }),
//         });

//         const data = await response.json();
//         console.log(data);
//         setform((prevForm) => {
//           return {
//             ...prevForm,
//             photo: `data:image/jpeg;base64,${data.photo}`,
//           };
//         });
//         // console.log(form.photo);
//       } catch (error) {
//         alert(error);
//       } finally {
//         setGeneratingImg(false);
//       }
//     } else {
//       alert("Please enter a prompt");
//     }
//   };

//   return (
//     <section className="max-w-7xl mx-auto mt-5">
//       <div>
//         <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
//         <p className="mt-2 text-[#666e75] text-[14px] max-w-[700px]">
//           Generate an imaginative image through DALL-E AI and share it with the
//           community
//         </p>
//       </div>
//       <form className="mt-11 max-w-3xl" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-5">
//           <FormField
//             labelName="Your Name"
//             type="text"
//             name="name"
//             placeholder="Ex., arnv jain"
//             value={form.name}
//             handleChange={handleChange}
//           />

//           <FormField
//             labelName="Prompt"
//             type="text"
//             name="prompt"
//             placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
//             value={form.prompt}
//             handleChange={handleChange}
//             isSurpriseMe
//             handleSurpriseMe={handleSurpriseMe}
//           />
//           <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
//             {form.photo ? (
//               <img
//                 src={form.photo}
//                 alt={form.prompt}
//                 className="w-full h-full object-contain"
//               />
//             ) : (
//               <img
//                 src="http://localhost:3001/assets/info4.jpeg"
//                 alt="preview"
//                 className="w-9/12 h-9/12 object-contain opacity-40"
//               />
//             )}

//             {generatingImg && (
//               <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
//                 <Loader />
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="mt-5 flex gap-5">
//           <button
//             type="button"
//             onClick={generateImage}
//             className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//           >
//             {generatingImg ? "Generating..." : "Generate"}
//           </button>
//         </div>

//         <div className="mt-10">
//           <p className="mt-2 text-[#666e75] text-[14px]">
//             ** Once you have created the image you want, you can share it with
//             others in the community **
//           </p>
//           <button
//             type="submit"
//             className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//           >
//             {loading ? "Sharing..." : "Share with the Community"}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Form;
