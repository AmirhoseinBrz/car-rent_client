"use client";

import { SearchIcon, OptionIcon, MenuIcon } from "@/assets/svgs";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import HeaderLoading from "./Loading/HeaderLoading";
import { UserInfo } from "@/hook/useUser";
import { userLogout } from "@/services/UserService";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const { isLoading, data } = UserInfo();

  const { user } = data || {};

  if (isLoading) {
    return <HeaderLoading />;
  }

  const logout = async () => {
    const res = await userLogout();
    alert(res.message);
    await queryClient.resetQueries({ queryKey: ["user"] });
    window.location.href = "/";
  };

  return (
    <div
      className={`bg-white flex items-center lg:py-10 lg:px-14 px-6 py-8 max-lg:flex-wrap max-lg:justify-between border-[#c3d4e966] sticky top-0 z-[99] border-2 transition-all`}
    >
      <Link
        href="/"
        className={`text-3xl font-bold text-primary-500 lg:mr-16 ${
          pathname.startsWith("/shop") ? "max-lg:order-last" : ""
        }`}
      >
        MORENT
      </Link>
      <div
        className="flex rounded-[70px] lg:border lg:px-5 lg:py-2.5
       lg:min-w-[492px] max-lg:w-full max-lg:order-last max-lg:mt-[2rem] gap-4"
      >
        <div className="flex max-lg:py-3 max-lg:px-6 items-center flex-1 max-lg:border rounded-btn">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search something here"
            className=" mx-5 flex-1 outline-none placeholder:text-secondary-400
            placeholder:font-medium max-lg:text-sm"
          />
        </div>
        <div className="flex items-center max-lg:border max-lg:p-3 max-lg:rounded-btn">
          <OptionIcon />
        </div>
      </div>
      <div className="lg:ml-auto">
        {user ? (
          <div
            className={`flex items-center gap-5 ${
              pathname.startsWith("/shop")
                ? "max-lg:w-full max-lg:justify-between max-lg:mb-8"
                : ""
            } `}
          >
            {pathname.startsWith("/shop") && (
              <div className="lg:hidden">
                <MenuIcon />
              </div>
            )}
            <button
              className="btn-primary rounded-[6px] px-6 py-3"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="px-8 rounded-md bg-primary-500 text-white font-bold py-3"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
