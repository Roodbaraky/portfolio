import React from 'react'

export default function SegmentDivider({ title }: { title: string }) {
    const lowerCaseTitle = title.toLowerCase();
  return (<>
    <a id={`${lowerCaseTitle}`} className="relative -top-24"></a>
    {title!=='About'&&
    <span className="mt-1 flex items-center mx-14">
      <span className="h-px flex-1 bg-primary opacity-65"></span>
      <span className="text-2xl italic font-mono shrink-0 px-6">{title}</span>
      <span className="h-px flex-1 bg-primary opacity-65"></span>
    </span>}
    </>
  );
}
