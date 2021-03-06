import React, { useState } from 'react';
import axios from 'axios';

export default function Tabs({ setData }) {
  const [query, setQuery] = useState('');
  const [personaje, setPersonajes] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=6ac743f183f919b6880c013e82a88782`;
    const res = await axios.get(url);
    console.log(res);
    setPersonajes(res.data.data.results);
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Busca un personaje
        </label>
        <input
          className="input"
          id="Buscador"
          type="text"
          name="query"
          placeholder="ej: Alpha Flight"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Buscar
        </button>
      </form>
      {personaje.length > 0 && setData(personaje)}
    </>
  );
}
