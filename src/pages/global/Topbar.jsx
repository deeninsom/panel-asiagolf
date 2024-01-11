import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { ColorModeContext, tokens } from "../../styles/theme";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import UserMenu from "./UserMenu";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 SEARCH BAR 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
      <Box
        display="flex"
        borderRadius="3px"
        backgroundColor={colors.primary[400]}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 ICONS 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {
            // by user click toggle UI theme color...
            theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )
          }
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonOutlinedIcon />
        </IconButton>
        <UserMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default Topbar;
