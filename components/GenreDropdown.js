import React from 'react';

const GenreDropdown = ({ genres, selectedGenre, onSelectGenre }) => {
  return (
    <select value={selectedGenre} onChange={(e) => onSelectGenre(e.target.value)}>
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default GenreDropdown;