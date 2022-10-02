import { useState, useEffect } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Joke from './components/Joke/Joke';

function App() {
  const [joke, setJoke] = useState('');
  const [jokeHistory, setJokeHistory] = useState([]);

  const getJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className='app'>
      <Header />
      <Joke joke={joke} />
      <Footer />
    </div>
  );
}

export default App;
