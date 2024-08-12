"use client";

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const CancelPage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl font-bold text-red-600">
        Error: Payment not Done!!
      </h1>
      <p className="text-xl font-semibold ">Try Again !!!</p>
      <Button onClick={() => router.push("/")} className="text-lg">
        Go to Homepage
      </Button>
    </div>
  );
};

export default CancelPage;
