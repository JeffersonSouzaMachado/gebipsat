import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockedLogin } from '../services/auth_service'

export function useLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const isValid = mockedLogin(username, password)

    if (isValid) navigate('/home')
    else alert('Usuário ou senha incorretos')
  }

  return {
    username,
    password,
    setUsername,
    setPassword,
    handleLogin
  }
}
