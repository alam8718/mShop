"use client";
import GlobalApi from "@/_utils/GlobalApi";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Loader2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {toast} from "sonner";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("jwt")) {
      router.push("/");
    }
  }, []);

  const handleSignIn = () => {
    setLoader(false);
    GlobalApi.signInUser(email, password).then(
      (res) => {
        // console.log(res.data.user);
        // console.log(res.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt", res.data.jwt);
        toast(`Login Sucessfully`);
        router.push("/");
        setLoader(true);
      },
      (error) => {
        toast(`ERROR: ${error?.response?.data?.error?.message}`);
        setLoader(false);
      }
    );
  };

  return (
    <div className=" flex items-baseline justify-center mt-20">
      <div className="flex flex-col justify-center items-center p-10 border border-gray-200 bg-gray-100 rounded-lg">
        {/* logo */}
        <div className="flex items-center mb-10">
          <Image src="/main-logo.svg" width={70} height={70} alt="logo" />
          <h2 className="text-2xl">mStore</h2>
        </div>
        <h2 className="font-bold text-3xl mb-5">Login</h2>
        {/* input fields */}
        <div className="w-full flex flex-col gap-3">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <Button
            disabled={!(email && password)}
            onClick={() => handleSignIn()}>
            {loader ? <Loader2 className="animate-spin" /> : "Login"}
          </Button>
          <Link
            href="/create-account"
            className="hover:underline hover:text-blue-600">
            Don't have an Account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
