import './App.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/About/About'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
