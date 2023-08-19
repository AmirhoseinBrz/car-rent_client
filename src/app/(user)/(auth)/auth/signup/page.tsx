"use client";
import Input from "@/common/input";
import { register } from "@/services/UserService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const router = useRouter();

  const formHanlder = async (e) => {
    e.preventDefault();

    const res = await register(formData);
    if (res.status === 200) {
      router.push("/");
    }
  };

  return (
    <div className="p-8 bg-white rounded-btn shadow-lg">
      <div className="text-center">
        <h1 className="font-bold text-2xl mb-2">Create your account</h1>
        <span className="text-secondary-400 font-medium block">
          to continue in website
        </span>
        <span className="">have a account ?! </span>
        <Link href="/auth/login" className="font-semibold underline">
          Login
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
            labelTitle={"Fullname"}
            labelClassName="flex flex-1 flex-col-reverse font-medium mb-4"
            inputClassName="mt-2 border-2 px-3 py-2 border-secondary-200 rounded py-1"
            name={"fullName"}
            value={formData.fullName}
            onchange={handleChange}
          />
          <Input
            type={"text"}
            labelTitle={"Email address"}
            labelClassName="flex flex-1 flex-col-reverse font-medium mb-4"
            inputClassName={
              "mt-2 border-2 px-3 py-2 border-secondary-200 rounded py-1"
            }
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

export default CreateAccount;
