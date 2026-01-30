import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className="grid gap-8 md:grid-cols-2 items-center">
      <section className="p-6">
        <h2 className="text-3xl font-bold text-pskGreen">PSK Golf League</h2>
        <p className="mt-4 text-gray-700">A casual but competitive 9‑hole league for consistency, fair play, and improvement.</p>
        <div className="mt-6 flex gap-3">
          <Link to="/login" className="px-5 py-3 rounded-md bg-pskGreen text-white">Log In</Link>
          <Link to="/register" className="px-5 py-3 rounded-md border border-pskGreen text-pskGreen">Create Account</Link>
        </div>
      </section>
      <section className="p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold">Season</h3>
          <p className="text-sm text-gray-600">6 weeks — Virginia Tech 9‑Hole</p>
          <div className="mt-4">
            <h4 className="font-medium">How it works</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
              <li>Declare before teeing off</li>
              <li>Submit hole-by-hole scores</li>
              <li>Lowest cumulative strokes wins</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
