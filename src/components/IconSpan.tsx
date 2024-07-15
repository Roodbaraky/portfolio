import React from 'react'

export default function IconSpan({children}:any) {
  return (
    <span className="shrink-0 rounded-lg bg-neutral text-secondary opacity-80 hover:opacity-80 transition-all delay-100 ease-in-out hover:scale-105  p-2 my-2 flex flex-col content-center justify-center w-24 max-w-24 text-center min-h-24">
        {children}
    </span>
  )
}
