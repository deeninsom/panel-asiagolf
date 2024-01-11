import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { sidebarMenu, sidebarRolemenu } from "../../constants/sidebarMenu";
import { useLocation } from "react-router-dom";
import { tokens } from "../../styles/theme";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SidebarMenuItem from "./SidebarMenuItem";
import "react-pro-sidebar/dist/css/styles.css";

const SidebarMenu = () => {
  const location = useLocation();
  const urlPathName = location.pathname;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(urlPathName);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const MenuType = ({ title }) => {
    return (
      <div
        style={{
          padding: "0 24px",
          marginBottom: "8px",
          marginTop: "32px",
        }}
      >
        <Typography
          variant="body2"
          fontWeight={600}
          style={{ opacity: isCollapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
        >
          {title}
        </Typography>
      </div>
    );
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#fff",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.primary[100]}>
                  ASIA GOLF
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}

          <MenuType title="Menu Utama" />

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {sidebarMenu?.map((item, idx) => {
              return (
                <SidebarMenuItem
                  collapsed={isCollapsed}
                  key={idx}
                  menu={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}
          </Box>
          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}

          <MenuType title="Menu Role" />

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {sidebarRolemenu?.map((item, idx) => {
              return (
                <SidebarMenuItem
                  collapsed={isCollapsed}
                  key={idx}
                  menu={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SidebarMenu;
