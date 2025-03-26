"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";
import { createWallet } from "thirdweb/wallets";

interface ConnectWalletProps {
  className?: string;
}

const wallets = [
  createWallet("io.metamask"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("com.coinbase.wallet"),
];

export default function ConnectWallet({ className = "" }: ConnectWalletProps) {
  return (
    <div className={className}>
      <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{
          size: "compact",
          showThirdwebBranding: false,
          title: "Connect Your Wallet",
        }}
      />
    </div>
  );
}
