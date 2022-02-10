import './app.css'
import { useState } from 'react'
import logo from './logo.png'


function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const [mensagem, setMensagem] = useState('')


  function calcularImc(){
    const alt = altura / 100;
    const imc = peso / (alt*alt);

    if(imc < 18.6){
      setMensagem("Você está abaixo do peso! Seu IMC: " +imc.toFixed(2))
    }else if(imc >=18.6 && imc < 24.9){
      setMensagem("Peso ideal! Seu IMC: " +imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem("Você está levemente acima do peso! Seu IMC: " +imc.toFixed(2))
    }else if(imc > 34.9){
      setMensagem("Cuidado, obesidade! Seu IMC: " +imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>
        <img src={logo} alt='logoimc'/>
      </h1>
      <span>Vamos calcular seu índice de massa corporal.</span>

      <div className="area-input">
        <input
        type="text"
        placeholder="Peso em (kg) Ex: 80"
        value={peso}
        onChange={ (e) => setPeso(e.target.value) }
        />
         <input
        type="text"
        placeholder="Altura em (cm) Ex: 180"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularImc}>Calcular</button>

      </div>
      <h3>{mensagem}</h3>
    </div>
  );
}
export default App;
