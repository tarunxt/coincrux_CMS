// import React, { useState } from "react";
// import { TextField, MenuItem } from "@mui/material";
// import { FieldProps } from "firecms";

// interface CustomCategoryFieldProps {
//     color: string;
//     enumValues: { [key: string]: string };
// }

// const CustomCategoryField: React.FC<FieldProps<string[], CustomCategoryFieldProps>> = ({
//     property,
//     value,
//     setValue,
//     customProps
// }) => {
//     const [isFocused, setIsFocused] = useState(false);

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValue([event.target.value]);
//     };

//     const handleFocus = () => {
//         setIsFocused(true);
//     };

//     const handleBlur = () => {
//         setIsFocused(false);
//     };

//     const handleListItemClick = (category: string) => {
//         setValue([category]);
//     };

//     return (
//         <>
//             <TextField
//                 label={property.name}
//                 value={value ? value[0] : ""}
//                 onChange={handleChange}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//                 fullWidth
//                 variant="filled"
//             />
//             {isFocused && (
//                 <div style={{ position: "absolute", zIndex: 9999, top: "calc(100% + 10px)", left: 0 }}>
//                     {Object.entries(customProps.enumValues).map(([key, value]) => (
//                         <MenuItem key={key} onClick={() => handleListItemClick(value)}>
//                             {value}
//                         </MenuItem>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// }

// export default CustomCategoryField;
