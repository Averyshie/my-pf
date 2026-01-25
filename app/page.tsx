import Image from "next/image";

export default function Home() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Hello Tailwind!
      </h1>
      <p className="text-lg">
        Your Next.js + React + Tailwind setup is working.
      </p>
    </main>
  );
}
