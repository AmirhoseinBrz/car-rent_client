"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/common/input";
import { login } from "@/services/UserService";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";

function LoginAccount() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const router = useRouter();

  const { isLoading, mutateAsync } = useMutation({ mutationFn: login });

  const formHanlder = async (e) => {
    e.preventDefault();

    const res = await mutateAsync(formData);
    if (res.status === 200) {
      window.location.href = "/";
    }
  };

  return (
    <div className="p-8 bg-white rounded-btn shadow-lg">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-2">Login to your account</h1>
        <span className="text-secondary-400 font-medium block">
          to continue in website!
        </span>
        <span className="font-medium">havent a account ?! </span>
        <Link href="/auth/signup" className="font-semibold underline">
          Sign Up
        </Link>
      </div>
      <div className="flex items-center gap-4 my-8">
        <hr className="w-full h-0.5 bg-secondary-200" />
        <span className="font-semibold">or</span>
        <hr className="w-full h-0.5 bg-secondary-200" />
      </div>
      <div>
        <form onSubmit={formHanlder}>
          <Input
            type={"text"}
            labelTitle={"Email address"}
            labelClassName="flex flex-1 flex-col-reverse font-medium mb-4"
            inputClassName="mt-2 border-2 px-3 py-2 border-secondary-200 rounded py-1"
            name={"email"}
            value={formData.email}
            onchange={handleChange}
          />
          <Input
            type={"text"}
            labelTitle={"Password"}
            labelClassName="flex flex-1 flex-col-reverse font-medium mb-4"
            inputClassName="mt-2 border-2 px-3 py-2 border-secondary-200 rounded py-1"
            name={"password"}
            value={formData.password}
            onchange={handleChange}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="bg-primary-500 text-white rounded-btn w-full py-3 font-bold"
          >
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginAccount;
