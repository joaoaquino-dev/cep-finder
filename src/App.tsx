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
    <div className="flex justify-center items-center flex-col bg-gray-950 min-h-screen">
      <h1 className="font-bold text-4xl mb-6 text-green-500">CEP Finder</h1>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        className="flex bg-black text-white rounded-md p-2 mt-4 w-80 outline-none border border-gray-700 placeholder:text-gray-500"
      />
      <button
        onClick={handleSearch}
        className="cursor-pointer bg-yellow-300 text-gray-900 rounded-full px-4 py-2 mt-4 w-80"
      >
        Buscar
      </button>
      {loading && <p className="text-yellow-300 mt-4">Carregando...</p>}
      {error && <p className="text-red-400 mt-4">{error}</p>}
      {address && (
        <div className="bg-gray-800 rounded-lg p-4 mt-4 w-80">
          <ul className="text-white space-y-2">
            <li>
              <span className="text-green-400">Rua:</span> {address.logradouro}
            </li>
            <li>
              <span className="text-green-400">Bairro:</span> {address.bairro}
            </li>
            <li>
              <span className="text-green-400">Cidade:</span>{" "}
              {address.localidade}
            </li>
            <li>
              <span className="text-green-400">UF:</span> {address.uf}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
