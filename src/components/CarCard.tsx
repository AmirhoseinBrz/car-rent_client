"use client";

import {
  LikeIcon,
  UnLikeIcon,
  PetrolStationIcon,
  SteeringIcon,
  UsersIcon,
} from "@/assets/svgs";
import { UserInfo } from "@/hook/useUser";
import { CarCardProps } from "@/interfaces/interfaces";
import { likeCar } from "@/services/CarService";
import { useMutation } from "@tanstack/react-query";
import { stat } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function CarCard({
  _id,
  name,
  typeCar,
  gasoline,
  steering,
  capacity,
  price,
  style,
  imageLink,
  isLiked,
}: CarCardProps) {
  const [like, setLike] = useState(isLiked);

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: likeCar,
  });

  const { data } = UserInfo();

  const likeHandler = async () => {
    if (!data) {
      alert("شما ابتدا باید وارد حساب کاربری خود شوید");
      return;
    }
    const { message } = await mutateAsync(_id);
    alert(message);
    setLike(!like);
  };

  return (
    <div
      className={`lg:p-6 p-4 rounded-btn bg-white lg:min-w-[304px] ${
        style === "horizontal"
          ? "max-lg:min-w-[327px] max-lg:flex-1"
          : "max-lg:min-w-[240px]"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-bold ">{name}</h1>
        <button disabled={isLoading} onClick={likeHandler}>
          {like ? <LikeIcon /> : <UnLikeIcon />}
        </button>
      </div>
      <span className="text-sm font-bold text-secondary-300 ">{typeCar}</span>
      <div
        className={`${
          style === "horizontal" ? "max-lg:flex gap-14 justify-between" : ""
        }`}
      >
        <div
          className={`flex w-[252px] h-[112px] relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-img-shadow-buttom my-12 ${
            imageLink ? "" : "items-center justify-center"
          }`}
        >
          {imageLink ? (
            <Image
              src={imageLink}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              style={{
                objectFit: "contain",
              }}
              alt=""
            />
          ) : (
            <h1 className="font-bold text-xl">Car image not available</h1>
          )}
        </div>
        <div
          className={`flex ${
            style === "horizontal"
              ? "lg:justify-between max-lg:flex-col max-lg:justify-center max-lg:gap-4"
              : "justify-between"
          }  [&>div]:flex [&>div]:items-center [&>div]:gap-1 [&>div>span]:font-medium lg:[&>div>span]:text-sm [&>div>span]:text-xs [&>div>span]:text-secondary-300`}
        >
          <div>
            <PetrolStationIcon />
            <span>{gasoline}L</span>
          </div>
          <div>
            <SteeringIcon />
            <span>{steering}</span>
          </div>
          <div>
            <UsersIcon />
            <span className="whitespace-nowrap">{capacity} People</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex items-center font-bold">
          <span className="text-secondary-500 lg:text-xl text-base">
            ${price}/
          </span>
          <span className="lg:text-sm text-xs text-secondary-300">day</span>
        </div>
        <Link href={`shop/${_id}`} className="btn-primary">
          Rent Now
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
