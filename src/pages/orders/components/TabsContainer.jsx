import { useTheme } from "@emotion/react";
import {
  FormControlLabel,
  Paper,
  Checkbox,
  Stack,
  Pagination,
  Box,
} from "@mui/material";
import React from "react";
import { tokens } from "../../../styles/theme";

function TabsContainer({ children }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Paper
        sx={{
          p: 1,
          backgroundColor: colors.primary[500],
          borderRadius: "0px",
          height: "600px",
          overflow: "auto",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Pilih Semua"
          sx={{ mb: 1 }}
        />
        <Stack spacing={3}>{children}</Stack>
      </Paper>
      <Box
        display="flex"
        justifyContent="flex-end"
        py={1}
        sx={{
          backgroundColor: colors.blueAccent[700],
          borderRadius: "0px 0px 8px 8px",
        }}
      >
        <Pagination count={10} />
      </Box>
    </>
  );
}

export default TabsContainer;
