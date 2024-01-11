import * as Yup from "yup";

export const validation = Yup.object({
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  password: Yup.string()
    .min(3, "Password tidak boleh kurang dari 5 karakter")
    .required("Password tidak boleh kosong"),
});
