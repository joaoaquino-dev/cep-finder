import { useState } from "react";

import type { Address } from "./types";

const App = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    setError("");
    const cleanCep = cep.replace("-", "");

    if (cleanCep.length < 1) {
      setError("Digite um CEP");
      return;
    }

    if (cleanCep.length !== 8) {
      setError("CEP deve ter 8 dígitos");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cleanCep}/json/`,
      );
      const data = await response.json();

      if (data.erro) {
        setError("CEP não encontrado");
        setLoading(false);
        return;
      }

      setAddress(data);

      setLoading(false);
    } catch (e) {
      setError("Algo deu errado, tente novamente.");
      setLoading(false);
      return;
    }
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
      {error && <p>{error}</p>}
      {address && (
        <div>
          <ul>
            <li>{address.logradouro}</li>
            <li>{address.bairro}</li>
            <li>{address.localidade}</li>
            <li>{address.uf}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
