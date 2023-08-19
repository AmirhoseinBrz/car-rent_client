import React from "react";

function HeaderLoading() {
  return (
    <div className="flex max-lg:flex-col-reverse lg:items-center justify-between bg-white lg:px-16 px-4 lg:py-10 py-5 gap-16">
      <div className="flex max-lg:flex-row-reverse lg:flex-[3] items-center max-lg:justify-between max-lg:gap-4">
        <div className="w-[140px] h-[44px] bg-gray-300 animate-pulse rounded" />
        <div className="lg:ml-14 h-[44px] w-[492px] bg-gray-300 animate-pulse rounded" />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="w-[200px] h-[44px] bg-slate-300 animate-pulse rounded" />

        <div className="w-[44px] h-[44px] rounded-full bg-gray-300 animate-pulse" />
      </div>
    </div>
  );
}

export default HeaderLoading;
