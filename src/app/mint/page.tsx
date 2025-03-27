import Navbar from "@/components/navbar";
import ConnectWallet from "@/components/connect-wallet";
import NFTInfo from "@/components/nft/NFTInfo";
import MintButton from "@/components/nft/MintButton";

export default function MintPage() {
  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-8 pt-24 justify-center">
        <h1 className="text-5xl font-bold mb-8">Mint Your Tech Rebel NFT</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          
          <div className="bg-rebel-light px-8 rounded-xl border border-rebel-gray shadow-sm">
          <ConnectWallet className="w-full mt-6 p-6" />
            <NFTInfo />

            <MintButton />
          </div>

          {/* Benefits + How to Mint */}
          <div className="space-y-8">
          <div className="bg-rebel-light p-6 rounded-xl border border-rebel-gray shadow-sm">
  <h3 className="text-xl font-bold mb-4">Benefits of Owning</h3>
  <ul className="list-disc pl-6 space-y-2">
    <li>Each NFT gives you access to a 1:1 strategy and product feedback session with Tech Rebel</li>
    <li>Get personalized insights to improve your Web3 product or startup</li>
    <li>Priority consideration for grants, collaborations, and community exposure</li>
    <li>Sessions are redeemable via the <strong>Book</strong> section after wallet verification</li>
    <li>Each token is unique and mapped — no duplicate redemptions</li>
  </ul>
</div>
<div className="bg-rebel-light p-6 rounded-xl border border-rebel-gray shadow-sm">
  <h3 className="text-xl font-bold mb-4">How to Mint</h3>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Connect your Ethereum wallet</li>
    <li>Make sure you have some ETH on the <strong>Base</strong> network</li>
    <li>Select the number of NFTs to mint</li>
    <li>Confirm the transaction in your wallet</li>
    <li>Your NFTs will appear in your connected wallet</li>
    <li>Head over to the <strong>Book</strong> section to redeem your session</li>
  </ol>
</div>


          </div>
        </div>
      </div>
    </main>
  );
}
