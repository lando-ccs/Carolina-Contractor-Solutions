import React from 'react'

interface Props {
  children: React.ReactNode
  light?: boolean
  center?: boolean
}

export default function SectionLabel({ children, light, center }: Props) {
  return (
    <div className={`section-label${light ? ' light' : ''}${center ? ' center' : ''}`}>{children}</div>
  )
}
