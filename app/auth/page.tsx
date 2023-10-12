import axios from "axios";
import { cookies } from "next/headers";
import Signout from "./Signout";

interface User {
  username: string;
  email: string;
  phone?: string;
  city:
  | "Amman"
  | "Zarqa"
  | "Irbid"
  | "Jerash"
  | "Aqaba"
  | "Ajloun"
  | "Alsalt"
  | "Almafraq"
  | "Altafila"
  | "Alkarek"
  | "Maan"
  | "Madaba"
  | "Alagwar";
  location: string;
  age?: number;
}

const getData = async () => {
  const token: any = cookies().get("token");

  const data = await axios.get("http://localhost:8000/api/users/me", {
    headers: {
      "x-web-token": token.value,
    },
  });

  return data;
};

export default async function Home() {
  const res = await getData();
  const data: User = res.data;

  return (
    <main className="flex bg-white rounded-md p-5 font-semibold flex-col flex-1 w-full">
          <p className="my-2 font-sans">Name: {data?.username}</p>
          <p className="my-2">Email: {data?.email}</p>
          <p className="my-2">city: {data?.city}</p>
          <p className="my-2">location: {data?.location}</p>
          <p className="my-2">phone: {data?.phone}</p>
          <Signout />
    </main>
  );
}
