import PopularCarSlider from "@/components/Slider";
import { getOneCar } from "@/services/CarService";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Gallery from "./Gallery";
import StarRating from "@/common/StarRating";
import { LikeIcon, UnLikeIcon } from "@/assets/svgs";
import { cookies } from "next/headers";
import { toStringCookies } from "@/services/toStringCookie";

async function page({ params }) {
  const storeCookie = cookies();
  const strCookies = toStringCookies(storeCookie);

  const {
    name,
    typeCar,
    steering,
    capacity,
    gasoline,
    price,
    offPrice,
    isLiked,
    gallery,
    description,
    numReviews,
  } = await getOneCar(params.slug, strCookies);

  return (
    <div className="p-8 rounded-btn">
      <div className="flex max-xl:flex-col gap-8">
        <Gallery gallery={gallery} />
        <div className="bg-white lg:p-6 p-4 rounded-btn flex-1">
          <div className="flex justify-between">
            <div>
              <h2 className="lg:text-3xl text-xl font-bold mb-1.5">{name}</h2>
              <div className="flex items-center gap-2">
                <StarRating />
                <div>
                  <span className="mt-2.5 lg:text-md max-lg:text-xs text-secondary-400 font-medium">
                    {numReviews} + Reviewer
                  </span>
                </div>
              </div>
            </div>
            <div>{isLiked ? <LikeIcon /> : <UnLikeIcon />}</div>
          </div>
          <p className="lg:mt-8 mt-4 lg:text-xl text-sm lg:text-secondary-400 text-secondary-300 lg:leading-10 leading-6">
            {description}
          </p>
          <div className="lg:mt-8 max-lg:mt-4 flex justify-between gap-3 flex-wrap lg:text-xl max-lg:text-xs [&>div>div>span:first-child]:text-secondary-300 lg:[&>div>div>span:last-child]:text-secondary-400 [&>div>div>span:last-child]:text-secondary-500 [&>div>div>span:last-child]:font-semibold [&>div>div:last-child]:mt-4 [&>div>div]:flex [&>div>div]:justify-between [&>div>div]:items-center [&>div>div]:gap-5">
            <div>
              <div>
                <span>Type Car</span>
                <span>{typeCar}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Steering </span>
                <span>{steering}</span>
              </div>
            </div>
            <div>
              <div>
                <span>Capacity</span>
                <span>{capacity} Person</span>
              </div>
              <div>
                <span>Gasoline </span>
                <span>{gasoline}L</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between lg:mt-[68px] mt-8">
            <div className="flex items-end flex-wrap">
              {offPrice > 0 ? (
                <span className="text-secondary-500 lg:text-3xl max-lg:text-xl font-bold">
                  ${offPrice}.00
                </span>
              ) : (
                <span
                  className={`${
                    offPrice > 0
                      ? "text-secondary-300 max-lg:text-xs w-full line-through"
                      : "font-bold text-secondary-500 lg:text-3xl max-lg:text-xl"
                  }`}
                >
                  ${price}.00/
                </span>
              )}
              <span className="text-sm font-bold text-secondary-300 max-lg:text-xs block">
                day
              </span>
              {offPrice > 0 ? (
                <span
                  className={`${
                    offPrice > 0
                      ? "font-bold text-secondary-300 max-lg:text-xs w-full line-through"
                      : "text-secondary-500 lg:text-3xl max-lg:text-xl"
                  }`}
                >
                  ${price}
                </span>
              ) : null}
            </div>
            <Link
              href=""
              className="text-white bg-primary-500 font-bold px-8 py-4 rounded"
            >
              Rent Now
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:p-6 p-4 bg-white rounded-btn">
        <div className="flex gap-3 mb-6">
          <span className="text-xl text-secondary-500 font-semibold">
            Reviews
          </span>
          <span className="text-white rounded text-sm font-bold bg-primary-500 px-3 py-1.5">
            13
          </span>
        </div>
        <div>
          <div className="flex mb-6">
            <div className="lg:mr-4 mr-2 w-[55px] h-[55px]">
              {/* <Image
                src={data.imageLinke}
                width={55}
                height={55}
                alt=""
                className="rounded-full"
              /> */}
            </div>
            <div className="max-lg:truncate flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-secondary-500 text-xl mb-2">
                    Alex Stanton
                  </h3>
                  <span className="text-sm text-secondary-300">
                    CEO at Bukalapak
                  </span>
                </div>
                <div>
                  <div className="mb-2 text-right">
                    <span className="text-sm text-secondary-300">
                      21 July 2022
                    </span>
                  </div>
                  <StarRating />
                </div>
              </div>
              <div className="relative">
                <p className="mt-3 text-sm text-secondary-400 leading-7">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety <br /> of cars with
                  good and comfortable facilities. In addition, the service
                  provided by the officers is also very friendly and very
                  polite.
                  <span className="lg:hidden absolute bg-white bottom-1 right-0 px-1">
                    ...
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <span className="font-semibold text-secondary-300">Recent Car</span>
        <PopularCarSlider />
      </div>
      <div className="mt-10">
        <span className="font-semibold text-secondary-300">
          Recomendation Car
        </span>
        <PopularCarSlider />
      </div>
    </div>
  );
}

export default page;
