import { Box, Typography } from "@mui/material";
import React from "react";
import notFound from "../../../assets/illlustation/no-results.svg";

function EmptyOrder() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img src={notFound} alt="" style={{ width: 200, height: 200 }} />
      <Typography sx={{ marginLeft: -4, fontSize: 14 }}>
        Tidak ada pesanan
      </Typography>
    </Box>
  );
}

export default EmptyOrder;
