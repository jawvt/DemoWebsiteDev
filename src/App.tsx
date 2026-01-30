import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Declare from './pages/Declare'
import Submit from './pages/Submit'
import Leaderboard from './pages/Leaderboard'
import Rules from './pages/Rules'
import Protected from './components/Protected'

export default function App(){
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-pskGreen text-white flex items-center justify-center font-bold">PSK</div>
              <div>
                <h1 className="text-lg font-semibold">PSK Golf League</h1>
                <div className="text-sm text-gray-500">Casual but competitive</div>
              </div>
            </Link>
            <nav className="flex items-center gap-3">
              <Link to="/rules" className="text-sm text-gray-600 hover:text-pskGreen">Rules</Link>
              <Link to="/leaderboard" className="text-sm text-gray-600 hover:text-pskGreen">Leaderboard</Link>
              <Link to="/login" className="px-3 py-1 rounded bg-pskGreen text-white text-sm">Log In</Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Protected><Dashboard/></Protected>} />
            <Route path="/declare" element={<Protected><Declare/></Protected>} />
            <Route path="/submit" element={<Protected><Submit/></Protected>} />
            <Route path="/leaderboard" element={<Leaderboard/>} />
            <Route path="/rules" element={<Rules/>} />
          </Routes>
        </main>

        <footer className="text-center text-sm text-gray-500 p-6">© PSK Golf League</footer>
      </div>
    </AuthProvider>
  )
}
