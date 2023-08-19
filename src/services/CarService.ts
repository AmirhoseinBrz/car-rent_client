import http from "./httpService";

export const getAllCar = async (strCookie: string) => {
  return await http
    .get("/car", { headers: { Cookie: strCookie } })
    .then((data) => data.data);
};

export const getSortedCar = async (qs: string, cookies: string) => {
  return await http
    .get(`/car/?${qs}`, { headers: { Cookie: cookies } })
    .then((data) => data.data);
};

export const getOneCar = async (id: string) => {
  return await http.get(`/car/${id}`).then((data) => data.data);
};

export const likeCar = async (id: string) => {
  return await http.get(`car/like/${id}`).then((res) => res.data);
};
