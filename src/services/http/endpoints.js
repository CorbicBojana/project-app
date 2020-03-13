import axios from "./axios";

export const Login = {
  submit: values => axios.post("/login", values),
  profile: values => axios.post("/register", values)
};

export const Categories = {
  getAll: () => axios.get("/categories/get-all"),
  delete: ({ id }) => axios.delete(`/categories/${id}`)
};
