import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { getSubmissions, getDeclarations } from '../lib/storage'

export default function Dashboard(){
  const { user, logout } = useAuth()
  const submissions = getSubmissions()
  const declarations = getDeclarations()
  const weeksPlayed = new Set(submissions.map(s=>s.week)).size
  const totalStrokes = submissions.reduce((a,b)=> a + b.holes.reduce((x,y)=>x+y,0), 0)

  // compute rank roughly by total
  const rank = '—'

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold">Welcome, {user?.name}</h3>
        <div className="text-sm text-gray-600 mt-2">Current Week: <strong>1</strong></div>
        <div className="mt-4 space-y-2 text-sm">
          <div>Weeks played: <strong>{weeksPlayed}</strong></div>
          <div>Total strokes: <strong>{totalStrokes}</strong></div>
          <div>Current rank: <strong>{rank}</strong></div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Link to="/declare" className="w-full text-center py-2 bg-pskGreen text-white rounded">Declare Round</Link>
          <Link to="/submit" className="w-full text-center py-2 border border-pskGreen text-pskGreen rounded">Submit Score</Link>
          <Link to="/leaderboard" className="w-full text-center py-2 bg-gray-100 rounded">View Leaderboard</Link>
        </div>
        <button onClick={logout} className="mt-3 text-sm text-red-600">Log out</button>
      </div>

      <div className="md:col-span-2 bg-white p-6 rounded shadow">
        <h4 className="font-semibold">Quick actions</h4>
        <p className="text-sm text-gray-600 mt-2">Declare before you play, then submit hole-by-hole scores before the weekly deadline.</p>
      </div>
    </div>
  )
}
