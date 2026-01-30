import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { addDeclaration, getDeclarations } from '../lib/storage'

const WEEKS = 6

export default function Declare(){
  const { user } = useAuth()
  const [week,setWeek] = useState<number>(1)
  const [confirmed,setConfirmed] = useState(false)
  const declarations = getDeclarations()
  const already = declarations.find(d=>d.playerId===user?.id && d.week===week)

  function submit(){
    if(!user) return
    if(already) return
    addDeclaration({ playerId:user.id, playerName:user.name, week, declaredAt: new Date().toISOString() })
    alert('Declared for week '+week)
  }

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Declare Weekly Round</h2>
      <div className="bg-white p-6 rounded shadow">
        <label className="block text-sm">Week</label>
        <select className="w-full p-2 border rounded mb-3" value={week} onChange={e=>setWeek(Number(e.target.value))}>
          {Array.from({length:WEEKS}).map((_,i)=>(<option key={i} value={i+1}>Week {i+1}</option>))}
        </select>
        <label className="flex items-center gap-2"><input type="checkbox" checked={confirmed} onChange={e=>setConfirmed(e.target.checked)} /> I am declaring my official round</label>
        <button disabled={!confirmed || !!already} onClick={submit} className="mt-4 w-full py-2 bg-pskGreen text-white rounded disabled:opacity-50">Declare</button>
        {already && <div className="text-sm text-gray-600 mt-2">You already declared this week.</div>}
      </div>
    </div>
  )
}
