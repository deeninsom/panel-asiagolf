import { useTheme } from "@mui/material";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { tokens } from "../../styles/theme";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ menu, selected, setSelected, collapsed }) => {
  const themes = useTheme();
  const color = tokens(themes.palette.mode);

  const menuStyle = {
    fontSize: 18,
    fontWeight: "500",
    color: color.primary[100],
  };

  console.log(collapsed);
  return (
    <>
      {!menu?.child ? (
        <MenuItem
          active={selected === menu.path}
          onClick={() => setSelected(menu.path)}
          icon={<menu.icon size={18} />}
          style={menuStyle}
        >
          {menu.title}
          <Link to={menu.path} />
        </MenuItem>
      ) : (
        <SubMenu
          suffix={<span className="badge yellow"></span>}
          title={menu.title}
          icon={<menu.icon size={18} />}
          style={menuStyle}
        >
          {menu?.child?.map((item, idx) => {
            return (
              <MenuItem
                key={idx}
                active={selected === item.path}
                onClick={() => setSelected(item.path)}
                style={{
                  marginLeft: collapsed ? -15 : 20,
                  fontSize: collapsed ? 10 : 14,
                  fontWeight: "400",
                }}
              >
                {item.title}
                <Link to={item.path} />
              </MenuItem>
            );
          })}
        </SubMenu>
      )}
    </>
  );
};

export default SidebarMenuItem;
