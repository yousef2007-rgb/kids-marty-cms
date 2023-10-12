import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center flex-1 h-full rounded-md  shadow-md bg-white">
      {" "}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our CMS</h1>
        <p className="text-lg text-gray-700 mb-8">
          Start managing your content with ease!
        </p>
        <Link
          href="/products"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
