import React from "react";
import AddProductFormContainer from "./AddProductFormContainer";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Label from "./Label";
import { Link } from "react-router-dom";

function AddProductForm3() {
  return (
    <AddProductFormContainer title={"Detail Harga & Stock"}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <Label
            title="Harga Produk"
            description="Masukan harga produk normal dan setelah diskon jika produk ingin menampilkan harga diskon."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TextField type="number" label="Masukan harga normal" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Label
            title="Harga Diskon"
            description="Apabila produk tidak memiliki diskon kosongkan."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TextField
            type="number"
            label="Masukan harga diskon(opsional)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Label title="Stock Produk" />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TextField type="number" label="Masukan jumlah stock" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Label
            title="SKU (Stock Keeping Unit)"
            description="Gunakan kode unik SKU jika kamu ingin menandai produkmu"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <TextField type="number" label="Masukan SKU" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Label title="Layanan Pengiriman" />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Stack>
            <Stack direction="row">
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Standart"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Custom"
              />
            </Stack>
            <Typography>
              Layanan pengiriman akan sama dengan{" "}
              <Link to={"#"} style={{ color: "green" }}>
                &nbsp;Pengaturan Pengiriman
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </AddProductFormContainer>
  );
}

export default AddProductForm3;
