import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Shield, Users, Zap } from "lucide-react"

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Invest in Tech Rebel</h1>
          <p className="text-xl mb-12">
            Join us on our mission to revolutionize technology and create a better future. Investing in Tech Rebel means
            investing in innovation that matters.
          </p>

          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">$24M</h3>
                <p className="text-gray-600">Funding Raised</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">120+</h3>
                <p className="text-gray-600">Investors</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">4</h3>
                <p className="text-gray-600">Funding Rounds</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Why Invest in Tech Rebel?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <TrendingUp className="h-10 w-10 mb-4 text-rebel-red" />
              <h3 className="text-xl font-bold mb-2">High Growth Potential</h3>
              <p className="text-gray-700">
                Our innovative products and services address large, growing markets with significant revenue potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <Shield className="h-10 w-10 mb-4 text-rebel-red" />
              <h3 className="text-xl font-bold mb-2">Proprietary Technology</h3>
              <p className="text-gray-700">
                We've developed unique, patented technologies that give us a competitive edge in the market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <Users className="h-10 w-10 mb-4 text-rebel-red" />
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-700">
                Our leadership team brings decades of experience from top technology companies and startups.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <Zap className="h-10 w-10 mb-4 text-rebel-red" />
              <h3 className="text-xl font-bold mb-2">Social Impact</h3>
              <p className="text-gray-700">
                We're committed to creating technology that makes a positive difference in the world.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Investment Opportunities</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Series B Funding Round</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Active</span>
              </div>
              <p className="text-gray-700 mb-6">
                We're currently raising $30M in our Series B round to scale our operations and accelerate product
                development.
              </p>
              <Button className="flex items-center">
                Request Investor Deck <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Strategic Partnerships</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Ongoing</span>
              </div>
              <p className="text-gray-700 mb-6">
                We're open to strategic partnerships that can help us grow and expand our reach.
              </p>
              <Button variant="outline" className="flex items-center">
                Discuss Partnership <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="bg-rebel-red p-8 rounded-xl shadow-sm text-white">
            <h3 className="text-2xl font-bold mb-4">Contact Our Investment Team</h3>
            <p className="mb-6">
              Interested in learning more about investing in Tech Rebel? Our investment team is ready to answer your
              questions.
            </p>
            <Button variant="secondary" className="bg-white text-rebel-red hover:bg-gray-100">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

