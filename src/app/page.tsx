"use client";

import {
  useState,
  useEffect,
  SetStateAction,
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
// import { BiSearchAlt2 } from "react-icons/fa";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State variable for search query

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setLoading(false); // No search query, so set loading to false
      setData(null); // Clear previous data
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
  }, [searchQuery]); // useEffect depends on searchQuery

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <div className="logo">
        <Image
          src="/rick-and-morty.png"
          alt="rick and morty logo"
          width={600}
          height={200}
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
          {/* <BiSearchAlt2 /> */}
        </form>
      </div>
      <div>
        <h3>List of characters</h3>
      </div>
      <div className="container">
        {data && data.results ? (
          <div className="grid">
            {data.results.map(
              (character: {
                id: Key | null | undefined;
                image: string | StaticImport;
                name:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
                species:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
                origin: {
                  name:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                };
              }) => (
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
              )
            )}
          </div>
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </main>
  );
}
