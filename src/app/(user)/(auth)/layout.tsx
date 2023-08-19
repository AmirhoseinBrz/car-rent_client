import { ReactComponentChild } from "@/interfaces/interfaces";

function layout({ children } : ReactComponentChild) {
  return (
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 min-w-[400px]">
      {children}
    </div>
  );
}

export default layout;
