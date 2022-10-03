import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

export function useGetJoke() {
  const [joke, setJoke] = useState('');
  const [jokeHistory, setJokeHistory] = useState(
    JSON.parse(localStorage.getItem('jokeHistory') || '[]')
  );

  const getJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();

    setJoke(data.joke);
    let newData = { id: uuidv4(), joke: data.joke };
    setJokeHistory((prev) => [...prev, newData]);
  };

  useEffect(() => {
    getJoke();
  }, []);

  useEffect(() => {
    localStorage.setItem('jokeHistory', JSON.stringify(jokeHistory));
  }, [jokeHistory]);

  return { joke, jokeHistory, getJoke };
}
