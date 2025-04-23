
import ipLogo from './assets/logo_ip.png'
import { useState } from 'react'
import { mockedLogin } from './services/auth_service.ts';
import './App.css'


function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = mockedLogin(username, password)

    if (isValid) alert('Login Aprovado, redirecionando...')
    else alert('Usuário ou senha incorretos')
  }



  return (
    <>
      <div>
        <img src={ipLogo} className="logo ip" alt="Logo da Igreja Presbiteriana" />
      </div>
      <h2 className='head-title'>Gerenciador Eletronico do Boletim IPSat</h2>


      <div className='container'>
        <form onSubmit={handleLogin}>
          <div className='form-row'>
            <label htmlFor="username" className='form-title'>Usuário</label>
            <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className='form-row'>
            <label htmlFor="password" className='form-title'>Senha</label>
            <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type='submit'>Entrar</button>
        </form>

      </div>


    </>
  )
}

export default App
