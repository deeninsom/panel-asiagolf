import React from "react";
import ErrorImage from "../assets/images/404.png";
import { Grid, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Grid container columns={12} minHeight="100vh">
      <Grid
        item
        xs={12}
        md={5}
        lg={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          Whooops!
        </Typography>
        <Typography variant="body1">
          Sorry, the Page you are looking for does not exist.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        lg={7}
        sx={{ display: "grid", placeContent: "center" }}
      >
        <img
          src={ErrorImage}
          alt="404"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
