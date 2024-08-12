"use client";

import {Button} from "@/components/ui/button";
import {CheckCircle2} from "lucide-react";
import {useRouter} from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-3">
      <CheckCircle2 className="w-24 h-24 text-primary" />
      <h1 className="text-3xl font-bold text-primary">Payment Successful!</h1>
      <p className="text-xl font-semibold ">Thank you for your purchase.</p>
      <Button onClick={() => router.push("/my-order")} className="text-lg">
        Track your Order
      </Button>
    </div>
  );
};

export default SuccessPage;
