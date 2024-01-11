import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Header } from "../../components";
import { useTheme } from "@emotion/react";
import { tokens } from "../../styles/theme";
import TabPanel, { a11yProps } from "./components/TabPanel";
import { orderTabsPage } from "../../constants/orderTabsPage";
import NewOrder from "./components/NewOrder";
import { useMediaQuery } from "@mui/material";
import ReadyToDelivery from "./components/ReadyToDelivery";
import OnRoad from "./components/OnRoad";
import Done from "./components/Done";
import Canceled from "./components/Canceled";

export default function ScrollableTabsButtonAuto() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dekstop = useMediaQuery("(min-width:600px)");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m="20px">
      <Header title="PESANAN" subtitle="List semua pesanan yang masuk" />
      <Box
        sx={{
          width: "100%",
          backgroundColor: colors.blueAccent[700],
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <Tabs
          variant={dekstop ? "fullWidth" : "scrollable"}
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              background: colors.greenAccent[500],
            },
          }}
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {orderTabsPage.map((item) => {
            return (
              <Tab key={item.id} label={item.label} {...a11yProps(item.id)} />
            );
          })}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <NewOrder />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReadyToDelivery />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OnRoad />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Done />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Canceled />
      </TabPanel>
    </Box>
  );
}
