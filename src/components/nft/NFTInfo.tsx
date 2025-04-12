"use client";

import {
  NFTProvider,
  NFTMedia,
  NFTName,
  NFTDescription,
} from "thirdweb/react";
import { getContract } from "thirdweb";
import { client } from "@/lib/client";
import { base } from "thirdweb/chains";

type NFTInfoProps = {
  contractAddress: string;
  tokenId?: bigint;
};

export default function NFTInfo({
  contractAddress,
  tokenId = 0n,
}: NFTInfoProps) {
  const contract = getContract({
    address: contractAddress,
    chain: base,
    client,
  });

  return (
    <NFTProvider contract={contract} tokenId={tokenId}>
      <div className="aspect-square bg-rebel-red rounded-xl mb-6 overflow-hidden">
        <NFTMedia className="w-full h-full object-cover rounded-xl" />
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <span>Name:</span>
          <span className="font-bold">
            <NFTName />
          </span>
        </div>

        <div className="flex justify-between">
          <span>Description:</span>
          <span className="font-medium">
            <NFTDescription />
          </span>
        </div>
      </div>
    </NFTProvider>
  );
}
