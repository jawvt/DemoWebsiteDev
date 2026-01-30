import { Submission, Declaration } from '../types'

export const SAMPLE_DECLARATIONS: Declaration[] = [
  { playerId: 'u1', playerName: 'Alex', week:1, declaredAt: new Date().toISOString() },
  { playerId: 'u2', playerName: 'Jeb', week:1, declaredAt: new Date().toISOString() }
]

export const SAMPLE_SUBMISSIONS: Submission[] = [
  { playerId:'u1', playerName:'Alex', week:1, holes:[4,5,4,4,3,4,4,5,4], submittedAt: new Date().toISOString() },
  { playerId:'u2', playerName:'Jeb', week:1, holes:[5,5,5,5,4,5,4,6,5], submittedAt: new Date().toISOString() }
]
