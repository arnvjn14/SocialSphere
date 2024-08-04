// import React from "react";
// import Form from "./Form";

// const AiImageComponent = () => {
//   return (
//     <>
//       <Form />
//     </>
//   );
// };

// export default AiImageComponent;

import React from "react";
import Form from "./Form";
import { Box, Typography, useTheme } from "@mui/material";

const AiImageComponent = () => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor={theme.palette.background.alt}
      padding="2rem"
    >
      <Typography
        fontWeight="bold"
        fontSize="32px"
        color="primary"
        textAlign="center"
        mb={4}
      >
        Generate AI Image
      </Typography>
      <Form />
    </Box>
  );
};

export default AiImageComponent;

// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import { preview } from "../assets";
// import { getRandomPrompt } from "../utils";
// import { FormField, Loader } from "../components";

// const CreatePost = () => {
//   const navigate = useNavigate();
//   const [form, setform] = useState({
//     name: "",
//     prompt: "",
//     photo: "",
//   });
//   const [generatingImg, setGeneratingImg] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.prompt && form.photo) {
//       setLoading(true);

//       try {
//         const response = await fetch("http://localhost:8080/api/v1/post", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(form),
//         });

//         await response.json();
//         navigate("/");
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
//         const response = await fetch("http://localhost:8080/api/v1/api", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ prompt: form.prompt }),
//         });

//         const data = await response.json();
//         setform((prevForm) => {
//           return {
//             ...prevForm,
//             photo: `data:image/jpeg;base64,${data.photo}`,
//           };
//         });
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
//         <div className="flex flex-col gap-5 glassmorphism">
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
//                 src={preview}
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

// export default CreatePost;
