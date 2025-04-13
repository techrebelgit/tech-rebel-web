"use client";

import { ReactNode } from "react";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";

import { client } from "@/lib/client";
import { base } from "thirdweb/chains";

export function TokenGate({
  children,
  contractAddress,
  fallback = <p>You don’t have access.</p>,
  addressOverride,
}: {
  contractAddress: string;
  children: ReactNode;
  fallback?: ReactNode;
  addressOverride?: string;
}) {
  const account = useActiveAccount();
  const address = addressOverride || account?.address;

  if (!address) return <p>Please connect your wallet.</p>;

  const contract = getContract({
    address: contractAddress,
    chain: base,
    client,
  });

  const { data: ownedNFTs, isLoading } = useReadContract(getOwnedNFTs, {
    contract,
    owner: address, // ✅ fixed correctly for Thirdweb SDK v4
  });

  const ownsNFT = ownedNFTs && ownedNFTs.length > 0;

  if (isLoading) return <p>Checking access...</p>;

  return ownsNFT ? <>{children}</> : <>{fallback}</>;
}
