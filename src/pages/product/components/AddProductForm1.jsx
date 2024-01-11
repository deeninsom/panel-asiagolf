import React from "react";
import AddProductFormContainer from "./AddProductFormContainer";
import { Autocomplete, Grid, TextField } from "@mui/material";
import Label from "./Label";
import AddButton from "../../../components/AddButton";

function AddProductForm1() {
  return (
    <AddProductFormContainer title={"Nama dan Kategori Produk"}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <Label
            title="Nama Produk"
            description="Nama produk min. 10 karakter dengan memasukan merek,jenis
          produk,warna,bahan dan type."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TextField label="Contoh: Driver PXG" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Label title="Kategori" description="Pilih kategori sesuai produk" />
        </Grid>
        <Grid item xs={12} sm={12} md={7} sx={{ display: "flex" }}>
          <Autocomplete
            fullWidth
            disablePortal
            options={[
              { label: "Kategori 1", value: 1 },
              { label: "Kategori 2", value: 2 },
            ]}
            renderInput={(params) => (
              <TextField {...params} label="Pilih kategori" />
            )}
          />
          <AddButton pl={1} />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Label title="Jenis Produk" description="Tentukan jenis produk." />
        </Grid>
        <Grid item xs={12} sm={12} md={7} sx={{ display: "flex" }}>
          <Autocomplete
            fullWidth
            disablePortal
            options={[
              { label: "Jenis 1", value: 1 },
              { label: "Jenis 2", value: 2 },
            ]}
            renderInput={(params) => (
              <TextField {...params} label="Pilih Jenis Produk" />
            )}
          />{" "}
          <AddButton pl={1} />
        </Grid>
      </Grid>
    </AddProductFormContainer>
  );
}

export default AddProductForm1;
