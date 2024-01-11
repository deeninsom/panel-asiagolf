import { Stack, Typography } from "@mui/material";
import React from "react";

function Label({ title, description }) {
  return (
    <Stack>
      <Typography fontSize={16} fontWeight={"600"}>
        {title}
      </Typography>
      <Typography fontSize={12}>{description}</Typography>
    </Stack>
  );
}

export default Label;
