export const middlewareAuth = async (cookies: string) =>
  await fetch("http://localhost:5000/api/user/refresh-token", {
    method: "GET",
    credentials: "include",
    headers: { Cookie: cookies },
  });
