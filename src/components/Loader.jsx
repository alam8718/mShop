import { Loader2 } from "lucide-react";
import React from "react";

function Loader() {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center ">
      <Loader2 className="w-[100px] h-[100px] text-primary animate-spin" />
    </div>
  );
}

export default Loader;
