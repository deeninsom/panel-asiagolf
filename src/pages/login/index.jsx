import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import Cookies from "js-cookie";
import Form from "./component/Form";
import usePost from "../../hooks/usePost";
import { validation } from "./validation";
import Notiflix from "notiflix";
import {
  notiflexReportConfigure,
  notiflixLoadingConfigure,
} from "../../constants/notiflixConfigure";
import { api } from "../../services/api";

export default function Login() {
  const [checked, setIschecked] = React.useState(false);
  const cookieUser = "_asia_golf_user_credentials";
  const inputRef = React.useRef(null);
  const login = usePost({ module: "auth/login" });

  Notiflix.Loading.init(notiflixLoadingConfigure);
  Notiflix.Report.init(notiflexReportConfigure);

  const getCookie = () => {
    const userCredentialsCookie = Cookies.get(cookieUser);
    if (userCredentialsCookie) {
      const { email, password } = JSON.parse(userCredentialsCookie);
      inputRef.current.setFieldValue("email", email);
      inputRef.current.setFieldValue("password", password);
    }
  };

  const setCookie = (email, password) => {
    const cookieOptions = {
      expires: 365,
    };
    Cookies.set(cookieUser, JSON.stringify({ email, password }), cookieOptions);
  };

  const handleSubmit = async (val) => {

    // console.log(val)

    Notiflix.Loading.hourglass();

    if (checked) {
      setCookie(val.email, val.password);
    } else {
      Cookies.remove(cookieUser);
    }

    // api.post('/auth/login', {login})
    // .then((response)=>{
    //   console.log(response.data)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })

    api.post("/auth/login")
      .then((respose) =>
        console.log('response post login', respose),
        login
          .mutateAsync(val)
          // .then(() => {
            
          //   localStorage.setItem("_asia_golf_token", JSON.stringify(val));
          //   window.location.reload();
          //   Notiflix.Loading.remove();
          // })
          // .catch(() => {
          //   Notiflix.Loading.remove();
          //   Notiflix.Report.failure(
          //     "Gagal masuk",
          //     "Perikasa kembali email dan password anda!",
          //     "Ya"
          //   );
          // })
      )
      .catch((err) =>
        console.log(err),
        Notiflix.Report.failure(
          "Terjadi kesalahan",
          "Coba beberapa saat lagi!",
          "Ya"
        )
      );
  };

  React.useEffect(() => {
    getCookie();
  }, []);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://asiagolf.id/wp-content/uploads/2023/07/ig-604.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ bgcolor: "#e0e0e0" }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#3e4396" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Masuk
          </Typography>
          <Formik
            innerRef={inputRef}
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validation}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form
                formik={formik}
                checked={checked}
                onChangeCheckbox={() => setIschecked(!checked)}
              />
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
}
