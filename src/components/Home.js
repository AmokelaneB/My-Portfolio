import React from "react";
import image from "../desk.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Forest Road"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen p-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hi, Amo here..
        </h1>
      </section>
    </main>
  );
}
