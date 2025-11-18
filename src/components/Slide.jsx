import React from 'react'

function Slide({ title, subtitle, children, footnote }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md">
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-200/90 mb-6">
            {subtitle}
          </p>
        )}
        <div className="text-blue-100/90 leading-relaxed space-y-3 text-base md:text-lg">
          {children}
        </div>
        {footnote && (
          <div className="mt-6 pt-4 border-t border-white/10 text-sm text-blue-200/70">
            {footnote}
          </div>
        )}
      </div>
    </div>
  )
}

export default Slide
