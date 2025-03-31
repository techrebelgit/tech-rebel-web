'use client'

export function ConceptRecap({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
        <p className="text-sm text-gray-800">{children}</p>
      </div>
    )
  }
  