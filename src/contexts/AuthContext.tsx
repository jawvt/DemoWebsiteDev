import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '../types'

type AuthContextType = {
  user: User | null
  login: (email:string,password:string)=>Promise<void>
  register: (name:string,email:string,password:string)=>Promise<void>
  logout: ()=>void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function fakeId(){ return Math.random().toString(36).slice(2,9) }

export const AuthProvider: React.FC<{children:React.ReactNode}> = ({children})=>{
  const [user,setUser] = useState<User | null>(null)

  useEffect(()=>{
    const raw = localStorage.getItem('psk_auth')
    if(raw) setUser(JSON.parse(raw))
  },[])

  async function login(email:string,password:string){
    // demo: accept any non-empty credentials
    if(!email||!password) throw new Error('Invalid credentials')
    const u:User = { id: 'u_'+btoa(email).slice(0,6), name: email.split('@')[0], email }
    setUser(u); localStorage.setItem('psk_auth', JSON.stringify(u))
  }

  async function register(name:string,email:string,password:string){
    if(!name||!email||!password) throw new Error('Invalid data')
    const u:User = { id: fakeId(), name, email }
    setUser(u); localStorage.setItem('psk_auth', JSON.stringify(u))
  }

  function logout(){ setUser(null); localStorage.removeItem('psk_auth') }

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth(){ const ctx = useContext(AuthContext); if(!ctx) throw new Error('useAuth must be used inside AuthProvider'); return ctx }
