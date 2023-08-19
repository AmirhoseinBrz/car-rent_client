function HeaderCard({ title }: { title: string }) {
  return (
    <div className="bg-white lg:px-6 lg:pt-6 lg:pb-7 p-4 max-lg:w-full lg:flex-1 rounded-btn overflow-x-auto ">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
        </span>
        <span className="font-semibold">{title}</span>
      </div>
      <div className="mt-4 flex justify-between [&>div]:flex-1 [&>div>h3]:font-bold [&>div>h3]:mb-2 [&>div>select]:text-sm max-lg:[&>div>select]:text-xs ">
        <div className="pr-5">
          <h3>Location</h3>
          <select name="" id="">
            <option value="">Select you city</option>
            <option value="">Semarang</option>
          </select>
        </div>
        <div className="border-l border-[#C3D4E9] px-5">
          <h3>Date</h3>
          <select name="" id="">
            <option value="">Select your date</option>
            <option value="">20 July 2022</option>
            <option value="">21 July 2022</option>
          </select>
        </div>
        <div className="border-l border-[#C3D4E9] px-5">
          <h3>Time</h3>
          <select name="" id="">
            <option value="">Select your time</option>
            <option value="">07.00</option>
            <option value="">01.00</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
