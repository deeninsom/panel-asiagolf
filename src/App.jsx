import {
  Contacts,
  Dashboard,
  ErrorPage,
  Invoices,
  Login,
  SidebarMenu,
  Topbar,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./styles/theme";
import Notiflix from "notiflix";
import Orders from "./pages/orders";
import {
  notiflexReportConfigure,
  notiflixLoadingConfigure,
} from "./constants/notiflixConfigure";
import AddProduct from "./pages/product/AddProduct";

const App = () => {
  const [theme, coloMode] = useMode();
  const token = localStorage.getItem("_asia_golf_token");

  if (!token) {
    return <Login />;
  }

  Notiflix.Loading.init(notiflixLoadingConfigure);

  Notiflix.Report.init(notiflexReportConfigure);

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        {/* Rest CSS */}
        <CssBaseline />

        <BrowserRouter>
          <main className="app">
            <SidebarMenu />
            <section className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />

                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
