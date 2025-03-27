"use client";

import { NFTProvider, NFTMedia, NFTName, NFTDescription } from "thirdweb/react";
import { getContract } from "thirdweb";
import { client } from "@/lib/client";
import { base } from "thirdweb/chains";

const contract = getContract({
  address: "0x341e31A34A7672C2f2693fB5b8313cE7F45ff760",
  chain: base,
  client,
});

export default function NFTInfo() {
  return (
    <NFTProvider contract={contract} tokenId={0n}>
      <div className="aspect-square bg-rebel-red rounded-xl mb-6 overflow-hidden">
        <NFTMedia className="w-full h-full object-cover rounded-xl"
         mediaResolver={{
            src: "/NFTImage.png",
            // Poster is applicable to medias that are videos and audios
            poster: "/NFTImage.png",
          }}
        />
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

        <div className="flex justify-between">
          <span>Price:</span>
          <span className="font-bold">0.03 ETH</span>
        </div>
      </div>
    </NFTProvider>
  );
}
