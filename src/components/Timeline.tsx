import React from 'react'

export interface TimelineStep {
  num: string
  title: string
  body: string
}

/**
 * Connected 3-step timeline — numbered circles linked by a line.
 * Used for "How It Works" sections. Auto-stacks to vertical layout on mobile.
 */
export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="timeline">
      {steps.map(s => (
        <div key={s.num} className="timeline-step">
          <div className="timeline-circle">{s.num}</div>
          <h4>{s.title}</h4>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  )
}
