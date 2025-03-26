"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import ConnectWallet from "../../components/connect-wallet"
import { Loader2 } from "lucide-react"

export default function MintPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [mintAmount, setMintAmount] = useState(1)
  const [mintSuccess, setMintSuccess] = useState(false)
  const [mintError, setMintError] = useState<string | null>(null)
  const [txHash, setTxHash] = useState<string | null>(null)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  // Listen for wallet connection events
  const handleWalletConnect = (address: string) => {
    setWalletAddress(address)
  }

  const handleMint = async () => {
    if (!walletAddress) return

    setIsLoading(true)
    setMintSuccess(false)
    setMintError(null)
    setTxHash(null)

    try {
      // Simulate a successful mint for now
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock transaction hash
      const mockTxHash = "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")

      setTxHash(mockTxHash)
      setMintSuccess(true)
    } catch (error) {
      console.error("Mint error:", error)
      setMintError("Failed to mint NFT")
    } finally {
      setIsLoading(false)
    }
  }

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

              <div className="mt-4">
                <ConnectWallet className="w-full" onWalletConnected={handleWalletConnect} />
              </div>

              {walletAddress && (
                <>
                  <div className="flex items-center justify-between mt-4">
                    <span>Quantity:</span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setMintAmount(Math.max(1, mintAmount - 1))}
                        disabled={mintAmount <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{mintAmount}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setMintAmount(Math.min(10, mintAmount + 1))}
                        disabled={mintAmount >= 10}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full mt-4" onClick={handleMint} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Minting...
                      </>
                    ) : (
                      `Mint ${mintAmount} NFT${mintAmount > 1 ? "s" : ""}`
                    )}
                  </Button>

                  {mintSuccess && (
                    <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                      <p className="font-medium">Successfully minted your NFT!</p>
                      {txHash && (
                        <a
                          href={`https://basescan.org/tx/${txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm underline mt-2 block"
                        >
                          View transaction
                        </a>
                      )}
                    </div>
                  )}

                  {mintError && (
                    <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">
                      <p className="font-medium">Error minting NFT</p>
                      <p className="text-sm mt-1">{mintError}</p>
                    </div>
                  )}
                </>
              )}
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

            {walletAddress && (
              <div className="bg-rebel-light p-6 rounded-xl border border-rebel-gray shadow-sm">
                <h3 className="text-xl font-bold mb-4">Connected Wallet</h3>
                <p className="font-mono text-sm break-all">{walletAddress}</p>
                <p className="mt-4 text-sm">Make sure you're connected to the Base network to mint your NFT.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

