import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';

function App() {
  return (
    <div className="main-container">
      {/* <h1>language cards project</h1> */}
      <Header />
      <Card />
    </div>
  );
}

export default App;
