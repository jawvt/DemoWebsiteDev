export type User = { id: string; name: string; email: string }
export type Submission = { playerId: string; playerName: string; week: number; holes: number[]; photo?: string; submittedAt: string }
export type Declaration = { playerId: string; playerName: string; week: number; declaredAt: string }
