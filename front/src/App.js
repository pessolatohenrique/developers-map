import React, { useEffect, useState } from "react";
import "./App.css";
import "./global.css";
import "./Sidebar.css";
import "./Main.css";
import api from "./services/api";
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await api.get("/devs");
    setDevs(response.data);
  }

  async function handleSubmit(data) {
    setDevs([...devs, data]);
  }

  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSubmit} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
