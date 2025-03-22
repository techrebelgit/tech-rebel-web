import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        {/* About Tech Rebel Section */}
        <section className="mb-24">
          <h1 className="text-5xl font-bold mb-6 flex items-center">
            <span className="text-rebel-red mr-3">🔥</span> About Tech Rebel
          </h1>

          <div className="space-y-6">
            <p className="text-2xl font-bold">Tech Rebel is a Web3 product agency for the bold.</p>

            <p className="text-xl">
              We help developers, teams, and companies venture into Web3 with clarity, confidence, and cutting-edge
              product thinking.
              <br />
              We provide the{" "}
              <span className="font-bold">
                feedback, strategic guidance, discovery process, and deep technical expertise
              </span>{" "}
              they need to move fast and build smarter.
            </p>

            <p className="text-xl">
              Founded by a product leader and blockchain architect with deep roots in R&D, Tech Rebel is where
              bleeding-edge tech meets business logic.
              <br />
              We've helped ship blockchain products across a wide range of use cases—
              <span className="font-bold">
                trading technologies, OTC platforms, cross-border payments, NFT-based access, memecoins, and
                traceability
              </span>
              —on chains like <span className="font-bold">Ethereum, Solana, Stellar, XRP, Base, and Corda</span>.
            </p>

            <p className="text-xl">
              Tech Rebel is also an <span className="font-bold">experimental venture studio</span>.<br />
              We <span className="font-bold">build in public</span>, share our learnings, and believe that{" "}
              <span className="font-bold">rapid experimentation and launching early</span> is the key to learning,
              iterating, and finding product-market fit.
            </p>

            <p className="text-xl">
              We believe that <span className="font-bold">code and content are compounding assets</span>—every repo,
              every session, every idea contributes to a growing ecosystem of tools, templates, and insights that help
              others build better.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-6 flex items-center">
            <span className="text-rebel-red mr-3">👨‍🚀</span> Founder & Lead Rebel
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-square bg-rebel-red rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Alberto Chaves</span>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-6">
              <p className="text-xl">
                <span className="font-bold">Alberto Chaves is the founder of Tech Rebel and CEO of Trustless Work</span>
                , a platform building the escrow infrastructure for the new economy.
              </p>

              <p className="text-xl">
                With over 7 years of experience leading R&D teams across fintech and Web3, Alberto has helped startups,
                corporates, and decentralized communities bring products to life. His work spans everything from{" "}
                <span className="font-bold">
                  cross-border payments and tokenized platforms to memecoins and NFTs-as-access
                </span>
                , working across ecosystems like{" "}
                <span className="font-bold">Stellar, Ethereum, Solana, XRP, and Corda</span>.
              </p>

              <p className="text-xl">
                Beyond product strategy and architecture, Alberto also supports Web3 builders with{" "}
                <span className="font-bold">
                  hands-on feedback, grant application support, hackathon guidance, and go-to-market planning
                </span>
                .
              </p>

              <p className="text-xl">He founded Tech Rebel to combine his two biggest passions:</p>

              <ul className="list-disc pl-6 text-xl space-y-2">
                <li>
                  Helping others <span className="font-bold">think clearly and move faster in Web3</span>
                </li>
                <li>
                  And <span className="font-bold">building weird, useful things in public</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 flex items-center">
            <span className="text-rebel-red mr-3">🎯</span> Get Involved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mint a 1:1 NFT */}
            <div className="bg-white p-8 rounded-xl border border-rebel-gray shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-rebel-red mr-2">🎟️</span> Mint a 1:1 NFT
              </h3>

              <p className="text-lg mb-6">
                Get personalized strategy and product feedback from Alberto. Includes a private session + exclusive
                access to premium content and templates.
              </p>

              <Link href="/mint">
                <Button className="w-full flex items-center justify-center group">
                  Mint Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Become a Tech Rebel */}
            <div className="bg-rebel-red text-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">💥</span> Become a Tech Rebel
              </h3>

              <p className="text-lg mb-6">Get the full experience. As a Tech Rebel NFT holder, you unlock:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✅</span> 3 private sessions per quarter
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span> Discounted access to 1:1 NFTs
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span> Revenue share from Tech Rebel ventures
                </li>
              </ul>

              <Link href="/invest">
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center group bg-white text-rebel-red hover:bg-gray-100"
                >
                  Join the Movement{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

