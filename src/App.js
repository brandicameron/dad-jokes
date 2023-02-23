import { useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Joke from './components/Joke/Joke';
import JokeHistory from './components/JokeHistory/JokeHistory';

import { useGetJoke } from './hooks/useGetJoke';

function App() {
  const [showHistory, setShowHistory] = useState(false);
  const { joke, jokeHistory, getJoke, handleClearHistory } = useGetJoke();

  const handleShowHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className='app'>
      <Header handleShowHistory={handleShowHistory} joke={joke} />
      <Joke joke={joke} />
      <Footer getJoke={getJoke} />
      <JokeHistory
        jokeHistory={jokeHistory}
        showHistory={showHistory}
        handleShowHistory={handleShowHistory}
        handleClearHistory={handleClearHistory}
      />
    </div>
  );
}

export default App;
