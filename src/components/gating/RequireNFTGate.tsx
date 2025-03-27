"use client";

import { ReactNode } from "react";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";

import { client } from "@/lib/client";
import { base } from "thirdweb/chains"; // or your chosen chain

const NFT_CONTRACT_ADDRESS = "0x341e31A34A7672C2f2693fB5b8313cE7F45ff760";

const contract = getContract({
  client,
  address: NFT_CONTRACT_ADDRESS,
  chain: base,
});

export function RequireNFTGate({
  children,
  fallback = <p>You don’t have access.</p>,
  addressOverride,
}: {
  children: ReactNode;
  fallback?: ReactNode;
  addressOverride?: string; // optional: for testing
}) {
  const account = useActiveAccount();
  const address = addressOverride || account?.address;

  // Ensure address is defined before proceeding
  if (!address) return <p>Please connect your wallet.</p>;

  // Use getOwnedNFTs correctly
  const { data: ownedNFTs, isLoading } = useReadContract(getOwnedNFTs, {
    contract,
    owner: address, // Use 'owner' instead of 'ownerAddress'
  });

  if (isLoading) return <p>Checking NFT access...</p>;

  const hasNFT = ownedNFTs && ownedNFTs.length > 0;

  return hasNFT ? <>{children}</> : <>{fallback}</>;
}
