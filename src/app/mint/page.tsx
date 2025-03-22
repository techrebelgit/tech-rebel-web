import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function MintPage() {
  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-5xl font-bold mb-8">Mint Your Tech Rebel NFT</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Tech Rebel Genesis Collection</h2>
            <p className="text-lg mb-6">
              Own a piece of the Tech Rebel universe with our exclusive Genesis NFT collection. Each NFT grants you
              special access to our ecosystem and future benefits.
            </p>
            <div className="aspect-square bg-rebel-red rounded-xl mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">NFT Preview</span>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span>Price:</span>
                <span className="font-bold">0.1 ETH</span>
              </div>
              <div className="flex justify-between">
                <span>Total Supply:</span>
                <span className="font-bold">1,000</span>
              </div>
              <div className="flex justify-between">
                <span>Available:</span>
                <span className="font-bold">750</span>
              </div>
              <Button className="w-full mt-4">Connect Wallet to Mint</Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-rebel-light p-6 rounded-xl border border-rebel-gray shadow-sm">
              <h3 className="text-xl font-bold mb-4">Benefits of Owning</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Early access to all Tech Rebel products</li>
                <li>Exclusive community membership</li>
                <li>Voting rights on future projects</li>
                <li>Special events and meetups</li>
                <li>Revenue sharing opportunities</li>
              </ul>
            </div>

            <div className="bg-rebel-light p-6 rounded-xl border border-rebel-gray shadow-sm">
              <h3 className="text-xl font-bold mb-4">How to Mint</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Connect your Ethereum wallet</li>
                <li>Select the number of NFTs to mint</li>
                <li>Confirm the transaction in your wallet</li>
                <li>Your NFTs will appear in your connected wallet</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

