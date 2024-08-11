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

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("jwt")) {
      router.push("/");
    }
  }, []);

  const handleCreateAccount = () => {
    setLoader(false);
    GlobalApi.registerUser(username, email, password).then(
      (res) => {
        console.log(res.data.user);
        console.log(res.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt", res.data.jwt);
        toast(`Account created Sucessfully`);
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
    <div className="flex items-baseline justify-center mt-20">
      <div className="flex flex-col justify-center items-center p-10 border border-gray-200 bg-gray-100 rounded-lg">
        {/* logo */}
        <div className="flex items-center mb-10">
          <Image src="/main-logo.svg" width={70} height={70} alt="logo" />
          <h2 className="text-2xl">mStore</h2>
        </div>
        <h2 className="font-bold text-3xl mb-5">Create Your Account</h2>
        {/* input fields */}
        <div className="w-full flex flex-col gap-3">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
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
            disabled={!(username && email && password)}
            onClick={() => handleCreateAccount()}>
            {loader ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Create an Account"
            )}
          </Button>
          <Link href="/sign-in" className="hover:underline hover:text-blue-600">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
