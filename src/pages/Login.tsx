import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login(){
  const { login } = useAuth()
  const nav = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState<string | null>(null)

  async function handle(e:React.FormEvent){
    e.preventDefault(); setError(null)
    try{ await login(email,password); nav('/dashboard') }catch(err:any){ setError(err.message||'Login failed') }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Log In</h2>
      <form onSubmit={handle} className="bg-white p-6 rounded shadow">
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <label className="block text-sm">Email</label>
        <input className="w-full p-2 border rounded mb-3" value={email} onChange={e=>setEmail(e.target.value)} />
        <label className="block text-sm">Password</label>
        <input type="password" className="w-full p-2 border rounded mb-3" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-pskGreen text-white p-2 rounded">Log In</button>
        <div className="text-sm mt-3">No account? <Link to="/register" className="text-pskGreen">Create one</Link></div>
      </form>
    </div>
  )
}
