"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setLoading(false);
      setData(null);
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <div className="logo">
        <Image
          src="/rick-and-morty.png"
          alt="rick and morty logo"
          width={500}
          height={200}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div>
        <form className="search">
          <input
            type="search"
            placeholder="Find a character"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div>
        <h3>List of characters</h3>
      </div>
      <div className="container">
        {data && data.results ? (
          <div className="grid">
            {data.results.map((character) => (
              <div className="card" key={character.id}>
                <div className="card-content">
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={200}
                    height={200}
                    className="profilePic"
                  />
                  <div className="charName">{character.name}</div>
                  <div className="charSpecies">
                    <span className="green-dot">🟢</span>
                    {character.species}
                  </div>
                  <div className="charOrigin">{character.origin.name}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </main>
  );
}
