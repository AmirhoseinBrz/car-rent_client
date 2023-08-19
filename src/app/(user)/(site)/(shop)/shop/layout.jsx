import SiderBar from "./SiderBar";

export default function RootLayout({ children }) {
  return (
    <div className="flex ">
      <div className="flex-1 bg-white p-8 max-lg:hidden">
        <SiderBar />
      </div>
      <div className="flex-[4] min-w-0">{children}</div>
    </div>
  );
}
