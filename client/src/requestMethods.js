import axios from "axios";

const BASE_URL = "http://localhost:8080/v1/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGY5ZDZkYWI3YmY3MzgwMTRlNzJlOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTk0OTg3Mn0.Nlx3JR0EhG3rW-HXVwDbBp-S6kgrwobl5O9MvjS2svY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
