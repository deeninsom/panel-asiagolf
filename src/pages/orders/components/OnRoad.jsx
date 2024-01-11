import { Stack } from "@mui/material";
import React from "react";
import OrderCard from "./Card";
import TabsContainer from "./TabsContainer";

function OnRoad() {
  return (
    <TabsContainer>
      <Stack spacing={3}>
        {[1].map((item) => {
          return (
            <OrderCard
              onRoad
              title="Pesanan Baru"
              orderId="qwerty1234"
              product="Ferulle Iron Golf Sasquach Carbon | Aksesoris | Fitting Stick Golf - 1 Black"
              price={"Rp.300000"}
              packageType={"Paket Bundling Prokit"}
              address=" RB-23, Jl. Villa Bukit Mas, Dukuh Pakis, Kec. Dukuhpakis, Surabaya, Jawa Timur 60225"
              courier={"Sicepat Express"}
              transactionNumber={"123eerty4789tu"}
            />
          );
        })}
      </Stack>
    </TabsContainer>
  );
}

export default OnRoad;
