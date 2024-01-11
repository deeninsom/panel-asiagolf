import React from "react";
import AddProductFormContainer from "./AddProductFormContainer";
import { Grid, TextField } from "@mui/material";
import Label from "./Label";

function AddProductForm2() {
  return (
    <AddProductFormContainer title={"Detail Produk"}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <Label
            title="Foto Produk"
            description="Format gambar .jpg .jpeg .png dan ukuran mainimum 300 x 300px (untuk gambar optimal gunakan ukuran minimum 700 x 700px)."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TextField label="Contoh: Driver PXG" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Label
            title="Deskripsi Produk"
            description="Masukan deskripsi lengkap produk agar pembeli lebih mudah mengerti yang dijual."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TextField
            multiline
            rows={8}
            label="Tuliskan deskripsi disini"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Label
            title="Berat Produk"
            description="Hanya diisi dengan angka, misal berat 1kg maka isi: 1000gram."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TextField type="number" label="Contoh: 1.000" fullWidth />
        </Grid>
      </Grid>
    </AddProductFormContainer>
  );
}

export default AddProductForm2;
