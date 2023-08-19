"use client";
import Input from "@/common/input";
import { useCallback, useState } from "react";
import { filterCategory } from "@/constants/FilterCategory";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function SiderBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState({
    typeCar: searchParams.get("typeCar")?.split(",") || [],
    capacity: searchParams.get("capacity")?.split(",") || [],
    price: searchParams.get("price") || 99,
  });

  const createQueryString = useCallback(
    (name, value) => {
      let params = new URLSearchParams(searchParams);
      params.set(name, value);
      params.forEach((value, key) => {
        if (value === "") {
          params.delete(key);
        }
      });
      return params.toString();
    },
    []
  );

  const routerPush = (name, value) => {
    router.push(pathname + "?" + createQueryString(name, value));
  };

  const typeHandler = async (e) => {
    const { id } = e.target;
    if (filter.typeCar.includes(id)) {
      const newArr = filter.typeCar.filter((e) => e != id);
      setFilter((prevState) => ({ ...prevState, typeCar: newArr }));
      routerPush("typeCar", newArr);
    } else {
      setFilter((prevState) => ({
        ...prevState,
        typeCar: [...filter.typeCar, id],
      }));
      routerPush("typeCar", [...filter.typeCar, id]);
    }
  };

  const passengersHandler = (e) => {
    const { id } = e.target;
    if (filter.capacity.includes(id)) {
      const newArr = filter.capacity.filter((e) => e != id);
      setFilter((prevState) => ({ ...prevState, capacity: newArr }));
      routerPush("capacity", newArr);
    } else {
      setFilter((prevState) => ({
        ...prevState,
        capacity: [...filter.capacity, id],
      }));
      routerPush("capacity", [...filter.capacity, id]);
    }
  };

  const priceHandler = (e) => {
    const { value } = e.target;
    setFilter((prevState) => ({ ...prevState, price: value }));
    routerPush("price", value);
  };

  return (
    <>
      <span className="text-xs font-semibold text-secondary-300">TYPE</span>
      <div className="mt-7 mb-14">
        {filterCategory.type.map((e) => (
          <div className="mb-8" key={e.title}>
            <Input
              htmlFor={e.title}
              labelClassName="text-xl font-semibold text-secondary-400 flex items-center"
              inputClassName="mr-2"
              id={e.title}
              name={e.title}
              checked={filter.typeCar.includes(e.title)}
              onchange={typeHandler}
              type="checkbox"
              labelTitle={e.title}
            />
          </div>
        ))}
      </div>
      <span className="text-xs font-semibold text-secondary-300">CAPACITY</span>
      <div className="mt-7 mb-14">
        {filterCategory.passengers.map((e) => (
          <div className="mb-8" key={e.id}>
            <Input
              htmlFor={e.passengersSize + e.title}
              labelClassName="text-xl font-semibold text-secondary-400 flex items-center"
              inputClassName="mr-2"
              id={e.passengersSize}
              name={e.passengersSize + e.title}
              type="checkbox"
              checked={filter.capacity.includes(e.passengersSize)}
              onchange={passengersHandler}
              labelTitle={e.passengersSize + " " + e.title}
            />
          </div>
        ))}
      </div>
      <span className="text-xs font-semibold text-secondary-300">PRICE</span>
      <div className="mt-6">
        <Input
          labelClassName="text-secondary-400 text-xl font-semibold"
          inputClassName="w-[90%]"
          labelTitle={`Max.${filter.price}.00`}
          type="range"
          name="range"
          min={0}
          max={99}
          value={filter.price}
          onchange={priceHandler}
        />
      </div>
    </>
  );
}

export default SiderBar;
