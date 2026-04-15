import { useState } from "react";

const App = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    setLoading(true);
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    console.log(data);

    setLoading(false);
  }

  return (
    <div>
      <h1>CEP Finder</h1>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {loading && <p>Carregando...</p>}
    </div>
  );
};

export default App;
