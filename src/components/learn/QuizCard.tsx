"use client"

import { useState } from "react"

export function QuizCard({ question, options, correctIndex }: {
  question: string
  options: string[]
  correctIndex: number
}) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="border border-gray-300 rounded-lg p-4 mt-6 mb-6 bg-white">
      <p className="font-semibold mb-3">{question}</p>
      {options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => setSelected(idx)}
          className={`block w-full text-left px-4 py-2 rounded-lg mb-2 border transition ${
            selected === null
              ? "bg-white"
              : idx === correctIndex
              ? "bg-green-100 border-green-400"
              : idx === selected
              ? "bg-red-100 border-red-400"
              : "bg-white"
          }`}
        >
          {opt}
        </button>
      ))}
      {selected !== null && (
        <p className="mt-2 text-sm text-gray-600">
          {selected === correctIndex ? "✅ ¡Correcto!" : "❌ No exactamente. Intenta otra vez."}
        </p>
      )}
    </div>
  )
}
