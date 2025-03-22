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
      {
        slug: "layer-1",
        title: "Layer 1 Blockchains",
        description:
          "Explore the foundation layer of blockchain ecosystems, including Ethereum, Solana, Bitcoin, and other major protocols.",
        level: "Intermediate",
        subtopics: 4,
      },
      {
        slug: "layer-2",
        title: "Layer 2 Scaling Solutions",
        description:
          "Learn about scaling solutions built on top of Layer 1 blockchains, including rollups, sidechains, and state channels.",
        level: "Intermediate",
        subtopics: 4,
      },
      {
        slug: "smart-contracts",
        title: "Smart Contracts",
        description:
          "Dive into self-executing contracts with the terms directly written into code, enabling trustless transactions and applications.",
        level: "Advanced",
        subtopics: 5,
      },
      {
        slug: "web3-development",
        title: "Web3 Development",
        description:
          "Get started with building decentralized applications (dApps) using modern Web3 development tools and frameworks.",
        level: "Advanced",
        subtopics: 6,
      },
      {
        slug: "tokenomics",
        title: "Tokenomics",
        description:
          "Understand the economic models behind cryptocurrencies and tokens, including supply mechanisms, utility, and governance.",
        level: "Intermediate",
        subtopics: 4,
      },
    ]

    setCourses(availableCourses)
    setIsLoading(false)
  }, [])

  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-5xl font-bold mb-8">Learn Blockchain with Tech Rebel</h1>
        <p className="text-xl max-w-3xl mb-12">
          Expand your knowledge of blockchain technology with our comprehensive learning resources. From fundamentals to
          advanced topics, we've got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Learning Philosophy</h2>
            <p className="text-lg mb-8">
              We believe in practical, accessible education that empowers builders and innovators. Our resources are
              designed to demystify blockchain technology and provide clear, actionable insights.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Comprehensive explanations of complex concepts</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Real-world examples and use cases</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Up-to-date information on the latest developments</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Practical insights from industry experts</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Community-driven knowledge sharing</p>
              </div>
            </div>
          </div>

          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Why Learn Blockchain?</h3>
            <p className="mb-6">
              Blockchain technology is revolutionizing industries from finance to supply chain, creating new
              opportunities for innovation and disruption.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>High demand for blockchain expertise in the job market</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Opportunity to build the next generation of decentralized applications</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Be part of a technological revolution reshaping the internet</p>
              </div>
            </div>

            <Button className="w-full" asChild>
              <Link href="/learn/blockchain-fundamentals">Start Learning</Link>
            </Button>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Blockchain Topics</h2>

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
                      <p className="text-sm text-gray-600">Level</p>
                      <p className="font-medium">{course.level}</p>
                    </div>
                    <div className="text-center p-2 bg-rebel-light rounded-lg">
                      <p className="text-sm text-gray-600">Subtopics</p>
                      <p className="font-medium">{course.subtopics}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group" asChild>
                    <Link href={`/learn/${course.slug}`}>
                      Explore Topic{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-rebel-red p-8 rounded-xl shadow-sm text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Want to learn about a specific topic?</h3>
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

