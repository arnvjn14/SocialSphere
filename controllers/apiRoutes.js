// import dotenv from "dotenv";
// import { Configuration, OpenAIApi } from "openai";

// dotenv.config();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export const generateImage = async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     // console.log(prompt);
//     const aiResponse = await openai.createImage({
//       prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });

//     const image = aiResponse.data.data[0].b64_json;

//     res.status(200).json({ photo: image });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: err.msg });
//   }
// };
