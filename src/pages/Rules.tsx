import React from 'react'

const rules = `
1. League Purpose
The PSK Golf League is a casual but competitive weekly golf league designed to promote consistency, fair play, and improvement. The league emphasizes accountability, simplicity, and integrity, while serving as a pilot for a future golf league platform.

2. League Structure
Season Length: 6 weeks
Players: Up to 20
Course: Virginia Tech 9-Hole Campus Course (same course every week)
Rounds: One 9-hole round per player per week
Play Window: Saturday 12:00 AM – Sunday 11:59 PM
Scoring Format: Stroke play
Winner: Lowest cumulative score after 6 weeks

4. Weekly Round Declaration
Players must declare their weekly round before playing
The round must be logged in the app prior to teeing off
Only declared rounds are eligible for submission
One declared round per player per week

5. Score Submission Rules
Scores must be submitted by Sunday at 11:59 PM
Late submissions are not accepted
Hole-by-hole scores (holes 1–9) are required
Optional scorecard photo upload (encouraged for transparency)
Once submitted, scores are locked unless edited by a commissioner

6. Scoring & Standings
Weekly score = total strokes across 9 holes
Season score = sum of all weekly scores
Leaderboard rankings are based on lowest total strokes
No handicaps are used during Season 1

7. Missed Round Policy
A missed round results in a penalty score of 63 strokes
(More than two weeks missed => prize ineligible)

8. Rules of Play & Integrity
Play the ball as it lies
Count every stroke
No mulligans, gimmies, or practice balls
Standard golf rules apply unless otherwise stated
Weather delays are not grounds for exceptions (players have the full week to play)

9. Tie-Breakers
Lowest single-round score during the season
Lowest score in the final week
Commissioner-determined playoff or resolution

10. Administration & Authority
League Commissioners: Alex & Jeb
Commissioners manage submissions, penalties, and edits. All commissioner decisions are final.

11. Stats & App Scope
Season 1: Stroke tracking only
Expanded hole-level stats may be introduced in Season 2
`;

export default function Rules(){
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold mb-4">Official Rules & League Governance</h2>
      <pre className="whitespace-pre-wrap bg-white p-6 rounded shadow text-sm">{rules}</pre>
    </div>
  )
}
