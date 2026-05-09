import React from 'react'

interface Props {
  children: React.ReactNode
  light?: boolean
}

export default function SectionLabel({ children, light }: Props) {
  return (
    <div className={`section-label${light ? ' light' : ''}`}>{children}</div>
  )
}
