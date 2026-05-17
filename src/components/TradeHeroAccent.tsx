import React from 'react'

type Trade =
  | 'roofers'
  | 'hvac'
  | 'landscapers'
  | 'concrete-hardscaping'
  | 'cleaning'
  | 'plumbing'
  | 'pressure-washing'

interface Props { trade: Trade }

/**
 * Ghost watermark icon shown behind the trade-page hero text.
 * One distinctive icon per trade — sits at right side, very low opacity,
 * gives each trade page a unique visual signature.
 */
export default function TradeHeroAccent({ trade }: Props) {
  const Icon = ICONS[trade]
  return (
    <div className="page-hero-accent" aria-hidden="true">
      <Icon />
    </div>
  )
}

const ICONS: Record<Trade, () => React.ReactElement> = {
  /* ── ROOFERS: stylized peaked-roof house with shingle lines ── */
  roofers: () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 24 L184 96 L164 96 L164 168 L36 168 L36 96 L16 96 Z" fill="currentColor" />
      <g stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" fill="none">
        <path d="M40 90 L100 38 L160 90" />
        <path d="M52 80 L100 50 L148 80" />
        <path d="M64 70 L100 62 L136 70" />
      </g>
      <rect x="84" y="124" width="32" height="44" fill="rgba(0,0,0,0.12)" />
    </svg>
  ),

  /* ── HVAC: dual snowflake + sun emblem ── */
  hvac: () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        {/* Sun rays — left half */}
        <g transform="translate(60 100)">
          <circle cx="0" cy="0" r="28" />
          <g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
            <line x1="-44" y1="0" x2="-58" y2="0" />
            <line x1="-32" y1="-32" x2="-42" y2="-42" />
            <line x1="0" y1="-44" x2="0" y2="-58" />
            <line x1="32" y1="-32" x2="42" y2="-42" />
            <line x1="-32" y1="32" x2="-42" y2="42" />
            <line x1="0" y1="44" x2="0" y2="58" />
          </g>
        </g>
        {/* Snowflake — right half */}
        <g transform="translate(140 100)" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none">
          <line x1="0" y1="-44" x2="0" y2="44" />
          <line x1="-38" y1="-22" x2="38" y2="22" />
          <line x1="-38" y1="22" x2="38" y2="-22" />
          {/* arrowheads */}
          <polyline points="-6,-38 0,-44 6,-38" />
          <polyline points="-6,38 0,44 6,38" />
          <polyline points="-44,-16 -38,-22 -32,-16" transform="rotate(0 -38 -22)" />
        </g>
      </g>
    </svg>
  ),

  /* ── LANDSCAPERS: leaf + grass blades ── */
  landscapers: () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        {/* Big leaf */}
        <path d="M100 24 C140 40, 160 80, 156 140 C100 156, 56 124, 56 76 C60 50, 76 32, 100 24 Z" />
        {/* Leaf stem */}
        <path d="M100 24 L120 168" stroke="rgba(0,0,0,0.18)" strokeWidth="2" fill="none" />
        {/* Veins */}
        <g stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" fill="none">
          <path d="M108 56 L86 84" />
          <path d="M114 84 L82 110" />
          <path d="M118 112 L88 134" />
        </g>
      </g>
      {/* Grass blades along bottom */}
      <g fill="currentColor">
        <path d="M30 180 Q34 150 40 180 Z" />
        <path d="M42 180 Q48 144 54 180 Z" />
        <path d="M56 180 Q60 156 66 180 Z" />
        <path d="M150 180 Q156 150 162 180 Z" />
        <path d="M164 180 Q168 158 174 180 Z" />
      </g>
    </svg>
  ),

  /* ── CONCRETE & HARDSCAPING: paver/brick pattern ── */
  'concrete-hardscaping': () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        {/* Row 1 */}
        <rect x="20" y="30" width="58" height="28" rx="3" />
        <rect x="82" y="30" width="58" height="28" rx="3" />
        <rect x="144" y="30" width="44" height="28" rx="3" />
        {/* Row 2 (offset) */}
        <rect x="12" y="62" width="44" height="28" rx="3" />
        <rect x="60" y="62" width="58" height="28" rx="3" />
        <rect x="122" y="62" width="58" height="28" rx="3" />
        {/* Row 3 */}
        <rect x="20" y="94" width="58" height="28" rx="3" />
        <rect x="82" y="94" width="58" height="28" rx="3" />
        <rect x="144" y="94" width="44" height="28" rx="3" />
        {/* Row 4 */}
        <rect x="12" y="126" width="44" height="28" rx="3" />
        <rect x="60" y="126" width="58" height="28" rx="3" />
        <rect x="122" y="126" width="58" height="28" rx="3" />
        {/* Row 5 */}
        <rect x="20" y="158" width="58" height="28" rx="3" />
        <rect x="82" y="158" width="58" height="28" rx="3" />
        <rect x="144" y="158" width="44" height="28" rx="3" />
      </g>
    </svg>
  ),

  /* ── CLEANING: sparkle + spray cloud ── */
  cleaning: () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        {/* Large 4-pointed sparkle */}
        <path d="M100 20 L110 80 L170 90 L110 100 L100 160 L90 100 L30 90 L90 80 Z" />
        {/* Small accent sparkles */}
        <path d="M50 40 L54 56 L70 60 L54 64 L50 80 L46 64 L30 60 L46 56 Z" opacity="0.7" />
        <path d="M156 130 L160 144 L174 148 L160 152 L156 166 L152 152 L138 148 L152 144 Z" opacity="0.7" />
        <path d="M40 150 L43 160 L53 163 L43 166 L40 176 L37 166 L27 163 L37 160 Z" opacity="0.5" />
      </g>
    </svg>
  ),

  /* ── PLUMBING: wrench crossed with pipe ── */
  plumbing: () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        {/* Wrench (rotated 45deg) */}
        <g transform="rotate(-45 100 100)">
          <rect x="92" y="40" width="16" height="100" rx="4" />
          {/* Wrench head */}
          <path d="M76 28 L124 28 L124 64 L116 64 L116 48 L108 48 L108 60 L92 60 L92 48 L84 48 L84 64 L76 64 Z" />
          {/* Other end head */}
          <path d="M76 172 L124 172 L124 136 L116 136 L116 152 L108 152 L108 140 L92 140 L92 152 L84 152 L84 136 L76 136 Z" />
        </g>
      </g>
      {/* Water droplet accent */}
      <path d="M160 60 C154 70, 152 78, 158 86 C166 90, 172 84, 170 76 Z" fill="currentColor" opacity="0.7" />
    </svg>
  ),

  /* ── PRESSURE WASHING: water spray cone + droplets ── */
  'pressure-washing': () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        {/* Spray gun handle (top-left) */}
        <rect x="30" y="56" width="44" height="20" rx="3" />
        <rect x="56" y="76" width="14" height="38" rx="3" />
        {/* Spray nozzle */}
        <path d="M74 60 L90 50 L90 82 L74 72 Z" />
        {/* Spray cone — widening lines */}
        <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none">
          <line x1="92" y1="64" x2="184" y2="40" />
          <line x1="92" y1="66" x2="186" y2="66" />
          <line x1="92" y1="68" x2="184" y2="92" />
          <line x1="92" y1="70" x2="172" y2="116" />
        </g>
        {/* Water droplets */}
        <circle cx="150" cy="140" r="6" />
        <circle cx="170" cy="160" r="4" />
        <circle cx="130" cy="158" r="5" />
        <circle cx="155" cy="175" r="3" />
      </g>
    </svg>
  ),
}
