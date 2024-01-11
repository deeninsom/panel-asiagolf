import { useTheme } from "@emotion/react";
import { Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../../styles/theme";

function AddProductFormContainer({ children, title }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Paper sx={{ width: "100%", backgroundColor: colors.primary[400], p: 2 }}>
      <Typography fontSize={20} fontWeight={"600"}>
        {title}
      </Typography>
      <Divider sx={{ marginY: 1.5 }} />
      {children}
    </Paper>
  );
}

export default AddProductFormContainer;
