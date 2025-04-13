"use client";

import { useActiveAccount } from "thirdweb/react";
import { TokenGate } from "@/components/gating/tokenGate";
import ArmyNavbar from "@/components/army/ArmyNavbar";
import { Button } from "@/components/ui/button";

export default function ArmyBasePage() {
  const account = useActiveAccount();
  const walletAddress = account?.address;

  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <ArmyNavbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <h1 className="text-4xl font-bold mb-6">Army Base</h1>

        {!walletAddress ? (
          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="mb-8">
              This section is only accessible to holders of the Army NFT. Connect your wallet to check access.
            </p>
            <div className="flex justify-center">
              <Button className="px-6" asChild>
                <a href="/mint-army">Get the Army NFT</a>
              </Button>
            </div>
          </div>
        ) : (
          <TokenGate
            contractAddress={process.env.NEXT_PUBLIC_ARMY_NFT_CONTRACT!}
            fallback={
              <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm text-center">
                <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
                <p className="mb-8">
                  You need to own the Army NFT to access this section.
                </p>
                <Button className="px-6" asChild>
                  <a href="/mint-army">Mint the Army NFT</a>
                </Button>
              </div>
            }
          >
            {/* ✅ Gated Content */}
            <div className="space-y-6">
              <p className="text-lg">
                Welcome to the inner circle. You now have access to experiments, drops, behind-the-scenes tools, and early builds.
              </p>

              <p className="text-sm text-gray-600">
                Wallet connected: <strong>{walletAddress}</strong>
              </p>
            </div>
          </TokenGate>
        )}
      </div>
    </main>
  );
}
