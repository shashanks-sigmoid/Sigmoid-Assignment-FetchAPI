import './App.css';
import FetchData from './components/FetchData'

function App() {
  return (
    <div className="App">
      {console.log(process.env.REACT_APP_PRIVATE_KEY)}
      <FetchData keyId={process.env.REACT_APP_PRIVATE_KEY} />
    </div>
  );
}

export default App;
