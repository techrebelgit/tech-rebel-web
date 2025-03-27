import Navbar from "@/components/navbar";
import ConnectWallet from "@/components/connect-wallet";
import NFTInfo from "@/components/nft/NFTInfo";
import MintButton from "@/components/nft/MintButton";

export default function MintPage() {
  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-5xl font-bold mb-8">Mint Your Tech Rebel NFT</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm">
            <NFTInfo />
            <ConnectWallet className="w-full mt-6" />
            <MintButton />
          </div>

          {/* Benefits + How to Mint */}
          <div className="space-y-8">{/* same as before */}</div>
        </div>
      </div>
    </main>
  );
}
