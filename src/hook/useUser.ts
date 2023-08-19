import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/UserService";

export const UserInfo = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
    retry: false,
  });
