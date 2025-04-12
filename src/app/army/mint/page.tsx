import Navbar from "@/components/navbar";
import ConnectWallet from "@/components/connect-wallet";
import NFTInfo from "@/components/nft/NFTInfo";
import MintButton from "@/components/nft/MintButton";

export default function MintArmyPage() {
  const contractAddress = process.env.NEXT_PUBLIC_ARMY_NFT_CONTRACT!;

  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="container mx-auto px-8 pt-24 pb-24 justify-center">
        <h1 className="text-5xl font-bold mb-8">Join the Tech Rebel Army</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-rebel-light px-8 rounded-xl border border-rebel-gray shadow-sm">
            <ConnectWallet className="w-full mt-6 p-6" />

            <NFTInfo contractAddress={contractAddress} tokenId={0n} />

            <MintButton
              contractAddress={contractAddress}
              label="Mint Your Army NFT"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-rebel-light p-6 rounded-xl border border-rebel-gray shadow-sm">
              <h3 className="text-xl font-bold mb-4">Why Join the Army?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unlock access to our private product builder group</li>
                <li>Get early access to internal experiments and releases</li>
                <li>Be featured as part of the Tech Rebel ecosystem</li>
                <li>Exclusive entry to `/app/army` once live</li>
              </ul>
            </div>

            <div className="bg-rebel-light p-6 rounded-xl border border-rebel-gray shadow-sm">
              <h3 className="text-xl font-bold mb-4">How to Mint</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Connect your Ethereum wallet</li>
                <li>Make sure you’re on the <strong>Base</strong> network</li>
                <li>Click "Mint Your Army NFT"</li>
                <li>Approve the transaction</li>
                <li>Your NFT will appear in your wallet</li>
                <li>Get access to our private `/app/army` section</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
