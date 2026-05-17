import React from 'react'

export interface FaqItem { q: string; a: string }

/**
 * Card-style FAQ accordion with a +/× toggle icon.
 * Uses native <details> for accessibility — no JS needed.
 */
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map(f => (
        <details key={f.q} className="faq-item">
          <summary>
            {f.q}
            <span className="faq-icon">+</span>
          </summary>
          <div className="faq-answer">{f.a}</div>
        </details>
      ))}
    </div>
  )
}
