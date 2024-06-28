import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who enters the dreams of others to steal their secrets.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaH7d9_Zaw5j-8mNbUZoZgYYvhni5vK3fsQ&s',
      rating: 4.5,
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdi40BoReE2uZIkW--jmv7vAF8NjXM0YEFdLKmRZs9mm4_0-PrE8rA2j7xQ&s',
      rating: 4.8,
    },
    // Add more initial movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (title) => {
    setTitleFilter(title);
  };

  const handleRateChange = (rate) => {
    setRateFilter(rate);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (rateFilter === '' || movie.rating >= parseFloat(rateFilter))
    );
  });

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <Filter
        title={titleFilter}
        rate={rateFilter}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
      <div className="add-movie">
        <h2>Add New Movie</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const description = e.target.description.value;
          const posterURL = e.target.posterURL.value;
          const rating = parseFloat(e.target.rating.value);
          addMovie({ title, description, posterURL, rating });
          e.target.reset();
        }}>
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="url" name="posterURL" placeholder="Poster URL" required />
          <input type="number" name="rating" placeholder="Rating" step="0.1" min="0" max="10" required />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default App;
