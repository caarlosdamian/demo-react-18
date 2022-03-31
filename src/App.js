import "./App.css";
import { Home } from "./pages/home/Home";
import { Suspense, useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null)


useEffect(() => {
  const fetchInfo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const res = await response.json();
    setData(res)
  };
  fetchInfo()
}, []);


  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <Home  data={data}/>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
