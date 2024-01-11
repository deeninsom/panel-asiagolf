import { useTheme } from "@emotion/react";
import { Add } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { tokens } from "../styles/theme";

function AddButton({ ...props }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box {...props}>
      <IconButton
        sx={{
          backgroundColor: colors.greenAccent[400],
          borderRadius: 1,
          height: "100%",
          width: 50,
        }}
      >
        <Add />
      </IconButton>
    </Box>
  );
}

export default AddButton;
