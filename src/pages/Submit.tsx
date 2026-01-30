import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { addSubmission, getDeclarations, getSubmissions } from '../lib/storage'

const WEEKS = 6

export default function Submit(){
  const { user } = useAuth()
  const [week,setWeek] = useState<number>(1)
  const [holes,setHoles] = useState<number[]>(Array(9).fill(0))
  const [photo,setPhoto] = useState<string | null>(null)
  const declarations = getDeclarations()
  const submissions = getSubmissions()
  const declared = declarations.find(d=>d.playerId===user?.id && d.week===week)
  const existing = submissions.find(s=>s.playerId===user?.id && s.week===week)

  useEffect(()=>{ if(existing) setHoles(existing.holes) },[existing?.submittedAt])

  function setHole(i:number,v:string){ const copy=[...holes]; copy[i]=Number(v)||0; setHoles(copy) }
  const total = holes.reduce((a,b)=>a+b,0)

  function handleFile(e:React.ChangeEvent<HTMLInputElement>){ const f = e.target.files?.[0]; if(!f) return; const r=new FileReader(); r.onload=()=> setPhoto(String(r.result)); r.readAsDataURL(f) }

  function submit(){
    if(!user) return; if(!declared){ alert('You must declare first'); return }
    if(holes.some(h=>h<=0)){ alert('Enter all 9 hole scores'); return }
    addSubmission({ playerId:user.id, playerName:user.name, week, holes, photo: photo||undefined, submittedAt: new Date().toISOString() })
    alert('Score submitted')
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">Submit Score</h2>
      <div className="bg-white p-6 rounded shadow">
        <label className="block text-sm">Week</label>
        <select className="w-full p-2 border rounded mb-3" value={week} onChange={e=>setWeek(Number(e.target.value))}>
          {Array.from({length:WEEKS}).map((_,i)=>(<option key={i} value={i+1}>Week {i+1}</option>))}
        </select>
        {!declared && <div className="text-sm text-red-600 mb-3">You must declare this week before submitting.</div>}
        <div className="grid grid-cols-3 gap-2">
          {holes.map((h,i)=>(
            <div key={i}>
              <label className="text-sm">Hole {i+1}</label>
              <input type="number" min={1} max={15} value={h||''} onChange={e=>setHole(i,e.target.value)} className="w-full p-2 border rounded" />
            </div>
          ))}
        </div>
        <div className="mt-3">Total: <strong>{total}</strong></div>
        <label className="block mt-3">Optional: upload scorecard</label>
        <input type="file" accept="image/*" onChange={handleFile} />
        {photo && <img src={photo} className="mt-2 max-h-48" />}
        <button onClick={submit} className="mt-4 w-full py-2 bg-pskGreen text-white rounded">Submit Score</button>
      </div>
    </div>
  )
}
