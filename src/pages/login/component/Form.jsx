import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright(formik) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...formik}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://asiagolf.id/">
        asiagolf.id
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#3e4396",
    },
    "&.Mui-error fieldset": {
      borderColor: "#d32f2f",
    },
  },
  "& label.Mui-focused": {
    color: "#3e4396",
  },
};

export default function Form({ formik, checked, onChangeCheckbox }) {
  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: 8 }}>
      <TextField
        margin="normal"
        placeholder="Enter your email"
        required
        fullWidth
        type="email"
        error={Boolean(formik.touched.email && formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        label="Email"
        sx={inputStyle}
        {...formik.getFieldProps("email")}
      />
      <TextField
        margin="normal"
        placeholder="Enter your password"
        required
        fullWidth
        error={Boolean(formik.touched.password && formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        label="Password"
        type="current-password"
        sx={inputStyle}
        {...formik.getFieldProps("password")}
      />
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={checked}
            onChange={onChangeCheckbox}
            style={{ color: "#1f2a40" }}
          />
        }
        label="Remember me"
      />
      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{
          mt: 3,
          mb: 2,
          bgcolor: "#1f2a40",
          "&:hover": {
            background: "#141b2d",
          },
        }}
      >
        Masuk
      </Button>
      <Copyright sx={{ mt: 5 }} />
    </form>
  );
}
