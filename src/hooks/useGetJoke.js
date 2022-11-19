import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

export function useGetJoke() {
  const [joke, setJoke] = useState('');
  const [jokeHistory, setJokeHistory] = useState(
    JSON.parse(localStorage.getItem('jokeHistory') || '[]')
  );

  const getJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong.');
      }

      const data = await response.json();

      // Prevents a joke that's really long, which overflows the page on mobile (I don't want the "More" button falling below the fold)
      if (data.joke.length > 80) {
        getJoke();
      }

      if (data.joke.length <= 80) {
        setJoke(data.joke);
      }

      let newData = { id: uuidv4(), joke: data.joke };
      setJokeHistory((prev) => [...prev, newData]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  useEffect(() => {
    localStorage.setItem('jokeHistory', JSON.stringify(jokeHistory));
  }, [jokeHistory]);

  return { joke, jokeHistory, getJoke };
}
