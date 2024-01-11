import { useTheme } from "@emotion/react";
import {
  FormControlLabel,
  Checkbox,
  Stack,
  Box,
  Typography,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import { tokens } from "../../../styles/theme";

function OrderCard({
  handleCheck,
  title,
  orderId,
  time,
  product,
  packageType,
  price,
  address,
  courier,
  newOrder,
  onRoad,
  done,
  canceled,
  readyToDelivery,
  transactionNumber,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = {
    root: {
      border: `1px solid ${colors.grey[100]}`,
      backgroundColor: colors.primary[400],
      p: 1,
      borderRadius: 1,
    },
    head: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    divider: { backgroundColor: colors.grey[200], my: 1 },
    span: {
      fontWeight: "700",
      fontSize: 14,
      marginLeft: 12,
    },
    product: { display: "flex", alignItems: "center", gap: 2 },
    icon: { color: colors.grey[100], fontSize: 28 },
    gridContainer: { alignItems: "center", p: 2 },
    time: { color: colors.grey[200] },
    printLabel: { fontSize: 13, color: colors.grey[100] },
    btnTextGrey: { color: colors.grey[200] },
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.head}>
        <Stack direction="row" alignItems="center">
          <FormControlLabel
            control={<Checkbox onChange={handleCheck} />}
            label={title}
          />
          <Typography color={colors.greenAccent[500]}>{orderId}</Typography>
        </Stack>
        {!!time ? (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={styles.time}
          >
            <Typography>Batas Waktu :</Typography>
            <Typography>{time} Hari</Typography>
          </Stack>
        ) : (
          <div />
        )}
      </Box>
      <Divider sx={styles.divider} />
      <Box>
        <Grid container spacing={1} sx={styles.gridContainer}>
          <Grid item xs={12} sm={6} md={4} sx={styles.product}>
            <i className="fa-solid fa-box" style={styles.icon}></i>
            <div>
              <Typography fontWeight="700">{product}</Typography>
              <Typography fontSize={11}>
                {packageType}
                <span style={styles.span}>{price}</span>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography fontWeight="700">Alamat :</Typography>
            <Typography fontWeight="400" fontSize={13}>
              {address}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography fontWeight="600">
              Kurir : <span style={styles.span}>{courier}</span>
            </Typography>
            <Typography fontWeight="600">
              No Transaksi :{" "}
              <span style={styles.span}>{transactionNumber}</span>
            </Typography>{" "}
          </Grid>
        </Grid>
      </Box>
      <Divider sx={styles.divider} />
      {newOrder ? (
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="text" color="error">
            Tolak Pesanan
          </Button>
          <Button variant="text" color="success">
            Terima Pesanan
          </Button>
        </Box>
      ) : readyToDelivery ? (
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="text" sx={styles.btnTextGrey}>
            <Typography sx={styles.printLabel}>
              <i className="fa-solid fa-receipt"></i> &nbsp;&nbsp;Cetak Label
            </Typography>
          </Button>
          <Button variant="text" color="success">
            Request Pickup
          </Button>
        </Box>
      ) : onRoad ? (
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <div />
          <Button variant="text" sx={styles.btnTextGrey}>
            <i className="fa-solid fa-receipt"></i>
            &nbsp;&nbsp;Status Transaksi
          </Button>
        </Box>
      ) : done ? (
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="text" sx={styles.btnTextGrey}>
            <Typography sx={styles.printLabel}>
              <i className="fa-solid fa-star"></i> &nbsp;&nbsp;Nilai Customer
            </Typography>
          </Button>
          <Button variant="text" sx={styles.btnTextGrey}>
            <i className="fa-solid fa-receipt"></i> &nbsp;&nbsp;Cetak Label
          </Button>
        </Box>
      ) : canceled ? (
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <div />
          <Button variant="text" sx={styles.btnTextGrey}>
            <i className="fa-solid fa-receipt"></i> &nbsp;&nbsp;Chat Customer
          </Button>
        </Box>
      ) : null}
    </Box>
  );
}

export default OrderCard;
