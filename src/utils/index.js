import { toast } from "react-toastify";

export const notify = (m, s = true) =>
  toast(m, { type: s ? "success" : "error" });
