import instance from "axios";
export const axios = instance.create({
  baseURL: "http://localhost/lms/index.php",
});
