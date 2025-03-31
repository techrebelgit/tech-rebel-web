"use client"
import { useState } from "react"

export function Flashcard({ term, definition }: { term: string; definition: string }) {
  const [show, setShow] = useState(false)

  return (
    <div
      className="border border-gray-300 rounded-lg p-4 mb-4 cursor-pointer bg-rebel-light"
      onClick={() => setShow(!show)}
    >
      <p className="font-medium">{term}</p>
      {show && <p className="mt-2 text-gray-600 text-sm">{definition}</p>}
    </div>
  )
}
