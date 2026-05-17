import React from 'react'
import WhyIcon, { IconName } from './WhyIcon'

export interface WhyItem {
  num: string
  icon: IconName
  title: string
  body: string
  checks: string[]
}

/**
 * "Why <Trade> Choose CCS" grid — 3 cards with icon + number header.
 * Replaces the old generic service-card pattern used for Why content.
 */
export default function WhyGrid({ items }: { items: WhyItem[] }) {
  return (
    <div className="why-grid">
      {items.map(c => (
        <div key={c.num} className="why-card">
          <div className="why-card-top">
            <div className="why-card-icon"><WhyIcon name={c.icon} /></div>
            <div className="why-card-num">{c.num}</div>
          </div>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
          <ul className="why-card-list">
            {c.checks.map(ch => <li key={ch}>{ch}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}
