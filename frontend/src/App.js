import './App.css';
import FetchData from './components/FetchData'
import FormData from './components/FormData';

function App() {
  return (
    <div className="App">
      <FetchData keyId={process.env.REACT_APP_PRIVATE_KEY} />
      <FormData keyId={process.env.REACT_APP_PRIVATE_KEY} />
    </div>
  );
}

export default App;
