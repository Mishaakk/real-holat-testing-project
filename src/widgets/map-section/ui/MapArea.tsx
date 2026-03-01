export function MapArea() {
  return (
    <div className="flex-1 rounded-2xl bg-[#E8FDF5]/60 border border-[#00FF7F]/20 relative overflow-hidden flex items-center justify-center min-h-[320px]">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(#00FF7F 1px, transparent 1px),
            linear-gradient(90deg, #00FF7F 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Badge */}
      <span className="absolute top-3 left-3 bg-[#00FF7F] text-[#111] text-[11px] font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
        Xarita (Viloyatlar + nuqtalar/cluster)
      </span>

      {/* Uzbekistan SVG outline */}
      <svg
        viewBox="0 0 500 280"
        className="w-[75%] max-w-[380px] opacity-60 drop-shadow-[0_4px_12px_rgba(0,200,100,0.3)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 120 L30 100 L20 80 L40 55 L80 40 L130 35 L170 25 L220 20 L270 30 L310 25 L350 15 L400 20 L440 35 L470 55 L480 80 L465 105 L450 125 L430 140 L410 155 L380 165 L360 175 L350 195 L330 210 L310 220 L280 225 L260 215 L240 200 L210 195 L190 205 L170 215 L150 210 L140 195 L130 180 L110 165 L85 150 L70 135 Z"
          fill="rgba(0,255,127,0.15)"
          stroke="#00FF7F"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Region dividers */}
        <line x1="160" y1="100" x2="180" y2="180" stroke="#00FF7F" strokeWidth="1" opacity="0.3"/>
        <line x1="250" y1="50"  x2="260" y2="200" stroke="#00FF7F" strokeWidth="1" opacity="0.3"/>
        <line x1="340" y1="70"  x2="320" y2="190" stroke="#00FF7F" strokeWidth="1" opacity="0.3"/>
        <line x1="100" y1="60"  x2="430" y2="100" stroke="#00FF7F" strokeWidth="1" opacity="0.2"/>
        {/* City dots */}
        <circle cx="245" cy="90" r="6" fill="#00FF7F" opacity="0.9"/>
        <text x="252" y="82" fontSize="9" fill="#00FF7F" fontFamily="Inter" fontWeight="700" opacity="0.9">Toshkent</text>
        <circle cx="140" cy="120" r="4" fill="#3B82F6" opacity="0.8"/>
        <circle cx="330" cy="130" r="4" fill="#8B5CF6" opacity="0.8"/>
        <circle cx="200" cy="160" r="4" fill="#00FF7F" opacity="0.7"/>
        <circle cx="380" cy="100" r="4" fill="#3B82F6" opacity="0.8"/>
        <circle cx="100" cy="90"  r="3" fill="#00FF7F" opacity="0.6"/>
        <circle cx="420" cy="130" r="3" fill="#00FF7F" opacity="0.6"/>
      </svg>
    </div>
  )
}
