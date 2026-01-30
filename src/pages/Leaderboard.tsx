import React from 'react'
import { getSubmissions } from '../lib/storage'

function computeTotals(submissions:any[]){
  const players = new Map<string, { name:string; weeks:Record<number,number>; total:number }>()
  for(const s of submissions){
    if(!players.has(s.playerId)) players.set(s.playerId,{ name: s.playerName, weeks:{}, total:0 })
    players.get(s.playerId)!.weeks[s.week] = s.holes.reduce((a:number,b:number)=>a+b,0)
  }
  const res = []
  for(const [id,v] of players){
    let total = 0
    for(let w=1;w<=6;w++){ total += v.weeks[w] ?? 63 }
    res.push({ id, name: v.name, total, weeks: v.weeks })
  }
  return res.sort((a,b)=>a.total-b.total)
}

export default function Leaderboard(){
  const submissions = getSubmissions()
  const rows = computeTotals(submissions)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      <div className="bg-white rounded shadow overflow-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Player</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={r.id} className="border-t">
                <td className="p-3">{i+1}</td>
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
