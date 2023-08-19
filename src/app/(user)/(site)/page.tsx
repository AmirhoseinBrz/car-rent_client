import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { HeaderCard, CarCard, Slider } from "@/components";
import { SweepFlachIcon } from "@/assets/svgs";
import { getAllCar } from "@/services/CarService";
import { toStringCookies } from "@/services/toStringCookie";

async function Home() {
  const storeCookie = cookies();
  const strCookie = toStringCookies(storeCookie);
  const { data, carLength } = await getAllCar(strCookie);

  return (
    <main className="lg:px-16 max-lg:px-6">
      <div className="flex 2xl:justify-between justify-center gap-8 mt-8">
        <div>
          <Image
            src={`${process.env.SERVER_URL}/images/banner/hero-img-1.png`}
            width={1240}
            height={340}
            priority
            alt=""
          />
        </div>
        <div className="max-lg:hidden">
          <Image
            src={`${process.env.SERVER_URL}/images/banner/hero-img-2.png`}
            width={1240}
            height={340}
            alt=""
          />
        </div>
      </div>
      <div
        className="scrollbar-change mt-9 relative flex items-center justify-between xl:gap-11
      max-xl:gap-8 max-xl:flex-wrap"
      >
        <HeaderCard title={"Pick - Up"} />
        <button className="rounded-btn bg-primary-500 xl:p-[18px] max-xl:p-[12px] shadow-lg max-xl:absolute max-xl:top-[50%] max-xl:left-[50%] max-xl:-translate-x-1/2 max-xl:-translate-y-1/2">
          <SweepFlachIcon />
        </button>
        <HeaderCard title={"Drop - Off"} />
      </div>
      <div className="mt-8">
        <span className="font-semibold text-secondary-300">Popular Car</span>
        <Slider data={data} />
      </div>
      <div className="mt-10 lg:mb-16 max-lg:mb-12">
        <span className="font-semibold text-secondary-300">
          Recomendation Car
        </span>
        <div className="mt-7 flex flex-wrap gap-8 max-lg:justify-center">
          {data.map((data) => (
            <CarCard {...data} key={data._id} type={true} />
          ))}
        </div>
        <div className="mt-16 relative flex justify-center items-center">
          <Link href="/shop" className="btn-primary">
            Show more car
          </Link>
          <span className="text-secondary-300 absolute top-1/2 right-0 -translate-y-1/2 text-sm lg:font-medium max-lg:font-bold">
            {carLength} car
          </span>
        </div>
      </div>
    </main>
  );
}

export default Home;
