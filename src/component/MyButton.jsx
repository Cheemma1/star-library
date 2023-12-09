// MyButton.js
import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ children, ...props }) => {
  return (
    <Button
      sx={
        {
          // Apply your custom styles here
          // Example: backgroundColor: 'red',
        }
      }
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;
