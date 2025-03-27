"use client";

import { ClaimButton } from "thirdweb/react";
import { base } from "thirdweb/chains";
import { client } from "@/lib/client";

export default function MintButton() {
  return (
    <ClaimButton
      contractAddress="0x341e31A34A7672C2f2693fB5b8313cE7F45ff760"
      chain={base}
      client={client}
      claimParams={{
        type: "ERC721",
        quantity: 1n,
      }}
    >
      Mint Your Tech Rebel NFT
    </ClaimButton>
  );
}
