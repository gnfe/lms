import instance from "axios";
export const axios = instance.create({
  baseURL: "http://localhost/lms/index.php",
});
export const transform = (postdata) => {
  const fd = new FormData();
  for (let key in postdata) {
    fd.append(key, postdata[key]);
  }
  return fd;
};
export const loginService = async (pd) => {
  return await axios.post(`?page=login&action=login`).then((res) => res.data);
};
export const adminService = {
  view: async () =>
    await axios.post(`?page=admin&action=view`).then((res) => res.data.data),

  create: async (pd) =>
    await axios
      .post(`?page=admin&action=create`, transform(pd))
      .then((res) => res.data.data),
  update: async (pd) =>
    await axios
      .post(`?page=admin&action=update`, transform(pd))
      .then((res) => res.data.data),
  delete: async (pd) =>
    await axios
      .post(`?page=admin&action=delete`, transform(pd))
      .then((res) => res.data.data),
};

export const facultyService = {
  view: async () =>
    await axios.post(`?page=faculty&action=view`).then((res) => res.data.data),

  create: async (pd) =>
    await axios
      .post(`?page=faculty&action=create`, transform(pd))
      .then((res) => res.data.data),
  update: async (pd) =>
    await axios
      .post(`?page=faculty&action=update`, transform(pd))
      .then((res) => res.data.data),
  delete: async (pd) =>
    await axios
      .post(`?page=faculty&action=delete`, transform(pd))
      .then((res) => res.data.data),
};
export const studentService = {
  view: async () =>
    await axios.post(`?page=student&action=view`).then((res) => res.data.data),

  create: async (pd) =>
    await axios
      .post(`?page=student&action=create`, transform(pd))
      .then((res) => res.data.data),
  update: async (pd) =>
    await axios
      .post(`?page=student&action=update`, transform(pd))
      .then((res) => res.data.data),
  delete: async (pd) =>
    await axios
      .post(`?page=student&action=delete`, transform(pd))
      .then((res) => res.data.data),
};

export const coursesService = {
  view: async () =>
    await axios.post(`?page=courses&action=view`).then((res) => res.data.data),

  create: async (pd) =>
    await axios
      .post(`?page=courses&action=create`, transform(pd))
      .then((res) => res.data.data),
  update: async (pd) =>
    await axios
      .post(`?page=courses&action=update`, transform(pd))
      .then((res) => res.data.data),
  delete: async (pd) =>
    await axios
      .post(`?page=courses&action=delete`, transform(pd))
      .then((res) => res.data.data),
};

export const slotsService = {
  view: async () =>
    await axios.post(`?page=slots&action=view`).then((res) => res.data.data),

  create: async (pd) =>
    await axios
      .post(`?page=slots&action=create`, transform(pd))
      .then((res) => res.data.data),
  update: async (pd) =>
    await axios
      .post(`?page=slots&action=update`, transform(pd))
      .then((res) => res.data.data),
  delete: async (pd) =>
    await axios
      .post(`?page=slots&action=delete`, transform(pd))
      .then((res) => res.data.data),
};
export const batchService = {
  view: async () =>
    await axios.post(`?page=batch&action=view`).then((res) => res.data.data),

  create: async (pd) =>
    await axios
      .post(`?page=batch&action=create`, transform(pd))
      .then((res) => res.data.data),
  update: async (pd) =>
    await axios
      .post(`?page=batch&action=update`, transform(pd))
      .then((res) => res.data.data),
  delete: async (pd) =>
    await axios
      .post(`?page=batch&action=delete`, transform(pd))
      .then((res) => res.data.data),
};
