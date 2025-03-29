import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Shield, Users, Zap } from "lucide-react"

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Invest in Tech Rebels</h1>
          <p className="text-xl mb-12">
            Tech Rebel is a product studio and consulting lab that helps early-stage web3 projects find product-market fit. This page curates a shortlist of teams that we've helped shape — and who are actively fundraising.
            <br /><br />
            We’re not a fund. We don’t take carry. We just help founders get visibility, and help investors cut through the noise.
          </p>

          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm mb-12">
            <div className="text-center">
              <p className="text-xl text-gray-700">
                Want early access to decks, intros, and demo days?
              </p>
              <Button className="mt-4" asChild>
                <a href="mailto:alberto@albertochaves.com">
                  Request Investor Access <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Featured Startups</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Trustless Work</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Raising</span>
              </div>
              <p className="text-gray-700 mb-2 italic">
                Escrow-as-a-Service for the new economy
              </p>
              <p className="text-gray-700 mb-4">
                API infrastructure to integrate trustless escrows into any payment flow. Already powering 10+ pilots and supported by Stellar and Draper U.
              </p>
              <ul className="text-gray-600 mb-6 space-y-1 text-sm">
                <li>
                  <strong>Website:</strong>{" "}
                  <a className="underline text-rebel-red" href="https://www.trustlesswork.com" target="_blank" rel="noopener noreferrer">trustlesswork.com</a>
                </li>
                <li>
                  <strong>Summary:</strong>{" "}
                  <a className="underline text-rebel-red" href="https://www.trustlesswork.com/TrustlessWorkSummary.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
                </li>
                <li>
                  <strong>Deck:</strong>{" "}
                  <a className="underline text-rebel-red" href="https://www.trustlesswork.com/TrustlessWorkSlides.pdf" target="_blank" rel="noopener noreferrer">View Pitch Deck</a>
                </li>
                <li>
                  <strong>Raising:</strong> $800k Pre-Seed (SAFE)
                </li>
              </ul>
            </div>

            {/* Add more startup cards here in similar format */}

          </div>

          <h2 className="text-3xl font-bold mb-6">Why Back Tech Rebel Startups?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <TrendingUp className="h-10 w-10 mb-4 text-rebel-red" />
              <h3 className="text-xl font-bold mb-2">Curated Deal Flow</h3>
              <p className="text-gray-700">
                We work hands-on with founders to shape ideas into traction-ready products. You get access to teams with product, not just pitch decks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <Shield className="h-10 w-10 mb-4 text-rebel-red" />
              <h3 className="text-xl font-bold mb-2">Builder-Led Vetting</h3>
              <p className="text-gray-700">
                Each project featured here is vetted by Tech Rebel through product development, go-to-market, and early user testing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <Users className="h-10 w-10 mb-4 text-rebel-red" />
              <h3 className="text-xl font-bold mb-2">Network Access</h3>
              <p className="text-gray-700">
                Our projects often participate in programs like DraperU, Stellar Dev Funds, and OD hackathons — gaining early traction and exposure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
              <Zap className="h-10 w-10 mb-4 text-rebel-red" />
              <h3 className="text-xl font-bold mb-2">Mission-Driven Experiments</h3>
              <p className="text-gray-700">
                We back projects building real-world use cases for web3 — not just hype. Think stablecoins, decentralized access, on-chain commerce.
              </p>
            </div>
          </div>

          <div className="bg-rebel-red p-8 rounded-xl shadow-sm text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Meet the Founders?</h3>
            <p className="mb-6">
              If you're a VC, angel, or web3 fund and want intros to projects featured here, we’ll connect you directly with the teams.
            </p>
            <Button variant="secondary" className="bg-white text-rebel-red hover:bg-gray-100" asChild>
              <a href="mailto:alberto@albertochaves.com">Request Access</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
