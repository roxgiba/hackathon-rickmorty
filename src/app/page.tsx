"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="Logo">
        <h1>Rick y Morty</h1>

        <form className="search">
          <input type="search" placeholder="Find a character" />
        </form>
      </div>
      <div className="container">
        <h3>List of characters</h3>
        <div></div>
      </div>
    </main>
  );
}
