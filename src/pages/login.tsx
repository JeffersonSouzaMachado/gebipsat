import ipLogo from '../assets/logo_ip.png'
import { useLogin } from '../hooks/useLogin'
import '../styles/login.css'

export default function Login() {
    const { username, password, setUsername, setPassword, handleLogin } = useLogin()

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

                    <div className='bottom-button'>
                        <a href="#">
                            Preciso de<br />
                            Suporte<br />
                        </a>
                        <button type='submit'>Entrar</button>
                    </div>
                </form>

            </div>
        </>
    )
}

