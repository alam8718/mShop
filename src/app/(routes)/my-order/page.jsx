"use client";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";

function MyOrder() {
  const jwt = sessionStorage.getItem("jwt");
  const router = useRouter();

  useEffect(() => {
    if (!jwt) return router.push("/");
  }, []);

  return (
    <div>
      <div>osdnfo</div>
    </div>
  );
}

export default MyOrder;
