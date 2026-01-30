import { Submission, Declaration } from '../types'

const KEY = 'psk_golf_data'

type Store = { submissions: Submission[]; declarations: Declaration[] }

export function loadStore(): Store {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null') || { submissions: [], declarations: [] } }
  catch { return { submissions: [], declarations: [] } }
}

export function saveStore(s: Store) { localStorage.setItem(KEY, JSON.stringify(s)) }

export function addDeclaration(d: Declaration){ const s = loadStore(); s.declarations.push(d); saveStore(s) }
export function addSubmission(sub: Submission){ const s = loadStore(); // remove existing for player-week
  s.submissions = s.submissions.filter(x=> !(x.playerId===sub.playerId && x.week===sub.week)); s.submissions.push(sub); saveStore(s)
}

export function getDeclarations(){ return loadStore().declarations }
export function getSubmissions(){ return loadStore().submissions }
