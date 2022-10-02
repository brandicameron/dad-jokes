import { useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Joke from './components/Joke/Joke';
import JokeHistory from './components/JokeHistory/JokeHistory';

function App() {
  const [showHistory, setShowHistory] = useState(false);

  const handleShowHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className='app'>
      <Header handleShowHistory={handleShowHistory} />
      <Joke />
      <Footer />
      <JokeHistory showHistory={showHistory} handleShowHistory={handleShowHistory} />
    </div>
  );
}

export default App;
