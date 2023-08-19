import CardCart from "@/components/CarCard";
import HeaderCard from "@/components/HeaderCard";
import SweepFlachIcon from "@/assets/svgs/site/sweepflash";
import queryString from "query-string";
import { getSortedCar } from "@/services/CarService";
import { cookies } from "next/headers";
import { toStringCookies } from "@/services/toStringCookie";

async function page({ searchParams }) {
  const Cookies = cookies();
  const strCookie = toStringCookies(Cookies);
  const { data } = await getSortedCar(
    queryString.stringify(searchParams),
    strCookie
  );

  return (
    <div className="p-8">
      <div className="relative flex flex-wrap mb-8 gap-8">
        <HeaderCard title={"Pick - Up"} />
        <button className="rounded-btn bg-primary-500 xl:p-[18px] max-xl:p-[12px] shadow-lg absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <SweepFlachIcon />
        </button>
        <HeaderCard title={"Drop - Off"} />
      </div>
      <div className="flex flex-wrap gap-8">
        {data.map((data) => (
          <CardCart {...data} style={"horizontal"} key={data._id} />
        ))}
      </div>
    </div>
  );
}

export default page;
