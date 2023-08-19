import Link from "next/link";

const footer = () => {
  return (
    <div className="lg:bg-white lg:px-14 px-6 lg:pb-16 pb-6 pt-20">
      <div className="flex max-lg:flex-wrap justify-between pb-[2.25rem]">
        <div>
          <h1 className="mb-4 font-bold text-primary-500">MORENT</h1>
          <span className="font-medium text-[#13131399]">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </span>
        </div>
        <div className="flex flex-wrap gap-16 [&>div>a]:block [&>div>a]:mb-4 [&>div>a]:font-medium [&>div>a]:text-[#13131399] [&>div>h3]:text-5 [&>div>h3]:font-semibold [&>div>h3]:mb-6 max-lg:mt-12">
          <div>
            <h3>About</h3>
            <Link href="">How it Work</Link>
            <Link href="">Featured</Link>
            <Link href="">Partnership</Link>
            <Link href="">Bussiness Relation</Link>
          </div>
          <div className="max-lg:order-last">
            <h3>Community</h3>
            <Link href="">Events</Link>
            <Link href="">Blog</Link>
            <Link href="">Podcast</Link>
            <Link href="">Invite a friend</Link>
          </div>
          <div>
            <h3>Socials</h3>
            <Link href="">Discod</Link>
            <Link href="">Instagram</Link>
            <Link href="">Twitter</Link>
            <Link href="">Facebook</Link>
          </div>
        </div>
      </div>
      <hr className="max-lg:hidden" />
      <div className="flex flex-wrap justify-between lg:pt-9 pt-5 max-lg:flex-col-reverse ">
        <span className="font-semibold max-lg:text-xs">
          ©2022 MORENT. All rights reserved
        </span>
        <div className="flex lg:gap-14 max-lg:justify-between max-lg:w-full max-lg:mb-8 font-semibold max-lg:text-xs">
          <span>Privacy and Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </div>
  );
};

export default footer;
