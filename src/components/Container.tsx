import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1500px] flex flex-col mx-auto">{children}</div>;
}
