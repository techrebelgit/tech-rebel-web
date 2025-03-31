"use client"

import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { X } from "lucide-react"

export default function RequestTopicModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="bg-white p-6 rounded-xl max-w-md w-full z-10 relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={onClose}>
          <X />
        </button>
        <Dialog.Title className="text-xl font-bold mb-4">Sugerir un tema</Dialog.Title>
        <form
          action="https://formspree.io/f/mqkvpqye"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Tu correo (opcional)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Qué tema quieres que cubramos?
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full border border-gray-300 rounded-lg p-2"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rebel-red text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Enviar sugerencia
          </button>
        </form>
      </div>
    </Dialog>
  )
}
