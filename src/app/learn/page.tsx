"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

// Define the course type
type Course = {
  slug: string
  title: string
  description: string
  level: string
  subtopics: number
}

export default function LearnPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, this would fetch from an API
    // For now, we'll use a static list
    const availableCourses: Course[] = [
      {
        slug: "blockchain-fundamentals",
        title: "Blockchain Fundamentals",
        description:
          "Understand the core concepts of blockchain technology, including distributed ledgers, consensus mechanisms, and cryptography.",
        level: "Beginner",
        subtopics: 5,
      },

    ]

    setCourses(availableCourses)
    setIsLoading(false)
  }, [])

  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-5xl font-bold mb-8">Aprenda Blockchain con Tech Rebel</h1>
        <p className="text-xl max-w-3xl mb-12">
          Expanda su conocimiento de blockchain con los siguientes modulos de aprendizaje.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contenido</h2>
            <p className="text-lg mb-8">
              Los siguientes módulos están creados pensando en builders, founders y devs que quieren aprender más de esta tecnología. Estos recursos son creados bajo demanda, según aparezca la necesidad.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Intentamos simplificar temas complejos</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Casos de uso reales</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Información actualizada</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Mucho Spanglish</p>
              </div>

            </div>
          </div>

          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Por qué Blockchain?</h3>
            <p className="mb-6">
              Blockchain está revolucionando industrias, es todo un nuevo paradigma en como compartimos información y valor. Tener una idea clara de cómo funciona y cómo puede revolucionar su industria es una ventaja.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Alta demanda por expertos de blockchain en el mercado</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Oportunidad de construir la nueva generación de aplicaciones decentralizadas</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Sea parte de una revolución tecnológica</p>
              </div>
            </div>

            <Button className="w-full" asChild>
              <Link href="/learn/blockchain-fundamentals">Obtener acceso</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Módulos</h2>

        {isLoading ? (
          <div className="py-12 text-center">Loading topics...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-rebel-gray shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-3 bg-rebel-red"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-700 mb-6">{course.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-2 bg-rebel-light rounded-lg">
                      <p className="text-sm text-gray-600">Nivel</p>
                      <p className="font-medium">{course.level}</p>
                    </div>
                    <div className="text-center p-2 bg-rebel-light rounded-lg">
                      <p className="text-sm text-gray-600">Subtopics</p>
                      <p className="font-medium">{course.subtopics}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group" asChild>
                    <Link href={`/learn/${course.slug}`}>
                      Explorar contenido{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-rebel-red p-8 rounded-xl shadow-sm text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Quiere aprender algo específico?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We're constantly expanding our learning resources. Let us know what blockchain topics you'd like us to cover
            next.
          </p>
          <Button variant="secondary" className="bg-white text-rebel-red hover:bg-gray-100">
            Request a Topic
          </Button>
        </div>
      </div>
    </main>
  )
}

