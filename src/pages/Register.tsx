import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Register(){
  const { register } = useAuth()
  const nav = useNavigate()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirm,setConfirm] = useState('')
  const [error,setError] = useState<string | null>(null)

  async function handle(e:React.FormEvent){
    e.preventDefault(); setError(null)
    if(password!==confirm){ setError('Passwords do not match'); return }
    try{ await register(name,email,password); nav('/dashboard') }catch(err:any){ setError(err.message||'Registration failed') }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
      <form onSubmit={handle} className="bg-white p-6 rounded shadow">
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <label className="block text-sm">Name</label>
        <input className="w-full p-2 border rounded mb-3" value={name} onChange={e=>setName(e.target.value)} />
        <label className="block text-sm">Email</label>
        <input className="w-full p-2 border rounded mb-3" value={email} onChange={e=>setEmail(e.target.value)} />
        <label className="block text-sm">Password</label>
        <input type="password" className="w-full p-2 border rounded mb-3" value={password} onChange={e=>setPassword(e.target.value)} />
        <label className="block text-sm">Confirm password</label>
        <input type="password" className="w-full p-2 border rounded mb-3" value={confirm} onChange={e=>setConfirm(e.target.value)} />
        <button className="w-full bg-pskGreen text-white p-2 rounded">Create Account</button>
      </form>
    </div>
  )
}
