import React from 'react'
interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
}

export default function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] mb-4 ${light ? 'text-red-light' : 'text-red'}`}>
      <span className={`w-6 h-0.5 rounded-full flex-shrink-0 ${light ? 'bg-red-light' : 'bg-red'}`} />
      {children}
    </div>
  )
}
