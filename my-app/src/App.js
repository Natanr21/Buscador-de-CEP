import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './style.css';
import api from './services/api';


function App() {
  
  const [input, setInput] = useState(''); 
  const [cep, setCep] = useState('');
  
  
  async function handleSearch() {
      
    if(input === ''){
      alert('Preencha o campo abaixo!')
      return;
    }

    try{
      const response = await api.get(input + "/json");
      setCep(response.data);

    }catch{
      alert('cep errado')
    }

  };


  return (
    <div className="container">
      <h1 className="title">Buscador de Cep</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o CEP"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button className="search" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>
      <main className="main">
        <ul className="info">
          <li>Cep: {cep.cep}</li>
          <li>Estado: {cep.uf}</li>
          <li>Cidade: {cep.localidade}</li>
        </ul>
      </main>
    </div>




  );
}

export default App;
