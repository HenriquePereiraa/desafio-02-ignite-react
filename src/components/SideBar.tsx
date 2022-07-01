import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

import "../styles/sidebar.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  clickButton: (id: number) => void;
  gerenId: number;
}

export function SideBar({ clickButton, gerenId }: SideBarProps) {
  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => clickButton(genre.id)}
              selected={gerenId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
