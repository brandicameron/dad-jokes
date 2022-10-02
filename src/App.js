import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Joke from './components/Joke/Joke';
import JokeHistory from './components/JokeHistory/JokeHistory';

function App() {
  return (
    <div className='app'>
      <Header />
      <Joke />
      <Footer />
      <JokeHistory />
    </div>
  );
}

export default App;
