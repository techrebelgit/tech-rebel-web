import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function LeanPage() {
  const courses = [
    {
      title: "Foundations of Tech Innovation",
      description: "Learn the fundamental principles that drive technological innovation and disruption.",
      duration: "4 weeks",
      level: "Beginner",
      modules: 6,
    },
    {
      title: "Blockchain Development Masterclass",
      description: "Master the skills needed to build decentralized applications on blockchain platforms.",
      duration: "8 weeks",
      level: "Intermediate",
      modules: 12,
    },
    {
      title: "AI and Machine Learning Essentials",
      description: "Understand the core concepts of AI and how to implement machine learning models.",
      duration: "6 weeks",
      level: "Intermediate",
      modules: 9,
    },
    {
      title: "Quantum Computing: The Next Frontier",
      description: "Explore the principles of quantum computing and its potential applications.",
      duration: "10 weeks",
      level: "Advanced",
      modules: 14,
    },
  ]

  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-5xl font-bold mb-8">Learn with Tech Rebel</h1>
        <p className="text-xl max-w-3xl mb-12">
          Expand your knowledge and skills with our cutting-edge courses and resources. Join our community of tech
          rebels and shape the future of technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Learning Philosophy</h2>
            <p className="text-lg mb-8">
              We believe in practical, hands-on learning that prepares you for the real world. Our courses are designed
              by industry experts and focus on the skills that matter.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Learn by doing with project-based curriculum</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Access to cutting-edge tools and technologies</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Mentorship from industry professionals</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Community of like-minded innovators</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                <p>Flexible learning paths tailored to your goals</p>
              </div>
            </div>
          </div>

          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Join Our Learning Community</h3>
            <p className="mb-6">
              Get access to all our courses, resources, and community features with a Tech Rebel Learning membership.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between pb-2 border-b border-gray-300">
                <span>Monthly Membership</span>
                <span className="font-bold">$49/month</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-300">
                <span>Annual Membership</span>
                <span className="font-bold">$499/year</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-300">
                <span>Lifetime Access</span>
                <span className="font-bold">$1,999</span>
              </div>
            </div>

            <Button className="w-full">Start Learning Today</Button>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>

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

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-2 bg-rebel-light rounded-lg">
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-medium">{course.duration}</p>
                  </div>
                  <div className="text-center p-2 bg-rebel-light rounded-lg">
                    <p className="text-sm text-gray-600">Level</p>
                    <p className="font-medium">{course.level}</p>
                  </div>
                  <div className="text-center p-2 bg-rebel-light rounded-lg">
                    <p className="text-sm text-gray-600">Modules</p>
                    <p className="font-medium">{course.modules}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  View Course <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-rebel-red p-8 rounded-xl shadow-sm text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We're constantly adding new courses and resources. Let us know what you'd like to learn next.
          </p>
          <Button variant="secondary" className="bg-white text-rebel-red hover:bg-gray-100">
            Request a Course
          </Button>
        </div>
      </div>
    </main>
  )
}

