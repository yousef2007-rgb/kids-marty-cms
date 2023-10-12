"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface FormData {
  email: string;
  password: string;
}

export default function index() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const payload: any = { email: formData.email, password: formData.password };
    try {
      await axios.post("/api/auth/login", payload);
      router.push("/");
    } catch (err: any) {
      setErrorMessage(err.response.data);
    }
  };

  return (
    <>
      <form
        className="p-5 rounded-md  shadow-2xl bg-white max-w-xs w-full mx-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-md font-semibold my-2 max-w-xs w-full mx-2">
          <label htmlFor="email">Email:</label>
          <input
            className="outline-none rounded-md  my-2 p-2 "
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col text-md font-semibold my-2">
          <label htmlFor="password">Password:</label>
          <input
            className="outline-none rounded-md  my-2 p-2 "
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className=" p-2 capitalize text-center w-full bg-primary rounded-md  text-white font-semibold -2 -primary hover:bg-white hover:text-primary"
          type="submit"
        >
          sign in
        </button>
      </form>
      {errorMessage ? (
        <div className="w-full bg-red-400 text-white p-2 rounded-md  my-2 max-w-xs mx-2">
          {errorMessage}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
