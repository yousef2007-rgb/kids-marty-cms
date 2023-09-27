"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface FormData {
  email: string;
  password: string;
}

const signin = async (email: string, password: string) => {
  const data = await axios.post(
    "http://localhost:8000/api/auth/?isAdmin=true",
    {
      email,
      password,
    }
  );

  return data;
};

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
    try {
      const res = await signin(formData.email, formData.password);
      window.sessionStorage.setItem("jwt", res.data);
      router.push("/");
    } catch (err: any) {
      setErrorMessage(err.response.data);
    }
  };

  return (
    <>
      <form
        className="p-5 rounded-md shadow-2xl bg-white max-w-xs w-full mx-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-md font-semibold my-2 max-w-xs w-full mx-2">
          <label htmlFor="email">Email:</label>
          <input
            className="outline-none rounded-md my-2 p-2 border"
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
            className="outline-none rounded-md my-2 p-2 border"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className=" p-2 capitalize text-center w-full bg-primary rounded-md text-white font-semibold border-2 border-primary hover:bg-white hover:text-primary"
          type="submit"
        >
          sign in
        </button>
      </form>
      {errorMessage ? (
        <div className="w-full bg-red-400 text-white p-2 rounded-md my-2 max-w-xs mx-2">
          {errorMessage}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
