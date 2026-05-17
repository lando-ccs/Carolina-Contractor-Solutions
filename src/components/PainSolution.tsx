import React from 'react'

interface Props {
  /** Label shown above the pain card title (e.g. "Without CCS") */
  painLabel?: string
  painTitle: string
  pain: string[]
  /** Label shown above the solution card title (e.g. "With CCS") */
  solutionLabel?: string
  solutionTitle: string
  solution: string[]
}

/**
 * Side-by-side Pain vs Solution split block.
 * Replaces the old two-section "You Know The Pain" → "Here's What We Do" pattern
 * with a single visually-contrasted block.
 */
export default function PainSolution({
  painLabel = 'Without CCS',
  painTitle,
  pain,
  solutionLabel = 'With CCS',
  solutionTitle,
  solution,
}: Props) {
  return (
    <div className="pain-solution">
      <svg className="pain-solution-arrow" viewBox="0 0 24 24" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="13 6 19 12 13 18" />
      </svg>

      <div className="ps-card pain">
        <div className="ps-label">{painLabel}</div>
        <h3>{painTitle}</h3>
        <ul className="ps-list">
          {pain.map(p => <li key={p}>{p}</li>)}
        </ul>
      </div>

      <div className="ps-card solution">
        <div className="ps-label">{solutionLabel}</div>
        <h3>{solutionTitle}</h3>
        <ul className="ps-list">
          {solution.map(s => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </div>
  )
}
