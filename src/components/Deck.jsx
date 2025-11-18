import React, { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Deck({ slides }) {
  const [index, setIndex] = useState(0)
  const total = slides.length

  const go = (n) => setIndex((i) => Math.min(total - 1, Math.max(0, i + n)))
  const atStart = index === 0
  const atEnd = index === total - 1

  const current = useMemo(() => slides[index], [slides, index])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_500px_at_50%_-50%,rgba(59,130,246,0.25),transparent_60%)] opacity-60" />

      <div className="relative flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-6 md:px-10 py-6">
          <h1 className="text-lg md:text-xl font-semibold text-blue-200/90">Greek Mythology: Culture and Meaning</h1>
          <div className="text-sm text-blue-300/70">{index + 1} / {total}</div>
        </header>

        {/* Slide body */}
        <main className="flex-1 flex items-center justify-center px-4 pb-24">
          {typeof current === 'function' ? current() : current}
        </main>

        {/* Controls */}
        <footer className="fixed bottom-6 inset-x-0 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition ${atStart ? 'opacity-40 cursor-not-allowed' : ''}`}
            disabled={atStart}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden md:inline">Previous</span>
          </button>
          <button
            onClick={() => go(1)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-blue-500/20 hover:bg-blue-500/30 transition ${atEnd ? 'opacity-40 cursor-not-allowed' : ''}`}
            disabled={atEnd}
            aria-label="Next"
          >
            <span className="hidden md:inline">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Deck
