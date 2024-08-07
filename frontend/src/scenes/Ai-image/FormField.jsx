import React from "react";
import { Box, Button, TextField, useTheme, Typography } from "@mui/material";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Typography
          variant="body1"
          component="label"
          htmlFor={name}
          fontWeight="medium"
        >
          {labelName}
        </Typography>
        {isSurpriseMe && (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleSurpriseMe}
          >
            Surprise me
          </Button>
        )}
      </Box>
      <TextField
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        required
      />
    </Box>
  );
};

export default FormField;

// import React from "react";
// import { useTheme } from "@mui/material";
// import { useSelector } from "react-redux";

// const FormField = ({
//   labelName,
//   type,
//   name,
//   placeholder,
//   value,
//   handleChange,
//   isSurpriseMe,
//   handleSurpriseMe,
// }) => {
//   const { palette } = useTheme();
//   const main = palette.neutral.main;
//   const primary = palette.primary.main;
//   const token = useSelector((state) => state.token);
//   const friends = useSelector((state) => state.user.friends);
//   return (
//     <div>
//       <div className="flex items-center gap-2 mb-4">
//         <label
//           htmlFor={name}
//           className="block text-sm font-medium text-gray-900"
//         >
//           {labelName}
//         </label>
//         {isSurpriseMe && (
//           <button
//             type="button"
//             onClick={handleSurpriseMe}
//             className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
//           >
//             Surprise me
//           </button>
//         )}
//       </div>
//       <input
//         type={type}
//         id={name}
//         name={name}
//         className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#primary] focus:border-[#primary] outline-none block w-full p-3"
//         placeholder={placeholder}
//         value={value}
//         onChange={handleChange}
//         required
//       />
//     </div>
//   );
// };

// export default FormField;
