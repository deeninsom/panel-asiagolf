import { Box, Stack } from "@mui/material";
import React from "react";
import { Header } from "../../components";
import AddProductForm1 from "./components/AddProductForm1";
import AddProductForm2 from "./components/AddProductForm2";
import AddProductForm3 from "./components/AddProductForm3";

function AddProduct() {
  return (
    <Box m="20px" pb={2}>
      <Header title="Tambah Produk" subtitle="Tambah produk baru" />
      <Stack spacing={2.8}>
        <AddProductForm1 />
        <AddProductForm2 />
        <AddProductForm3 />
      </Stack>
    </Box>
  );
}

export default AddProduct;
