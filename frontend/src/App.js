import { useState } from 'react';
import './App.css';
import FetchData from './components/FetchData'
import FormData from './components/FormData';

function App() {

  const [formField, setFormField] = useState({
    "Student Name": "",
    "Gender": "",
    "Class Level": "",
    "Home State": "",
    "Major": "",
    "Extracurricular Activity": "",
  });
  const [fetchData, setFetchData] = useState([])
  const [isLoad, setIsLoad] = useState(0)
  const [msg, setMsg] = useState("")
  const [length, setLength] = useState(1)
  const [isRefress, setIsRefress] = useState(false)
  const SHEET_ID = "1Q-B2btkfurhJUQriLhJaagiDJB5foh-hUjToX21yWXE"


  return (
    <div className="App">
      <FetchData
        REACT_APP_PRIVATE_KEY={process.env.REACT_APP_PRIVATE_KEY}
        SHEET_ID={SHEET_ID}
        fetchData={fetchData}
        setFetchData={setFetchData}
        isLoad={isLoad}
        setIsLoad={setIsLoad}
        msg={msg}
        setMsg={setMsg}
        isRefress={isRefress}
        setLength={setLength}

      />
      <FormData
        REACT_APP_PRIVATE_KEY={process.env.REACT_APP_PRIVATE_KEY}
        SHEET_ID={SHEET_ID}
        formField={formField}
        setFormField={setFormField}
        isRefress={isRefress}
        setIsRefress={setIsRefress}
        length={length}
      />
    </div>
  );
}

export default App;
