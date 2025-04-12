"use client";

import { ClaimButton } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { client } from "@/lib/client";


type MintButtonProps = {
  contractAddress: string;
  label?: string;
  quantity?: bigint;
  showIcon?: boolean;
};

export default function MintButton({
  contractAddress,
  label = "Mint Your Tech Rebel NFT",
  quantity = 1n,
}: MintButtonProps) {
  return (
    <div className="flex justify-center my-6">
      <ClaimButton
        contractAddress={contractAddress}
        chain={base}
        client={client}
        claimParams={{
          type: "ERC721",
          quantity,
        }}
        unstyled
        className=
          "inline-flex items-center justify-center gap-2 rounded-md bg-rebel-red px-6 py-3 text-white text-sm font-semibold shadow-sm transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rebel-red focus-visible:ring-offset-2"
      >
        {label}
      </ClaimButton>
    </div>
  );
}
